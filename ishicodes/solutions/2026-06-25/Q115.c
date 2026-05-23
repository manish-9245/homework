/*
 * Problem: Create menu-driven string operations system.
 */

#include<stdio.h>
#include<string.h>
int main() {
    char s[100];int c;scanf("%s%d",s,&c);if(c==1)printf("%lu",strlen(s));
    return 0;
}

