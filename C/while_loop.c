#include<stdio.h>
#include<stdlib.h>

int main (){
    int num;
    int i = 1;
    printf("Enter a number to print even numbers till that number: ");
    scanf("%d",&num);
    while(i<=num){
        if(i%2==0){
            printf("%d ",i);
        }
        i++;
    }
}