#include<stdio.h>
#include<stdlib.h>

int main (){
    int sum=0,size=5,array[size];
    printf("Enter 5 numbers to find the sum: ");
    for (int i = 0; i < size;i++){
        scanf("%d",&array[i]);
        sum+=array[i];
    }

    printf("sum of given numbers is: %d",sum);


}