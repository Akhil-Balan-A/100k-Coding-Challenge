#include<stdio.h>
#include<stdlib.h>

int main (void){
    int num;
    printf("Enter a number to check whether it is even or odd: ");
    scanf("%d",&num);
    if(num%2==0){
        printf("The given number is a even number");
    }else{
        printf("The given number is a odd number");
    }
    return EXIT_SUCCESS;
}