

#include <iostream>
using namespace std;


int* DER_P_P (int size, int* mas) // P12
{
	
	for (int i = 1; i < size; ++i)
	{
		mas[i - 1] = mas[i] * i;
	}
	mas[size - 1] = 0;
	return mas;
}
