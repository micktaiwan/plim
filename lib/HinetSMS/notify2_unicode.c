/**********************************************************************
*	Project     : Unix/Linux Socket2air Example Applications
*	Description : notify2 <Ip Addr> <Login> <Pw> <TelNum> <Message>
*  compiler for Unix  : gcc -o notify2_unicode -lsocket -lnsl notify2_unicode.c big5_unicode.c
*  compiler for Linux : gcc -o notify2_unicode notify2_unicode.c big5_unicode.c
**********************************************************************/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include "big5_unicode.h"

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

void LogMessage(char *info, char *Login, char *MsgId, char *TelNum, char *Msg)
{
   char str_time[50];
   char TmpStr[300];
   time_t tnow;
   struct tm *lctime;
   FILE *fp;
   if( (fp=fopen("notify2_unicode.log","a+")) == NULL )
      return;
   time(&tnow);
   lctime = localtime(&tnow);
   strftime(str_time, 80, "%Y%m%d.%H%M%S", lctime);
   sprintf(TmpStr,"%s %8s %8s %10s %s %s\n", str_time, Login, MsgId, TelNum, info, Msg);
   fputs(TmpStr, fp);
   fclose(fp);
}

int main(int argc, char *argv[])
{
int i,iPos,ret;
int sockfd;
int unicode_len;
struct Send_Msg sendMsg;
struct Ret_Msg retMsg;
struct sockaddr_in servaddr;

char IpAddr[20] = "";		//Server IP 
char Login[10] = "";		//�n�J�b��
char Pw[10] = "";		//�n�J�K�X
char TelNum[20] = "";		//���T�̪�������X
char Send_Type[3];              //�]�w�ǰe�Φ� 01: �Y�ɶǰe 03:���ɶǰe 
char Msg_Content[160] = "";	//���ǰe��²�T���e
char MsgId[25] = "";		//�^�Ǫ�Message ID
unsigned char Msg_Content_unicode[160]; //�Ȧsbig5 to unicode���� 

if(argc<6)
{
   printf("\nUsage : notify2 <Ip Addr> <Login> <Pw> <TelNum> <Msg> ");
   printf("\n <ex>: notify2 202.39.54.130 test test1 0932xxxxxx System Crit Alarm");
   printf("\nOutput: notify2.log");
   printf("\n <ex>: <Date.Time> <Login> <MessageId> <TelNum> <Status> <Msg>\n");
   LogMessage("Fail:Argument_Error! ","", "", "", "");
   exit(0);
}

strcpy(IpAddr, argv[1]);
strcpy(Login, argv[2]);
strcpy(Pw, argv[3]);
strcpy(TelNum, argv[4]);
strcpy(Msg_Content, "");
for(i=5; i<argc; i++){
   strcat(Msg_Content,argv[i]);
   strcat(Msg_Content," ");
}
Msg_Content[159] = '\0';

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
   LogMessage("Fail:Socket Sending_User/Pwd_Error! ",Login, MsgId, TelNum, Msg_Content);
   exit(0);
}
   
memset((char *)&retMsg, 0, sizeof(retMsg));	
if((ret = read(sockfd , (char *)&retMsg, sizeof(retMsg)))<0){   
   printf("socket receiving User/Pwd error");
   close(sockfd);
   LogMessage("Fail:Socket Receiving_User/Pwd_Error! ",Login, MsgId, TelNum, Msg_Content);
   exit(0);
}
if(retMsg.ret_code != 0 ){
   printf("Login/Password_Error !\n");
   close(sockfd);
   LogMessage("Fail:Login/Password_Error! ",Login, MsgId, TelNum, Msg_Content);
   exit(0);
}
printf("%s", retMsg.ret_content);

/******* �ǰe�T��(�ߧY�ǰe) *******/
memset((char *)&sendMsg, 0, sizeof(sendMsg));
sendMsg.msg_type = 1;   //�T�����A 1 -> �ǰe��r²�T
sendMsg.msg_coding = 3; //�T���s�X���� : 3 -> unicode(ucs-2) �s�X
strcpy(Send_Type,"01");  //�]�w�ǰe�Φ� 01: �Y�ɶǰe

iPos = 0;
iPos = FillMsg(&sendMsg.msg_set[0], TelNum, iPos);//�N������X��Jmsg_set
iPos = FillMsg(&sendMsg.msg_set[0], Send_Type, iPos);   //�N�ǰe�Φ���Jmsg_set
sendMsg.msg_set_len = iPos;


//�N²�T���e�qbig5�নunicode(ucs-2)�s�X
unicode_len=big5_unicode(Msg_Content, strlen(Msg_Content), Msg_Content_unicode, 160 );

//�N²�T���e�g��msg_content
memcpy(sendMsg.msg_content, Msg_Content_unicode, unicode_len );
sendMsg.msg_content_len=unicode_len;
sendMsg.msg_content[0]=0x00;
sendMsg.msg_content[1]=0x01;


if((ret = write(sockfd , (char *)&sendMsg, sizeof(sendMsg)))<0){
   printf("socket sending message error");
   close(sockfd);
   LogMessage("Fail:Socket Sending_Message_Error! ",Login, MsgId, TelNum, Msg_Content);
   exit(0);
}

memset((char *)&retMsg, 0, sizeof(retMsg));
if((ret = read(sockfd , (char *)&retMsg, sizeof(retMsg)))<0){   
   printf("socket receiving message error");
   close(sockfd);
   LogMessage("Fail:Socket Receiving_User/Pwd_Error! ",Login, MsgId, TelNum, Msg_Content);
   exit(0);
}

strcpy(MsgId, retMsg.ret_content);
printf("\nret_code[%d],Message Id[%s]\n", retMsg.ret_code,MsgId);
LogMessage("Success! ",Login, MsgId, TelNum, Msg_Content);
close(sockfd);
}
