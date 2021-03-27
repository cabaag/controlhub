# Fibonacci API v1
#### Made by Carlos Barranco

## Analysis
The Fibonacci sequence is a series of numbers where a number is the addition of the last two numbers, starting with 0, and 1.

We start from an iteration 0, and given a final number, we must determine what will be the final value.

This process of this sequence is the next, 
  1. we start from f1=0 and f2=1
  2. we sum those variables and save it in a tmp
  3. we set new values for variables, f1=f2 and f2=tmp
  4. if we have not reach the final iteration, repeat steps 2-4 else continue
  5. retrieve the final value 

| iteration | value |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |
| 6 | 8 |
| 7 | 13 |
| 8 | 21 |
| ... | ... |

## Code

```javascript
function fibonnaci(n) {
  if (n <= 1)
    return n;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}
```

*This code is inside src/fibonacci.js*

## Description of code

I created a recursive algorithm to represent the sequence.
This way we only have to write once and iterate over the entire sequence until we reach the final value, the internal logic is the same in every iteration but the last.
I'm not using variables to keep the actual state because with the recursive mode there's not need of them, we "keep the state" with the recursion

**You can try this API from the next URL http://localhost:3000/api/v1/fibonacci?iterations={10} **
