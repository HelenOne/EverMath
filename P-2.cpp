

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



int main()
{
    /*int* p1 = (int*)malloc(sizeof(int) * 2);
    p1[0] = 1;
    p1[1] = 3;
    int* p2 = (int*)malloc(sizeof(int) * 3);
    p2[0] = 1;
    p2[1] = 3;
    p2[2] = 6;
    int* p = SUB_PP_P(2, p1, 3, p2);
    for (int i = 0; i < 3; ++i)
    {
        cout << p[i] << endl;
    }
    system("pause");*/
    return 0;
}

