/*
 * Problem: Find largest prime factor.
 */

#include<stdio.h>
int main() {
    long long n,m=-1;scanf("%lld",&n);while(n%2==0){m=2;n/=2;}for(long long i=3;i*i<=n;i+=2)while(n%i==0){m=i;n/=i;}if(n>2)m=n;printf("%lld",m);
    return 0;
}

