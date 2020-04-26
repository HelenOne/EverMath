

#include <iostream>
#include <algorithm>


using namespace std;

char* ADD_PP_P(int size1, char* p1, int size2, char* p2) // сложение многочленов
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



int main()
{
   /* char* p1 = (char*)malloc(sizeof(char) * 2);
    p1[0] = 1;
    p1[1] = 3;
    char* p2 = (char*)malloc(sizeof(char) * 3);
    p2[0] = 1;
    p2[1] = 3;
    p2[2] = 6;
    char* p = ADD_PP_P(2, p1, 3, p2);
    for (int i = 0; i < 3; ++i)
    {
        cout <<(int) p[i];
    }
    system("pause");*/
    return 0;
}

