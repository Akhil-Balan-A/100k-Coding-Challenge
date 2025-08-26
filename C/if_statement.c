#include<stdio.h>
#include<stdlib.h>  

int main (){
    int num1;
    printf("Enter a number to check positive or negative: ");
    scanf("%d",&num1);
    if(num1>0){
        printf("The Enter number %d is positive",num1);
        return 0;
    };
        printf("The Entered number %d is negative",num1);
    return 0;
}