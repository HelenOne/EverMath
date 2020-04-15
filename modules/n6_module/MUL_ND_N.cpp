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
	setlocale(LC_ALL, "RUS");
	SetConsoleCP(CP_UTF8);
	SetConsoleOutputCP(CP_UTF8);
	//Ввод длинного числа как массив символов пользователем
	/*int size_a;
	wcout << L"Введите количество разрядов длинного числа" << '\n';
	cin >> size_a;
	char* a0 = new char[size_a + 1];
	wcout << L"Введите длинное число" << '\n';
	cin >> a0;

	//перевод в массив int
	int* a1 = new int[size_a];
	for (int i = 0; i < size_a; i++)
	{
		a1[i] = static_cast<int>(a0[i]) - 48;
	}
	delete[] a0;*/

	//Ввод как массива int польозвателем
	/*int size_a;
	wcout << L"Введите количество разрядов длинного числа" << '\n';
	cin >> size_a;
	int* a1 = new int[size_a];
	cout << "Введите длинное число" << '\n';
	for (int i = 0; i < size_a; i++)
	{
		a1[i] = _getch() - 48;
		cout << a1[i];
	}
	cout << '\n';*/

	/*int b;
	wcout << L"Введите число, на которое нужно умножить" << '\n';
	cin >> b;*/

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

	int k = 0;
	if (c[0] == 0)//сдвиг, чтобы старший разряд оказался в 0 ячейке массива 
	{
		for (int i = 0; i < flenght; i++)
		{
			c[i] = c[i+1];
		}
		k = k + 1;
		c[flenght - k] = -1;
	}

	//перевод в массив символов c удалением лишних элементов
	//char* c_f = new char[flenght - k + 1];
	//for (int i = 0; (c[i] > -1) && (i < flenght - k); i++)
	//{
	//	c_f[i] = c[i] + 48;
	//	c_f[i + 1] = 0;
	//}
	//
	////Вывод массива char
	//for (int i = 0; c_f[i] != '\0'; i++)
	//{
	//	cout << c_f[i];
	//}
	//cout << '\n';
	//delete[] c_f;

	//удаление лишних элементов в массиве int
	int* c_f = new int[flenght - k];
	for (int i = 0; (c[i] > -1) && (i < flenght - k) ; i++)
	{
		c_f[i] = c[i];
	}
	delete[] c;
	return c_f;
	delete[] c_f;

	//Вывод как массив int
	/*for (int i = 0; i < flenght - k; i++)
	{
		cout << c_f[i];
	}
	delete[] c_f;*/
}