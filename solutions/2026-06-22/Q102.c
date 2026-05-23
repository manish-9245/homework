/*
 * Problem: Create voting eligibility system.
 */

#include <stdio.h>
int main() {
  int age;
  scanf("%d", &age);
  printf(age >= 18 ? "Eligible" : "Not Eligible");
  return 0;
}
