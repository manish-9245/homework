/*
 * Problem: Find common characters in strings.
 */

#include <stdio.h>
int main() {
  char s1[100], s2[100];
  scanf("%s%s", s1, s2);
  int f1[256] = {0}, f2[256] = {0};
  for (int i = 0; s1[i]; i++)
    f1[s1[i]]++;
  for (int i = 0; s2[i]; i++)
    f2[s2[i]]++;
  for (int i = 0; i < 256; i++)
    if (f1[i] && f2[i])
      printf("%c", i);
  return 0;
}
