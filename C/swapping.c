#include<stdio.h>
#include<stdlib.h>

int main(){
    int num1, num2,temp;
    printf("Assign a number to the variable a: ");
    scanf("%d",&num1);
    printf("Assign a number to the variable b: ");
    scanf("%d",&num2);
    printf("variable a = %d \nvariable b = %d\n",num1,num2);
    temp = num1;
    num1 = num2;
    num2 = temp;
    printf ("After swap now variable a = %d \n variable b = %d",num1,num2 );
    return EXIT_SUCCESS;
}