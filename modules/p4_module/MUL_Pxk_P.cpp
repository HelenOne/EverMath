#include <iostream>
#include <clocale>
#include <conio.h>
#include <Windows.h>

using namespace std;

int* MUL_Pxk_P(int* c, int m, int k)
{
	setlocale(LC_ALL, "RUS");
	SetConsoleCP(CP_UTF8);
	SetConsoleOutputCP(CP_UTF8);

	//k - степень х, массив коэффициентов С, степень многочлена m
	int* c_f = new int[m+1+k];

	for (int i = 0; i < m + 1 + k; i++)
	{
		if (i < m + 1)
		{
			c_f[i] = c[i];
		}
		else
		{
			c_f[i] = 0;
		}
	}
	return c_f;
	delete[] c_f;
}