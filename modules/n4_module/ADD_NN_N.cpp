#include <iostream>
using namespace std;

int *sum(int *a, int *b, int n1, int n2)
{
	while (n1 >= 0 || n2 >= 0)
	{
		a[n1] += b[n2];
		a[n1 - 1] += a[n1] / 10;
		a[n1] %= 10;
		n1--;
		n2--;
		if (a[0] == 0)
			a[0] = 10;
	}
	return a;
} //ADD_NN_N Егупова Ксения 9372
