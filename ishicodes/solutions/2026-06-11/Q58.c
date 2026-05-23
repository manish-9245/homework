/*
 * Problem: Rotate array left.
 */

#include<stdio.h>
int main() {
    int n,d;scanf("%d%d",&n,&d);int a[n];for(int i=0;i<n;i++)scanf("%d",&a[i]);for(int i=0;i<n;i++)printf("%d ",a[(i+d)%n]);
    return 0;
}

