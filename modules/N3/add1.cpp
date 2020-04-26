#include <iostream>
using namespace std;

int *ADD_1N_N(int *arr, int n)
{

	if (arr[n - 1] != 9)
		arr[n - 1]++;
	else
	{
		for (int i = n - 1; i >= 0; i--)
		{
			arr[i] = 0;
			arr[i - 1]++;
			if (arr[0] == 0)
				arr[0] = 10;
			if (arr[i - 1] <= 9)
				break;
		}
	}
	return arr;
	//ADD_1N_N  Егупова Ксения
}
