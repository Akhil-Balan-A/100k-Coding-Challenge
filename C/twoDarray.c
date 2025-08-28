#include<stdlib.h>
#include<stdio.h>

int main (void){
    int rows, cols;
    printf("Enter the 2 dimensions requird for the 2D array: ");
    scanf("%d%d",&rows,&cols);
    int twoDArray[rows][cols];
    printf("Enter %d numbers to the 2d array: ",rows*cols);
    for (int i = 0; i < rows;i++){
        for (int j = 0; j < cols;j++){
            scanf("%d",&twoDArray[i][j]);
        }
    }

    for (int i = 0; i < rows;i++){
        for (int j = 0; j < cols;j++){
            printf("%d ",twoDArray[i][j]);
        }
        printf("\n");
    }
}