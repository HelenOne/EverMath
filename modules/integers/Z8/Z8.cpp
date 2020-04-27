// Konovalov Nikolai 
// Умножение двух чисел
#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <cstring>
#define MAX_DIGITS 1000
using namespace std;

void reverse(char* from, char* to) { //обращение строки char *
	int len = strlen(from);
	int l;
	for (l = 0; l < len; l++) to[l] = from[len - l - 1];
	to[len] = '\0';
}

char *MUL_ZZ_Z(char* first, char* second, char* result) {
	char F[MAX_DIGITS], S[MAX_DIGITS], temp[MAX_DIGITS];
	int f_len, s_len, f, s, r, t_len, hold, res;
	f_len = strlen(first);
	s_len = strlen(second);
	reverse(first, F);
	reverse(second, S);
	t_len = f_len + s_len;
	r = -1;
	for (f = 0; f <= t_len; f++)temp[f] = '0';
	temp[f] = '\0';
	for (s = 0; s < s_len; s++) {
		hold = 0;
		for (f = 0; f < f_len; f++) {
			res = (F[f] - '0') * (S[s] - '0') + hold + (temp[f + s] - '0');
			temp[f + s] = res % 10 + '0';
			hold = res / 10;
			if (f + s > r) r = f + s;
		}
		while (hold != 0) {
			res = hold + temp[f + s] - '0';
			hold = res / 10;
			temp[f + s] = res % 10 + '0';
			if (r < f + s) r = f + s;
			f++;
		}
	}
	for (; r > 0 && temp[r] == '0'; r--);
	temp[r + 1] = '\0';
	reverse(temp, result);
	return result;
}