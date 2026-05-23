/*
 * Problem: Count even and odd elements.
 */

#include<stdio.h>
int main() {
    int n,e=0,o=0;scanf("%d",&n);for(int i=0,x;i<n;i++){scanf("%d",&x);x%2==0?e++:o++;}printf("Even: %d, Odd: %d",e,o);
    return 0;
}

