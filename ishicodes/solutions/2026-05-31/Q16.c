/*
 * Problem: Print Armstrong numbers in a range.
 */

#include<stdio.h>
#include<math.h>
int main() {
    int a,b;scanf("%d%d",&a,&b);for(int i=a;i<=b;i++){int t=i,s=0,c=0;while(t){c++;t/=10;}t=i;while(t){s+=pow(t%10,c);t/=10;}if(s==i)printf("%d ",i);}
    return 0;
}

