#include<stdio.h>
#include<stdlib.h>

int main (){
    int num1;
    int num2;
    int sum;
    printf("Enter two number to find the sum: ");
    scanf("%d %d",&num1,&num2);
    sum = num1+num2;
    printf("Sum of %d and %d is %d",num1,num2,sum);
    return EXIT_SUCCESS;
}