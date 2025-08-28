#include <stdio.h>
#include <stdlib.h>

// 🔹 Function Declaration (Prototype)
int sum(int num1, int num2);

int main() {
    int num1 = 10;
    int num2 = 20;

    // 🔹 Function Call
    int result = sum(num1, num2);

    printf("sum of %d and %d is %d", num1, num2, result);
    return 0;
}

// 🔹 Function Definition
int sum(int num1, int num2) {
    return num1 + num2;
}
