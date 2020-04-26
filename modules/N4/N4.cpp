#include <iostream>
using namespace std;

int* sum(int*a, int*b, int n1, int n2)
{
	while (n1 >= 0 || n2 >= 0)
	{
		a[n1] += b[n2];
		a[n1 - 1] += a[n1] / 10;
		a[n1] %= 10;
		n1--;
		n2--;
		if (a[0] == 0) a[0] = 10;
	}
	return a;
}//ADD_NN_N Егупова Ксения 9372



int main() {
	int n1;
	cout << "кол-во цифр первого числа: ";
	cin >> n1;
	int size = n1;
	cout << "введите цифры числа: ";
	int *a = new int[n1];
	for (int i = 0; i < n1; i++)
	{
		cin >> a[i];
	}
	int n2;
	cout << "кол-во цифр второго числа: ";
	cin >> n2;
	cout << "введите цифры числа: ";
	int *b = new int[n2];
	for (int i = 0; i < n2; i++)
	{
		cin >> b[i];
	}


	a = sum(a, b, n1, n2);


	for (int i = 0;i < size;i++)
	{

		cout << a[i];
	}

}