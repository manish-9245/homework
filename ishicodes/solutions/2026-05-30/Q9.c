/*
 * Problem: Check whether a number is prime.
 */

#include<stdio.h>
int main() {
    int n,f=1;scanf("%d",&n);for(int i=2;i*i<=n;i++)if(n%i==0)f=0;printf((f&&n>1)?"Yes":"No");
    return 0;
}

