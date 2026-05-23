/*
 * Problem: Check string rotation.
 */

#include <stdio.h>
#include <string.h>
int main() {
  char s1[100], s2[100], t[200];
  scanf("%s%s", s1, s2);
  strcpy(t, s1);
  strcat(t, s1);
  if (strlen(s1) == strlen(s2) && strstr(t, s2))
    printf("Yes");
  else
    printf("No");
  return 0;
}
