/*
 * Problem: Find x^n without pow().
 */

#include<stdio.h>
int main() {
    long long x,n,r=1;scanf("%lld%lld",&x,&n);while(n--)r*=x;printf("%lld",r);
    return 0;
}

