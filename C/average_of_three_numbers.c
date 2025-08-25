#include<stdio.h>
#include<stdlib.h>

int main (void){
    float num1,num2,num3,avg;
    printf("Enter three numbers find average: ");
    scanf("%f%f%f",&num1,&num2,&num3);
    avg = (num1+num2+num3)/3;
    printf("The average of %.2f and %.2f and %.2f is %.2f",num1,num2,num3,avg);

}