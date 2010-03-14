/**********************************************************************
*	Project     : Unix/Linux Socket2air Example Applications
*	Description : query_pic <Ip Addr> <Login> <Pw> <Msg_type> <MessageID>
*  compiler for Unix  : gcc -o query_pic -lsocket query_pic.c
*  compiler for Linux : gcc -o query_pic query_pic.c
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

void LogMessage(char *info, char *Login, char *MsgId, char *Msg)
{
   char str_time[50];
   char TmpStr[300];
   time_t tnow;
   struct tm *lctime;
   FILE *fp;
   if( (fp=fopen("query_pic.log","a+")) == NULL )
      return;
   time(&tnow);
   lctime = localtime(&tnow);
   strftime(str_time, 80, "%Y%m%d.%H%M%S", lctime);
   sprintf(TmpStr,"%s %8s %s %s %s\n", str_time, Login, MsgId, info, Msg);
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
char TelNum[20] = "";		//���T�̪�������X
char Send_Type[3];              //�]�w�ǰe�Φ� 01: �Y�ɶǰe 03:���ɶǰe 
char Msg_Set[100] = "";	//�d�߮��x�sMessageID
int  Query_Type;

if(argc<6)
{
   printf("\nUsage : query_pic <Ip Addr> <Login> <Pw> <Type> <MsgID> ");
   printf("\n <ex>: query_pic 202.39.54.130 test test1 6 A8485839053681622407");
   printf("\nOutput: query_pic.log");
   printf("\n <ex>: <Date.Time> <Login> <MessageId> <Status> <Msg>\n");
   LogMessage("Fail:Argument_Error! ","", "", "");
   exit(0);
}

strcpy(IpAddr, argv[1]);
strcpy(Login, argv[2]);
strcpy(Pw, argv[3]);
Query_Type=atoi(argv[4]);
strcpy(Msg_Set, argv[5]);

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
   LogMessage("Fail:Socket Sending_User/Pwd_Error! ",Login, "", "");
   exit(0);
}
   
memset((char *)&retMsg, 0, sizeof(retMsg));	
if((ret = read(sockfd , (char *)&retMsg, sizeof(retMsg)))<0){   
   printf("socket receiving User/Pwd error");
   close(sockfd);
   LogMessage("Fail:Socket Receiving_User/Pwd_Error! ",Login, "","");
   exit(0);
}
if(retMsg.ret_code != 0 ){
   printf("Login/Password_Error !\n");
   close(sockfd);
   LogMessage("Fail:Login/Password_Error! ",Login, "", "");
   exit(0);
}
printf("%s", retMsg.ret_content);

/******* �d�߶ǰe���G *******/
memset((char *)&sendMsg, 0, sizeof(sendMsg));
sendMsg.msg_type = Query_Type;   //�d�߶ǰe���G 2,6,8,10
sendMsg.msg_coding = 1; //�T���s�X���� : 1 -> big5 �s�X
strcpy(Send_Type,"01");  //�]�w�ǰe�Φ� 01: �Y�ɶǰe

iPos = 0;
iPos = FillMsg(&sendMsg.msg_set[0], Msg_Set, iPos);//�NMessageID��Jmsg_set
sendMsg.msg_set_len = iPos;

if((ret = write(sockfd , (char *)&sendMsg, sizeof(sendMsg)))<0){
   printf("socket sending message error");
   close(sockfd);
   LogMessage("Fail:Socket Sending_Message_Error! ",Login, "","");
   exit(0);
}

memset((char *)&retMsg, 0, sizeof(retMsg));
if((ret = read(sockfd , (char *)&retMsg, sizeof(retMsg)))<0){   
   printf("socket receiving message error");
   close(sockfd);
   LogMessage("Fail:Socket Receiving_User/Pwd_Error! ",Login, "","");
   exit(0);
}

printf("\nret_code[%d],ret_content[%s]\n", retMsg.ret_code,retMsg.ret_content);
LogMessage("Success! ",Login, Msg_Set, retMsg.ret_content);
close(sockfd);
}
