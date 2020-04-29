#include <memory.h>
#include <string.h>
#include <iostream>

using namespace std;

int* MUL_NN_N(int* num1, int* num2, int num1last, int num2last) {  \\ num1last - индекс последнего элемента массива num1, num2last соответственно
	int *res = (int*)malloc(sizeof(int) * (num1last + 1));     
	memcpy(res, num1, sizeof(int) * (num1last + 1));
	memset(res, 0, sizeof(int) * (num1last + 1));
	int numlast = num1last;
	int i;
	int resadd = 0;
	int k = 0;
		for (; num2last >= 0;) {
			i = num1last;
			bool d = 1;
				if (d && resadd) {                                                \\ добавление в массив res 1 разряда 
					res = (int*)realloc(res, sizeof(int) * (numlast + 1 + 1));
						int b = 1;
						memcpy(res + b, res, sizeof(int) * (numlast + 1));
						while (b) {
							res[b - 1] = 0;
							--b;
						}
						++numlast;
						d = 0;
				}
			        int c = k;
				for (; i >= 0;) {                                                \\ сложение итогового массива с результатом умножения исходных

					res[numlast - c] = res[numlast - c] + num1[i] * num2[num2last];
					--i;
					++c;
				}
			        ++k;
				int reslast = numlast;
				for (;  reslast >= 0;) {                                                              \\ преобразование итогового массива
					if (reslast >= 1) {
						if (res[reslast] >= 10) {
							res[reslast - 1] = res[reslast - 1] + (res[reslast] / 10);
							res[reslast] %= 10;
							--reslast;
						}
						else
							--reslast;
					}
					else {
						if (res[reslast] >= 10) {                               \\ добавление 1 разряда если 0-ой элемент >= 10
							res = (int*)realloc(res, sizeof(int) * (numlast + 2));
							memmove(res + 1, res, sizeof(int) * (numlast + 1));
							res[reslast] = res[reslast + 1] / 10;
							res[reslast + 1] %= 10;
							--reslast;
							++numlast;
						}
						--reslast;
					}
				}
			--num2last;
			resadd = 1;
		}
	
 	return res;
}
