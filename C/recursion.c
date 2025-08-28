//sum of n numbers
#include<stdio.h>
#include<stdlib.h>
int summ = 0;
int count = 1;

int sum(int num);
int main (void){
    int n = 10;
    sum(n);
}

int sum(int num){
    
    summ = summ + count;

    if(count<num){
        count++;
        sum(num);
    }
    
}