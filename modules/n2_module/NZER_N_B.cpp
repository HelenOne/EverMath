int NZER_N_B(int *arr, int size)
{
  for (int i = 0; i < size; i++)
  {
    if (arr[i] != 0)
    {
      return 0;
    }
  }
  return 1;
}
