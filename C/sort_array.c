#include<stdio.h>
#include<stdlib.h>

int main (void){
    int temp;
    int arr[] = {1,9,11,6,4,7,8,9,3,14};
    int size = sizeof(arr)/sizeof(arr[0]);
    printf("%d\n",size);

    for (int i = 0; i < size - 1;i++){
        for (int j = i+1; j < size;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (int i = 0; i < size;i++){
        printf("%d ",arr[i]);
    }
}