/**********************************************************************
*	Project     : Unix/Linux Socket2air Example Applications
*	Description : notify2 <Ip Addr> <Login> <Pw> <TelNum> <Message>
*  compiler for Unix  : gcc -o notify2 -lsocket -lnsl notify2.c
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
   unsigned	char  msg_type;		//訊息型態
   unsigned	char  msg_coding;	//訊息編碼種類
   unsigned	char  msg_priority;	//訊息優先權
   unsigned	char  msg_country_code; //手機國碼
   unsigned	char  msg_set_len;	//msg_set[] 訊息內容的長度
   unsigned	char  msg_content_len;	//msg_content[]訊息內容的長度
             	char  msg_set[100];	//訊息相關資料設定
              	char  msg_content[160];	//簡訊內容
};

struct Ret_Msg{
   unsigned	char  ret_code ;	//回傳訊息代碼
   unsigned	char  ret_coding ; 	//訊息編碼種類
   unsigned	char  ret_set_len;	//ret_set[] 訊息內容的長度
   unsigned	char  ret_content_len;	//ret_content[]訊息內容的長度
           	char  ret_set[80];	//訊息相關資料
           	char  ret_content[160];	//MessageID or 收訊者回傳的簡訊內容
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
   if( (fp=fopen("notify2.log","a+")) == NULL )
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
struct Send_Msg sendMsg;
struct Ret_Msg retMsg;
struct sockaddr_in servaddr;

char IpAddr[20] = "";		//Server IP 
char Login[10] = "";		//登入帳號
char Pw[10] = "";		//登入密碼
char TelNum[20] = "";		//收訊者的手機號碼
char Send_Type[3];              //設定傳送形式 01: 即時傳送 03:預約傳送 
char Msg_Content[160] = "";	//欲傳送的簡訊內容
char MsgId[25] = "";		//回傳的Message ID


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

/******* 檢查Username,Pw帳號/密碼 *******/
memset((char *)&sendMsg, 0, sizeof(sendMsg));
sendMsg.msg_type = 0;
iPos = 0; 
iPos = FillMsg(&sendMsg.msg_set[0], Login, iPos); //將帳號填入msg_set
iPos = FillMsg(&sendMsg.msg_set[0], Pw, iPos);   //將密碼填入msg_set
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

/******* 傳送訊息(立即傳送) *******/
memset((char *)&sendMsg, 0, sizeof(sendMsg));
sendMsg.msg_type = 1;   //訊息型態 1 -> 傳送文字簡訊
sendMsg.msg_coding = 1; //訊息編碼種類 : 1 -> big5 編碼
strcpy(Send_Type,"01");  //設定傳送形式 01: 即時傳送

iPos = 0;
iPos = FillMsg(&sendMsg.msg_set[0], TelNum, iPos);//將手機號碼填入msg_set
iPos = FillMsg(&sendMsg.msg_set[0], Send_Type, iPos);   //將傳送形式填入msg_set
sendMsg.msg_set_len = iPos;

//將簡訊內容寫到msg_content
strcpy(sendMsg.msg_content,Msg_Content);
sendMsg.msg_content_len = strlen(Msg_Content);

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
