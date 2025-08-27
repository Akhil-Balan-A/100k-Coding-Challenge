
/*
Scenario:
When you go to an ATM, you must enter your PIN at least once.
If the PIN is wrong, the ATM asks you again (until you get it correct or run out of chances).

Task:

Ask the user to enter their 4-digit PIN.

Correct PIN is 1234.

Allow up to 3 attempts.

If correct, print "Access Granted".

If wrong after 3 attempts, print "Card Blocked".
*/
 
#include<stdio.h>
#include<stdlib.h>
void pinCheck(PIN,input);
int main (void){
    int PIN = 1234;
    int input;
    int attempts = 0;
    do{
        if(attempts==0){
            printf("Please insert your card and enter your PIN: ");
            scanf("%d",&input);
            pinCheck(PIN,input);
            attempts++;