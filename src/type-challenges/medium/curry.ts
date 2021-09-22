import { Equal, Expect, Alike, NotAny } from '../../..'

/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #hard #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

  For example:

  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)

  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```

  The function passed to `Currying` may have multiple arguments, you need to correctly type it.

  In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.

  > View on GitHub: https://tsch.js.org/17
*/

/* _____________ Your Code Here _____________ */
// declare function Currying(fn: any): typeof fn extends (...args: [infer First, ...infer Others]) => true
//   ? (arg: First) => Currying<(...args: Others) => true>
//   : true

// type Curry<T, R> = T extends [infer First, ...infer Others] ? (f: First) => Curry<Others, R> : R

// declare function Currying<T extends any[], R>(fn: (...args: T) => R): Curry<T, R>

type Curry<P, R> = P extends [infer K, ...infer O] ? (a: K) => Curry<O, R> : R;
declare function Currying<P extends any[], R, F>(fn: F):
  F extends (...args: P) => R
    ? Curry<P, ReturnType<F>>
    : never;

// todo why https://github.com/type-challenges/type-challenges/issues/1034 can.

/* _____________ Test Cases _____________ */
const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

const aaaaa = (a: string) => (a: number) => (a: boolean) => true

type demo = typeof curried1

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
    // typeof curried1, (a: string) => (b: number) => (c: boolean) => boolean
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/17/answer
  > View solutions: https://tsch.js.org/17/solutions
  > More Challenges: https://tsch.js.org
*/

