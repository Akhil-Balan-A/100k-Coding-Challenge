#include<stdio.h>
#include<stdlib.h>

int main (void){
    float a = 10.3,b=20.5,sum=0.0;
    sum = a+b;
    printf("sum of %f and %f is %f",a,b,sum);//to view two decimal places, use %.2f instead of %f.   
    return EXIT_SUCCESS;
}
