/*
 * Problem: Write function for perfect number.
 */

#include<stdio.h>
int isPerfect(int n){int s=0;for(int i=1;i<n;i++)if(n%i==0)s+=i;return s==n;}
int main() {
    int n;scanf("%d",&n);printf(isPerfect(n)?"Yes":"No");
    return 0;
}

