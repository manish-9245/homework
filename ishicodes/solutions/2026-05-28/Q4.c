/*
 * Problem: Count digits in a number.
 */

#include<stdio.h>
int main() {
    int n,c=0;scanf("%d",&n);if(n==0)c=1;while(n){c++;n/=10;}printf("%d",c);
    return 0;
}

