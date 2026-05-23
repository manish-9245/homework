/*
 * Problem: Check Armstrong number.
 */

#include<stdio.h>
#include<math.h>
int main() {
    int n,t,s=0,c=0;scanf("%d",&n);t=n;while(t){c++;t/=10;}t=n;while(t){s+=pow(t%10,c);t/=10;}if(s==n)printf("Yes");else printf("No");
    return 0;
}

