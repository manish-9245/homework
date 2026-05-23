/*
 * Problem: Find missing number in array.
 */

#include<stdio.h>
int main() {
    int n,s=0,x;scanf("%d",&n);for(int i=0;i<n-1;i++){scanf("%d",&x);s+=x;}printf("%d",n*(n+1)/2-s);
    return 0;
}

