/*
 * Problem: Create ticket booking system.
 */

#include<stdio.h>
int main() {
    int avail=50,req;scanf("%d",&req);if(req<=avail){avail-=req;printf("Booked %d",req);}else printf("Not available");
    return 0;
}

