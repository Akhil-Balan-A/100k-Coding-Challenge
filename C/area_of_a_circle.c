#include <stdio.h>


//program to calculate area of a circle using variable & constant.
int main(){
    const float PI = 3.14159;
    float radius = 5.0;
    float area ;

    area = PI * radius * radius;

    printf("Area = %.2f\n",area);

    return 0;


}