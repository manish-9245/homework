/*
 * Problem: Find first repeating character.
 */

#include<stdio.h>
int main() {
    char s[1000];scanf("%s",s);int f[256]={0};for(int i=0;s[i];i++){if(f[s[i]]){printf("%c",s[i]);break;}f[s[i]]=1;}
    return 0;
}

