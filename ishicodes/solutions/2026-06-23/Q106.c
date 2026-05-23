/*
 * Problem: Create employee management system.
 */

#include<stdio.h>
struct Emp{char n[50];int id;float s;};int main() {
    struct Emp e;scanf("%s%d%f",e.n,&e.id,&e.s);printf("Emp: %s, ID: %d, Salary: %.2f",e.n,e.id,e.s);
    return 0;
}

