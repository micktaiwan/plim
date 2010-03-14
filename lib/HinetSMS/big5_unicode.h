#include <iconv.h>
#define MID_LEN      255

int big5_unicode(char * from_buf, int from_len , char * to_buf , int to_len );
int convert_code(char * from_code , char * to_code , char * from_buf, int from_len , char * to_buf , int to_len );

