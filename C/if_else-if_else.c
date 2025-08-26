// find which largest whic is smallest and which is in second in size...


#include<stdio.h>
#include<stdlib.h>

#include<stdio.h>
#include<stdlib.h>

int main (void){
    int num1, num2, num3;
    printf("Enter 3 numbers to check the position in terms of size: ");
    scanf("%d %d %d", &num1, &num2, &num3);
    
    if(num1 >= num2 && num1 >= num3){
        printf("The number %d is largest\n", num1);
        if(num2 >= num3){
            printf("The number %d is second largest\n", num2);
            printf("The number %d is the smallest\n", num3);
        }else{
            printf("The number %d is second largest\n", num3);
            printf("The number %d is the smallest\n", num2);
        }
    }
    else if(num2 >= num1 && num2 >= num3){
        printf("The number %d is the largest\n", num2);
        if(num1 >= num3){
            printf("The number %d is second largest\n", num1);
            printf("The number %d is the smallest\n", num3);
        }else{
            printf("The number %d is second largest\n", num3);
            printf("The number %d is the smallest\n", num1);
        }
    }
    else {
        printf("The number %d is the largest\n", num3);
        if(num1 >= num2){
            printf("The number %d is second largest\n", num1);
            printf("The number %d is smallest\n", num2);
        }else{
            printf("The number %d is second largest\n", num2);
            printf("The number %d is smallest\n", num1);
        }
    }

    return 0;
}
