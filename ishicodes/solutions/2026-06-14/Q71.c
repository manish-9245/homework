/*
 * Problem: Binary search.
 */

#include<stdio.h>
int main() {
    int n,k;scanf("%d",&n);int a[n];for(int i=0;i<n;i++)scanf("%d",&a[i]);scanf("%d",&k);int l=0,r=n-1,m;while(l<=r){m=l+(r-l)/2;if(a[m]==k){printf("Found at %d",m);
    return 0;
}
if(a[m]<k)l=m+1;else r=m-1;}printf("Not found");
    return 0;
}

