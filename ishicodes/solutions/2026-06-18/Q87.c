/*
 * Problem: Character frequency.
 */

#include<stdio.h>
int main() {
    char s[1000];scanf("%s",s);int f[256]={0};for(int i=0;s[i];i++)f[s[i]]++;for(int i=0;i<256;i++)if(f[i])printf("%c:%d ",i,f[i]);
    return 0;
}

