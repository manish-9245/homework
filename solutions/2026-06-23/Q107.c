/*
 * Problem: Create salary management system.
 */

#include <stdio.h>
int main() {
  float base, da, hra, gross;
  scanf("%f%f%f", &base, &da, &hra);
  gross = base + base * da / 100 + base * hra / 100;
  printf("Gross: %.2f", gross);
  return 0;
}
