#include<stdio.h>
#include<stdlib.h>


int main (void){
    int n;
    int sum = 0;
    printf("Enter a limit: ");
    scanf("%d",&n);

    for (int i = 1; i <= n;i++){
        sum+=i;
    }
    printf("sum of first %d numbers is: %d",n,sum);
}