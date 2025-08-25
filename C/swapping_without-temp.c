#include<stdio.h>
#include<stdlib.h>

int main (){
    int a = 10;
    int b = 20;
    a = a + b; //30
    b = a - b; //10
    a = a - b; //20

    printf("variable a:%d\nvariable b: %d",a,b);


}

