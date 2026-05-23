/*
 * Problem: Find pair with given sum.
 */

#include<stdio.h>
int main() {
    int n,s;scanf("%d",&n);int a[n];for(int i=0;i<n;i++)scanf("%d",&a[i]);scanf("%d",&s);for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(a[i]+a[j]==s)printf("%d %d\n",a[i],a[j]);
    return 0;
}

