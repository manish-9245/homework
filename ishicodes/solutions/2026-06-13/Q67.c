/*
 * Problem: Intersection of arrays.
 */

#include<stdio.h>
int main() {
    int n,m;scanf("%d%d",&n,&m);int a[n],b[m];for(int i=0;i<n;i++)scanf("%d",&a[i]);for(int i=0;i<m;i++){scanf("%d",&b[i]);for(int j=0;j<n;j++)if(b[i]==a[j]){printf("%d ",b[i]);break;}}
    return 0;
}

