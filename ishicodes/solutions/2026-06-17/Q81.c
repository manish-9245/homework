/*
 * Problem: Find string length without strlen().
 */

#include<stdio.h>
int main() {
    char s[1000];scanf("%s",s);int i=0;while(s[i]!='\0')i++;printf("%d",i);
    return 0;
}

