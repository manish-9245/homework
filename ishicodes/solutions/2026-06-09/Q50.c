/*
 * Problem: Find sum and average of array.
 */

#include<stdio.h>
int main() {
    int n,s=0;scanf("%d",&n);for(int i=0,x;i<n;i++){scanf("%d",&x);s+=x;}printf("Sum: %d, Avg: %.2f",s,(float)s/n);
    return 0;
}

