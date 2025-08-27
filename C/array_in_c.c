#include<stdio.h>
#include<stdlib.h>

int main (void){
    // int array[5];
    // array[0] = 1;
    // array[1] = 1;
    // array[2] = 1;
    // array[3] = 1;
    // array[4] = 1;

    // int array[5] = {1,2,3,4,5} ;

    int array[] = {1,2,3,4,5,6};// automatic size fixing .

    int size = sizeof(array)/sizeof(array[0]);
    for (int i = 0; i <size;i++){
        printf("%d ", array[i]);
    }
}



