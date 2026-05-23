/*
 * Problem: Check symmetric matrix.
 */

#include<stdio.h>
int main() {
    int n,f=1;scanf("%d",&n);int a[n][n];for(int i=0;i<n;i++)for(int j=0;j<n;j++)scanf("%d",&a[i][j]);for(int i=0;i<n;i++)for(int j=0;j<n;j++)if(a[i][j]!=a[j][i])f=0;printf(f?"Yes":"No");
    return 0;
}

