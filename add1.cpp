#include<pch.h>
#include <iostream>
using namespace std;

int* inc(int*arr, int n) 
{

	if (arr[n - 1] != 9)
		arr[n - 1]++;
	else
	{
		for (int i = n - 1;i >= 0;i--) 
		{
			arr[i] = 0;
			arr[i - 1]++;
			if (arr[0] == 0) arr[0] = 10;
			if (arr[i - 1] <= 9) break;

		}
	}
	return arr;
	//ADD_1N_N  Егупова Ксения
}

int main() {
	setlocale(0, "");

	int n;
	int a = 1;
	cout << "Введите количество чисел, которое вы хотите ввести: ";
	cin >> n;

	cout << "Введите " << n << " чисел: ";

	int* arr = new int[n];    // создаем динамический массив
	for (int i = 0; i < n; i++) {
		cin >> arr[i];  // считываем числа в ячейки массива
	}
	 
	arr = inc(arr, n);

	for (int i = 0; i < n; i++) {
		cout<< arr[i];  // выводим
	}
}