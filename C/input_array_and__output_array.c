#include<stdio.h>
#include<stdlib.h>

int main(void){
    int array[5];
    printf("Enter 5 numbers to the the array to print the array: ");
    for (int i = 0; i < 5;i++){
        scanf("%d",&array[i]);
    }
    for (int i = 0; i < 5;i++){
        printf("%d ",array[i]);
    }
}