console.log('Hello from a.js');
new Worker('b.js');

function fib(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}
setTimeout(() => console.log(fib(30)), 1000);
