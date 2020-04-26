#include <iostream>

using namespace std;

int main()
{
    setlocale(0, "rus");

    int* arr;
    int size;

    cout << "Введите количество элементов n = ";
    cin >> size;

    if (size <= 0) {
        cerr << "Длинна массива меньше 1" << endl;
        return 1;
    }

    arr = new int[size];

    for (int i = 0; i < size; i++) {
        cout << "arr[" << i << "] = ";
        cin >> arr[i];
    }

    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    cout << "Максимальный элемент = " << max << endl;

    delete[] arr;
    system("pause");
    return 0;
}