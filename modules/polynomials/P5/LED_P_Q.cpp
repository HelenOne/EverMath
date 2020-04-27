#include"LED_P_Q.h"
#include<iostream>
using namespace std;
int **LED_P_Q(int **array_of_terms, long int count_of_terms) { // вернтуть коэффициент старшего разряда
	for (int i = count_of_terms - 1; i >= 0; i--) {
		if (array_of_terms[i][1] != 0) { // 0-ой элемент - знак коэффициента
			return &array_of_terms[i]; // Возврат ссылки на 0-ой элемента
		}
	}
}
