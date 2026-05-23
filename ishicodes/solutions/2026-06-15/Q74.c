/*
 * Problem: Subtract matrices.
 */

#include<stdio.h>
int main() {
    int n;scanf("%d",&n);int a[n][n],b[n][n];for(int i=0;i<n;i++)for(int j=0;j<n;j++)scanf("%d",&a[i][j]);for(int i=0;i<n;i++)for(int j=0;j<n;j++)scanf("%d",&b[i][j]);for(int i=0;i<n;i++){for(int j=0;j<n;j++)printf("%d ",a[i][j]-b[i][j]);printf("\n");}
    return 0;
}

