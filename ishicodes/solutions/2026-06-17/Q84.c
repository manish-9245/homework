/*
 * Problem: Convert lowercase to uppercase.
 */

#include<stdio.h>
#include<ctype.h>
int main() {
    char s[1000];scanf("%s",s);for(int i=0;s[i];i++)s[i]=toupper(s[i]);printf("%s",s);
    return 0;
}

