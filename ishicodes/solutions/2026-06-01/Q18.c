/*
 * Problem: Check strong number.
 */

#include<stdio.h>
int fact(int n){return n<=1?1:n*fact(n-1);}
int main() {
    int n,t,s=0;scanf("%d",&n);t=n;while(t){s+=fact(t%10);t/=10;}if(s==n)printf("Yes");else printf("No");
    return 0;
}

