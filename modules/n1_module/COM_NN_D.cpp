#include <iostream>


int COM_NN_D(char* arr1, int size1, char* arr2, int size2) // N1
{
	if (size1 > size2)
		return 2; 
	if (size2 > size1)
		return 1;  
	bool check = false;
	if (size2 == size1)
	{
		for (int i = 0; i < size2; ++i)
		{
			if (arr1[i] > arr2[i])
				return 2;
			if (arr1[i] < arr2[i])
				return 1;
		}
		return 0;
	}
}
