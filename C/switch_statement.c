//leave day selector using switch statement.

#include<stdlib.h>
#include<stdio.h>

int main(void){
    int num;
    printf("for selecting leave please select corresponding number from the below");
    printf("Press 1 for Monday\nPress 2 for Tuesday\nPress 3 for Wednesday\nPress 4 for Thursday\nPress 5 for Friday\n\nEnter Your Number here:  ");
    scanf ("%d",&num);
    switch(num){
        case 1:
            printf("You have aloted a leave on Monday");
        break;
        case 2: 
            printf("You have aloted a leave on Tuesday");
        break;
        case 3:
            printf("You have aloted a leave on Wednesday");
        break;
        case 4:
            printf("You have aloted a leave on Thursday");
        break;
        case 5:
            printf("You have aloted a leave on Frieday");
        break;
        default:
            printf("You have choose a wrong day");
    }
}