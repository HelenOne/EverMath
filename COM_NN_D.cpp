#include "pch.h"
#include <iostream>

using namespace std; 

void comparison(char arr[], const int size)
{
	int i;
	for (i = 0; i < size-1; i++)
	{
		if (arr[i] > arr[i + 1])
		{
			cout << "Число" << arr[i] << "больше" << arr[i + 1];
		}
		if (arr[i] < arr[i + 1])
		{
			cout << "Число" << arr[i] << "меньше" << arr[i+1];
		}
		else
		{
			cout << "Числа" << arr[i] << "и" << arr[i + 1] << "равны";
		}
	}
}

int main()
{
	const int size = 10;
	char arr[size];
}