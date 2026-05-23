/*
 * Problem: Find maximum occurring character.
 */

#include<stdio.h>
int main() {
    char s[1000];scanf("%s",s);int f[256]={0},max=0;char ans;for(int i=0;s[i];i++){f[s[i]]++;if(f[s[i]]>max){max=f[s[i]];ans=s[i];}}printf("%c",ans);
    return 0;
}

