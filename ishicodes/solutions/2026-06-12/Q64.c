/*
 * Problem: Remove duplicates from array.
 */

#include<stdio.h>
int main() {
    int n;scanf("%d",&n);int a[n];for(int i=0;i<n;i++){scanf("%d",&a[i]);int f=0;for(int j=0;j<i;j++)if(a[i]==a[j])f=1;if(!f)printf("%d ",a[i]);}
    return 0;
}

