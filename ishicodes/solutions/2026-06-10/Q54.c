/*
 * Problem: Frequency of an element.
 */

#include<stdio.h>
int main() {
    int n,k,c=0;scanf("%d",&n);int a[n];for(int i=0;i<n;i++)scanf("%d",&a[i]);scanf("%d",&k);for(int i=0;i<n;i++)if(a[i]==k)c++;printf("%d",c);
    return 0;
}

