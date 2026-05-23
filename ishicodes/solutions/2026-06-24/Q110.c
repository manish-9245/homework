/*
 * Problem: Create bank account system.
 */

#include<stdio.h>
int main() {
    float bal=0,amt;int ch;scanf("%d%f",&ch,&amt);if(ch==1)bal+=amt;else bal-=amt;printf("Balance: %.2f",bal);
    return 0;
}

