#include <iostream>
#include <algorithm>

using namespace std;

int *ADD_PP_P(int size1, int *p1, int size2, int *p2) // сложение многочленов
{
    if (size1 >= size2)
    {
        for (int i = 0; i < size2; ++i)
        {
            p1[i] += p2[i];
        }
        return p1;
    }
    else
    {
        for (int i = 0; i < size1; ++i)
        {
            p2[i] += p1[i];
        }
        return p2;
    }
}
