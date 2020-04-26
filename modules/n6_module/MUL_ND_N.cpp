#include <iostream>
#include <clocale>
#include <conio.h>
#include <Windows.h>

using namespace std;

int ilenght(int b)
{
	int f = 1;
	if (b > 9)
	{
		f++;
		b = b % 10;
	}
	return f;
}

int* MUL_ND_N(int* a1, int size_a, int b)
{
	//длина числа b
	int size_b = ilenght (b);

	//создание массива для итогового числа
	int flenght = size_a + size_b;//final lenght
	int* c = new int[flenght];

	//умножение
	for (int i = flenght - 1; i > size_b-1; i--)//поразрядное умножение
	{
		c[i] = a1[i-size_b] * b;
	}

	//delete[] a1;

	for (int i = size_b - 1; i > -1; i--)//дозаполнение массива
	{
		c[i] = 0;
	}

	int prom = 0;// промежуточное значение
	for (int i = flenght; i > -1; i--)//поразрядное сложение
	{
		c[i] = c[i] + prom;
		prom = 0;
		if (c[i] > 9)
		{
			prom = c[i] / 10;
			c[i] = c[i] % 10;
		}
	}
	return c;
	delete[] c;
}