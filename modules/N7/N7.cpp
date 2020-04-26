

#include <iostream>
using namespace std;


char* MUL_Nk_N (int size, char* num, int k) // N7
{
	num = (char*)realloc(num, sizeof(char) * (size + k));
	for (int i = size; i < size + k; ++i)
	{
		num[i] = 0;
	}
	return num;
}
