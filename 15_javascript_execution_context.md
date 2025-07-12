# JavaScript Execution Context
There are three are execution context:
1. Global Execution Context ```{}```
2. Function Execution Context
3. Eval Execution Context
<br>

The code phases are:
1. Memory Creation Phase
2. Execution Phase

## How does Javascript Execute the Code
```javascript
let vall = 10
let vat2 = 5
function addNum(num1, num2){
    let total numl+num2
    return total
}
let resuttl addNum(val1, val2)
let result2 addNum(10, 2)
```
```
1. Global Execution - whole code assign to ```this```.
2. Memory Phase 
    val1 -> undefined
    val2 -> undefined
    addNum -> defination
    result1 -> undefined
    result2 -> undefined

3. Execution Phase
    val1 <- 10
    val2 <- 5
    addNum -> this will form another execution context, and after the work completed them this execution block will be deleted
              (new variable environment + execution thread)
                                            |
                    -------------------------------------------------
                    |                                               |
                 result1                                         reuslt2
                    |                                               |
         -----------------------                        -------------------------
         |                      |                       |                       |
   Memory Phase         Execution Phase            Memory Phase          Execution Phase
   val1 -> undefined       num1 -> 10              val1 -> undefined        num1 -> 10
   val2 -> undefined       num2 -> 5               val2 -> undefined        num2 -> 2
   total -> undefined      total -> 15             total -> undefined       total -> 12

   Now this 'total' which is in the function is going to return in global execution context, and the executiob block will be deleted.
```