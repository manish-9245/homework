/*
 * Problem: Check anagram strings.
 */

#include<stdio.h>
#include<string.h>
int main() {
    char s1[100],s2[100];scanf("%s%s",s1,s2);int f[256]={0},ans=1;for(int i=0;s1[i];i++)f[s1[i]]++;for(int i=0;s2[i];i++)f[s2[i]]--;for(int i=0;i<256;i++)if(f[i]!=0)ans=0;printf(ans?"Yes":"No");
    return 0;
}

