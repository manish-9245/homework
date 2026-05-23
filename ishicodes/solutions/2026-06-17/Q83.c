/*
 * Problem: Count vowels and consonants.
 */

#include<stdio.h>
#include<ctype.h>
int main() {
    char s[1000];scanf("%s",s);int v=0,c=0,i=0;while(s[i]){char x=tolower(s[i]);if(isalpha(x)){if(x=='a'||x=='e'||x=='i'||x=='o'||x=='u')v++;else c++;}i++;}printf("Vowels: %d, Consonants: %d",v,c);
    return 0;
}

