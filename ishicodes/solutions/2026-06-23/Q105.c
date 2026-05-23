/*
 * Problem: Create student record management system.
 */

#include <stdio.h>
struct Student {
  char n[50];
  int r;
  float m;
};
int main() {
  struct Student s[100];
  int c = 0;
  scanf("%s%d%f", s[c].n, &s[c].r, &s[c].m);
  c++;
  printf("Name: %s, Roll: %d, Marks: %.2f", s[0].n, s[0].r, s[0].m);
  return 0;
}
