# Promise-APIs

## 1. Promise.all([])

- It takes an array of promises as an input "iterable".
- Example: `Promise.all([p1, p2, p3])`.

### Success Case:

- Suppose `p1`, `p2`, `p3` take time `3s`, `1s`, `2s` to complete. If all get resolved, it will 
  give the result in the array `[val1, val2, val3]`.
- Time taken: It will take 3s (because `p1` takes the most time 3s).
- It will wait for all of them to finish.

### Reject Case:

- Suppose after 1s, `p2` gets rejected. As soon as any of the promises get rejected, `Promise.all` 
  will throw an immediate error of that same failed promise.
- It will not wait for other promises.

## 2. Promise.allSettled([])

- If you have no problem with even promise being rejected, then use this. (you want both the cases 
  to happen)
- If `p2` gets rejected, wait for all promises to settle. After 3s, the output will be `[{val1}, 
  {err2}, {val3}]`.

## 3. Promise.race([])

- This races between all the promises whichever of them gets settled first, the promise will give 
  the success or failure based on the race winning promise.
- Example: `Promise.race([p1, p2, p3])` for time `3s`, `2s`, `4s`. In this case, `2s` will settle 
  first.

## 4. Promise.any([])

- It will wait for the first success, searching for the first success.


## Note:
- If all fail, it will throw an `AggregateError`, and if you want an array of errors `[err1, err2, 
  err3]`, then use `console.log(err.errors)`.


## Meaning of Settled:
![Local Image](Screenshot%20(180).png)
