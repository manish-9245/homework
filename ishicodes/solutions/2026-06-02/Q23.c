/*
 * Problem: Count set bits in a number.
 */

#include<stdio.h>
int main() {
    int n,c=0;scanf("%d",&n);while(n){n&=(n-1);c++;}printf("%d",c);
    return 0;
}

