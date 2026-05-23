/*
 * Problem: Second largest element.
 */

#include<stdio.h>
int main() {
    int n,m1=-1e9,m2=-1e9;scanf("%d",&n);for(int i=0,x;i<n;i++){scanf("%d",&x);if(x>m1){m2=m1;m1=x;}else if(x>m2 && x!=m1)m2=x;}printf("%d",m2);
    return 0;
}

