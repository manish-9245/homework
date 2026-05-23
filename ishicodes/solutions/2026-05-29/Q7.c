/*
 * Problem: Find product of digits.
 */

#include<stdio.h>
int main() {
    int n,p=1;scanf("%d",&n);if(n==0)p=0;if(n<0)n=-n;while(n){p*=n%10;n/=10;}printf("%d",p);
    return 0;
}

