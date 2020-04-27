#include <cstdlib>

int *ADD_1N_N(int *arr, int n)
{
	int carry = 0;
	int *result = (int *)std::malloc((n) * sizeof(int));
	for (int i = 0; i < n; i++)
	{
		result[i] = arr[i];
	}
	result[n] = '\0';

	for (int i = 0; i < n || carry != 0; i++)
	{
		if (i == n)
		{
			result = (int *)std::realloc(result, (n + 1) * sizeof(int));

			result[i + 1] = 0;
		}
		result[i] += carry + (i < 1 ? 1 : 0);
		carry = arr[i] >= 10;
		if (carry != 0)
			result[i] -= 10;
	}

	return result;
}