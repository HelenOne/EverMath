
#include <iostream>


char* SUB_NN_N(char* arr1, int size1, char* arr2, int size2) // N5
{
	
	for (int i = size1 - 1; i >= 0; --i)
	{
		if (arr1[i] >= arr2[i]) 
			arr1 -= arr2[i];
		else 
		{
			if (arr1[i - 1] != 0)
			{
				arr1[i - 1]--;
				arr1[i] = arr1[i] - arr2[i] + 10;
			}
			else
			{
				int j = i + 1;
				do
				{
					arr1[j] = 9;
					--j;
				} while (arr1[j] == 0);
			}

		}
	}
	return arr1;
}


