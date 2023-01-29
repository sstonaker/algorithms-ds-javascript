function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 2 || n === 1) return 1;
  let res = fib(n - 1) + fib(n - 2);
  memo[n] = res;
  return res;
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
