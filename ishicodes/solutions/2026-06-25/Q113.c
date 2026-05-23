/*
 * Problem: Create menu-driven calculator.
 */

#include<stdio.h>
int main() {
    int a,b,c;scanf("%d%d%d",&a,&b,&c);if(c==1)printf("%d",a+b);else if(c==2)printf("%d",a-b);else if(c==3)printf("%d",a*b);
    return 0;
}

