/**********************************************************************
*	Project     : Unix/Linux Socket2air Example Applications
*	Description : notify2 <Ip Addr> <Login> <Pw> <TelNum> <Message>
*  compiler for Unix  : gcc -o notify2 -lsocket notify2.c
*  compiler for Linux : gcc -o notify2 notify2.c
**********************************************************************/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <sys/socket.h>
#include <netinet/in.h>

#define SERV_PORT 8000  //Server Port

struct Send_Msg{
   unsigned	char  msg_type;		//�T�����A
   unsigned	char  msg_coding;	//�T���s�X����
   unsigned	char  msg_priority;	//�T���u���v
   unsigned	char  msg_country_code; //�����X
   unsigned	char  msg_set_len;	//msg_set[] �T�����e������
   unsigned	char  msg_content_len;	//msg_content[]�T�����e������
             	char  msg_set[100];	//�T��������Ƴ]�w
              	char  msg_content[160];	//²�T���e
};

struct Ret_Msg{
   unsigned	char  ret_code ;	//�^�ǰT���N�X
   unsigned	char  ret_coding ; 	//�T���s�X����
   unsigned	char  ret_set_len;	//ret_set[] �T�����e������
   unsigned	char  ret_content_len;	//ret_content[]�T�����e������
           	char  ret_set[80];	//�T���������
           	char  ret_content[160];	//MessageID or ���T�̦^�Ǫ�²�T���e
};

int FillMsg(char *src, char *target, int n)
{
   int i,len;
   len = strlen(target);
   for(i=0; i<len; i++)
	src[n++] = target[i];
   src[n++] = '\0';
   return(n);
}

void LogMessage(char *info, char *Login, char *Msg)
{
   char str_time[50];
   char TmpStr[300];
   time_t tnow;
   struct tm *lctime;
   FILE *fp;
   if( (fp=fopen("receive2.log","a+")) == NULL )
      return;
   time(&tnow);
   lctime = localtime(&tnow);
   strftime(str_time, 80, "%Y%m%d.%H%M%S", lctime);
   sprintf(TmpStr,"%s %8s %s %s\n", str_time, Login, info, Msg);
   fputs(TmpStr, fp);
   fclose(fp);
}

int main(int argc, char *argv[])
{
int i,iPos,ret;
int sockfd;
struct Send_Msg sendMsg;
struct Ret_Msg retMsg;
struct sockaddr_in servaddr;

char IpAddr[20] = "";		//Server IP 
char Login[10] = "";		//�n�J�b��
char Pw[10] = "";		//�n�J�K�X


if(argc<4)
{
   printf("\nUsage : notify2 <Ip Addr> <Login> <Pw>");
   printf("\n <ex>: notify2 202.39.54.130 test test1");
   printf("\nOutput: receive2.log");
   printf("\n <ex>: <Date.Time> <Login> <Msg>\n");
   LogMessage("Fail:Argument_Error! ","", "");
   exit(0);
}

strcpy(IpAddr, argv[1]);
strcpy(Login, argv[2]);
strcpy(Pw, argv[3]);

/******* Startup Socket *******/
if ( (sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0)
   printf("socket error");
bzero(&servaddr, sizeof(servaddr));
servaddr.sin_family = AF_INET;
servaddr.sin_port   = htons(SERV_PORT);
if (inet_pton(AF_INET, argv[1], &servaddr.sin_addr) <= 0){
   printf("socket inet_pton error for %s", argv[1]);
   exit(0);
}
if (connect(sockfd, (struct sockaddr *) &servaddr, sizeof(servaddr)) < 0){
   printf("socket connect error");
   exit(0);
}

/******* �ˬdUsername,Pw�b��/�K�X *******/
memset((char *)&sendMsg, 0, sizeof(sendMsg));
sendMsg.msg_type = 0;
iPos = 0; 
iPos = FillMsg(&sendMsg.msg_set[0], Login, iPos); //�N�b����Jmsg_set
iPos = FillMsg(&sendMsg.msg_set[0], Pw, iPos);   //�N�K�X��Jmsg_set
sendMsg.msg_set_len = iPos;

if((ret = write(sockfd , (char *)&sendMsg, sizeof(sendMsg)))<0){
   printf("socket sending User/Pwd error");
   close(sockfd);
   LogMessage("Fail:Socket Sending_User/Pwd_Error! ",Login, "");
   exit(0);
}
   
memset((char *)&retMsg, 0, sizeof(retMsg));	
if((ret = read(sockfd , (char *)&retMsg, sizeof(retMsg)))<0){   
   printf("socket receiving User/Pwd error");
   close(sockfd);
   LogMessage("Fail:Socket Receiving_User/Pwd_Error! ",Login, "");
   exit(0);
}
if(retMsg.ret_code != 0 ){
   printf("Login/Password_Error !\n");
   close(sockfd);
   LogMessage("Fail:Login/Password_Error! ",Login, "");
   exit(0);
}
printf("%s", retMsg.ret_content);

/******* ������r�T�� *******/
memset((char *)&sendMsg, 0, sizeof(sendMsg));
sendMsg.msg_type = 3;   //�T�����A 3 -> ������r²�T

if((ret = write(sockfd , (char *)&sendMsg, sizeof(sendMsg)))<0){
   printf("socket sending message error");
   close(sockfd);
   LogMessage("Fail:Socket Sending_Message_Error! ",Login, "");
   exit(0);
}

memset((char *)&retMsg, 0, sizeof(retMsg));
if((ret = read(sockfd , (char *)&retMsg, sizeof(retMsg)))<0){   
   printf("socket receiving message error");
   close(sockfd);
   LogMessage("Fail:Socket Receiving_User/Pwd_Error! ",Login, "");
   exit(0);
}

printf("\nret_code[%d],Message Id[%s]\n", retMsg.ret_code,retMsg.ret_content);
LogMessage("Success! ",Login, retMsg.ret_content);
close(sockfd);
}
