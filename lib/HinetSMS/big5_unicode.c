#include "big5_unicode.h"

/*********************************************************************************************
 * transfer from big5 to utf8 then unicode(ucs-2)
 * input:  1. source code's buffer 
 *         2. source code's length 
 *         3. after transfer code's buffer
 *         4. after transfer code's buffer length 
 * output:  >0 --> 傳回轉碼成功的長度,單位為byte 
 *          -1 --> call iconv_open() fail 
 *          -2 --> transfer fail 
 */
int big5_unicode(char * from_buf, int from_len , char * to_buf , int to_len )
{
   char   from_code[]   = "zh_TW-big5"; //"zh_TW-big5" ;
   char   mid_code[]    = "UTF-8" ;
   char   to_code[]     = "UCS-2" ;
   char   mid_buf[MID_LEN] ;
   int    mid_len = MID_LEN ;
   int    ret ;
   
     ret = convert_code(from_code, mid_code, from_buf, from_len , mid_buf , mid_len);	
     if(ret > 0) {
         ret = convert_code(mid_code, to_code, mid_buf, ret , to_buf , to_len);	
     }	
     
     return(ret);	
}// end of function	




/*********************************************************************************************
 * transfer codeset : big5 <--> utf-8  , utf-8 <--> ucs-2
 * input:  1. source codeing
 *         2. destination  coding
 *         3. source code's buffer 
 *         4. source code's length 
 *         5. after transfer code's buffer
 *         6. after transfer code's buffer length 
 * output:  >0 --> 傳回轉碼成功的長度,單位為byte 
 *          -1 --> call iconv_open() fail 
 *          -2 --> transfer fail 
 */
int convert_code(char * from_code , char * to_code , char * from_buf, int from_len , char * to_buf , int to_len )
{
   iconv_t     cd;
   char        *tptr;
   const char  *fptr;
   size_t      ret;
   int         tmp_len ;
   
    /* open iconv */         
    cd = iconv_open((const char *)to_code, (const char *)from_code);
    if (cd == (iconv_t)-1) { 
        /* iconv_open failed */
        //fprintf(stderr, "Error: iconv_open(%s, %s) failed\\n", to_code, from_code);
        return (-1);
    }
    
                  
    /* begin transfer  */
    fptr = from_buf;
    tptr = to_buf;
    tmp_len = to_len ;
    
    ret = iconv(cd, &fptr, &from_len, &tptr, &to_len);
    
   
    /* close iconv */
    (void) iconv_close(cd);
         
    /* chek result */
    if (ret == (size_t)0 ) { /** iconv succeeded */
        return(tmp_len - to_len);
    } else {
        return(-2);
    }
    
}//end of function

