

#include <iostream>
#include <algorithm>


using namespace std;

int* SUB_PP_P(int size1, int* p1, int size2, int* p2) // вычитание многочленов (p1 - p2)
{
    if (size1 >= size2)
    {
        for (int i = 0; i < size2; ++i)
        {
            p1[i] -= p2[i];
        }
        return p1;
    }
    else 
    {
        for (int i = 0; i < size1; ++i)
        {
            p2[i] -= p1[i];
        }
        for (int i = 0; i < size2; ++i)
        {
            p2[i] *= (-1);
        }
        return p2;
    }
}



