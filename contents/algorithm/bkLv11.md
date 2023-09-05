---
date: '2023-08-01'
title: '백준-시간 복잡도(단계11)'
categories: ['algorithm']
summary: '이 게시글은 백준 시간 복잡도 단계 중 1번부터 7번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.	 '
thumbnail: '../baekjoon.jpeg'
---

> 백준 시간 복잡도 단계 중 1번부터 8번 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.
> 여기서 시간 복잡도란 알고리즘의 성능을 나타내는 지표 중 하나입니다. 즉 알고리즘을 실행하는 데 필요한 시간을 의미합니다. 여기서 시간이라는 것은 실제 걸리는 '초', '분' 이런 의미가 아닌, 알고리즘이 수행해야 하는 연산의 횟수를 의미합니다.

## 단계 1. 알고리즘 수업 - 알고리즘의 수행 시간 1 (문제번호 : 24262)

#### \* 문제 : 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자. MenOfPassion 알고리즘은 다음과 같다.

```javascript
MenOfPassion(A[], n) {
    i = ⌊n / 2⌋;
    return A[i]; # 코드1
}
```

- 입력 : 첫째 줄에 입력의 크기 n(1 ≤ n ≤ 500,000)이 주어진다.

- 출력 : 첫째 줄에 코드1 의 수행 횟수를 출력한다. 둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때, 최고차항의 차수를 출력한다. 단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log(1)
console.log(0)
```

결과 : `성공`

<br/>

#### \* 문제 풀이

1. 이 문제에서는 주어진 배열 A에서 i번째 원소를 반환하는 작업을 합니다. 이 작업의 시간 복잡도를 다항식으로 나타내면 0차항입니다. 배열의 크기 n에 상관 없이 항상 동일한 시간이 걸리기 때문입니다. 그렇기 때문에 0을 출력하는 것이 정답입니다.

## 단계 2. 알고리즘 수업 - 알고리즘의 수행 시간 2 (문제번호 : 24263)

#### \* 문제 : 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자. MenOfPassion 알고리즘은 다음과 같다.

```javascript
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
        sum <- sum + A[i]; # 코드1
    return sum;
}
```

- 입력 : 첫째 줄에 입력의 크기 n(1 ≤ n ≤ 500,000)이 주어진다.

- 출력 : 첫째 줄에 코드1 의 수행 횟수를 출력한다. 둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때, 최고차항의 차수를 출력한다. 단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log(inputData)
console.log(1)
```

<br/>

#### \* 문제 풀이

1. 첫 번째 출력은 "코드1"의 수행 횟수를 나타냅니다. 이 알고리즘에서 for문을 사용해 배열 A의 모든 원소를 합하기 때문에, "코드1"의 수행 횟수는 입력 크기인 n이 됩니다. 그래서 첫 번째 출력은 입력된 n 그대로가 됩니다. 다항식으로 나타내면 n이고 차수는 1이기 때문에 두번째에는 1을 출력하면 됩니다.

   <br/>

결과 : `성공`

## 단계 3. 알고리즘 수업 - 알고리즘의 수행 시간 3 (문제번호 : 24264)

#### \* 문제 : 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자. MenOfPassion 알고리즘은 다음과 같다.

```javascript
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
        for j <- 1 to n
            sum <- sum + A[i] × A[j]; # 코드1
    return sum;
}
```

- 입력 : 첫째 줄에 입력의 크기 n(1 ≤ n ≤ 500,000)이 주어진다.
- 출력 : 첫째 줄에 코드1 의 수행 횟수를 출력한다. 둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때, 최고차항의 차수를 출력한다. 단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log(inputData * inputData)
console.log(2)
```

<br/>

#### \* 문제 풀이

1. 이중 for문을 사용하여 배열 A의 모든 원소들의 쌍에 대해 연산을 수행하므로, "코드1"의 수행 횟수는 입력 크기 n의 제곱, 즉 n^2가 됩니다. console.log(inputData \* inputData)를 통해 n^2을 출력하면 "코드1"의 수행 횟수를 올바르게 출력하게 됩니다. 다항식으로 나타내면 n^2가 되고, 이 때 최고차항의 차수는 2가 됩니다. 따라서 두번째 에는 2를 출력하면 됩니다.

<br/>

결과 : `성공`
<br/>

## 단계 4. 알고리즘 수업 - 알고리즘의 수행 시간 4 (문제번호 : 24265)

#### \* 문제 : 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자. MenOfPassion 알고리즘은 다음과 같다.

```javascript
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 1
        for j <- i + 1 to n
            sum <- sum + A[i] × A[j]; # 코드1
    return sum;
}
```

- 입력 : 첫째 줄에 입력의 크기 n(1 ≤ n ≤ 500,000)이 주어진다.

- 출력 : 첫째 줄에 코드1 의 수행 횟수를 출력한다. 둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때, 최고차항의 차수를 출력한다. 단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log((inputData * (inputData - 1)) / 2)
console.log(2)
```

<br/>

#### \* 문제 풀이

1. 이 문제도 for문이 2번 중첩되므로 2차 다항식의 형태이므로 두번째에서 2를 출력하면 됩니다. 하지만 앞 문제와 다른 점은 for루프가 도는 범위입니다. MenOfPassion(A[], n) 함수에서, 내부 반복문이 첫 번째 순회 때에는 n-1번 실행되고, 두 번째 순회 때에는 n-2번 실행되고, 세 번째 순회 때에는 n-3번 실행되는 식으로 i가 증가함에 따라 실행 횟수가 점점 줄어듭니다. 따라서 이 모든 반복 횟수를 합하면 n-1, n-2, n-3, ..., 2, 1 이 됩니다. 이는 산수학에서 배운 일련의 숫자들의 합을 계산하는 공식인 (n \* (n-1)) / 2로 계산할 수 있습니다.

결과 : `성공`

## 단계 5. 알고리즘 수업 - 알고리즘의 수행 시간 5 (문제번호 : 24266)

#### \* 문제 : 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자. MenOfPassion 알고리즘은 다음과 같다.

```javascript
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
        for j <- 1 to n
            for k <- 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
}
```

- 입력 : 첫째 줄에 입력의 크기 n(1 ≤ n ≤ 500,000)이 주어진다.
- 출력 : 첫째 줄에 코드1 의 수행 횟수를 출력한다. 둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때 최고차항의 차수를 출력한다. 단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log(inputData * inputData * inputData)
console.log(3)
```

결과 : <code class="language-text other-color">틀림</code>

```javascript
const fs = require('fs')
const inputData = BigInt(fs.readFileSync(0).toString().trim())

console.log((inputData * inputData * inputData).toString())
console.log(3)
```

<br/>

#### \* 문제 풀이

1. JavaScript에서 정수의 연산은 기본적으로 64비트 정수로 처리됩니다. 그러나 64비트 정수의 최대값은 9,007,199,254,740,991(약 9조)입니다. 따라서 이 범위를 넘어서는 정수값은 정확히 표현되지 않습니다. 세제곱 연산의 결과는 이 범위를 훨씬 초과하기 때문에 BigInt라는 별도의 데이터 형을 붙여 출력해야합니다.
   <br/>
   <br/>

결과 : `성공`

## 단계 6. 알고리즘 수업 - 알고리즘의 수행 시간 6 (문제번호 : 24267)

#### \* 문제 : 오늘도 서준이는 알고리즘의 수행시간 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 입력의 크기 n이 주어지면 MenOfPassion 알고리즘 수행 시간을 예제 출력과 같은 방식으로 출력해보자. MenOfPassion 알고리즘은 다음과 같다.

```javascript
MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 2
        for j <- i + 1 to n - 1
            for k <- j + 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
}
```

- 입력 : 첫째 줄에 입력의 크기 n(1 ≤ n ≤ 500,000)이 주어진다.
- 출력 : 첫째 줄에 코드1 의 수행 횟수를 출력한다. 둘째 줄에 코드1의 수행 횟수를 다항식으로 나타내었을 때 최고차항의 차수를 출력한다. 단, 다항식으로 나타낼 수 없거나 최고차항의 차수가 3보다 크면 4를 출력한다.

```javascript
const fs = require('fs')
const inputData = BigInt(fs.readFileSync(0).toString().trim())

console.log(((inputData * (inputData - 1n) * (inputData - 2n)) / 6n).toString())
console.log(3)
```

<br/>

#### \* 문제 풀이

1. 각각의 i에 대해, j는 i+1부터 n-1까지, k는 j+1부터 n까지 동작하고 있습니다. 이것은 기본적으로 n개의 요소 중에서 3개를 선택하는 경우의 수와 동일하게 됩니다. 이 경우, 코드1의 수행 횟수는 nC3이라는 조합(combination)으로 계산할 수 있습니다. 여기서 1n, 2n, 6n과 같이 뒤에 붙인 n은 BigInt 타입의 1을 나타냅니다.JavaScript에서는 BigInt 타입을 선언할 때 숫자 뒤에 n을 붙입니다.

결과 : `성공`

## 단계 7. 알고리즘 수업 - 점근적 표기 1 (문제번호 : 24313)

#### \* 문제 : 오늘도 서준이는 점근적 표기 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자. 알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의하자. O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다} 이 정의는 실제 O-표기법(https://en.wikipedia.org/wiki/Big_O_notation)과 다를 수 있다. 함수 f(n) = a1n + a0, 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.

- 입력 : 첫째 줄에 함수 f(n)을 나타내는 정수 a1, a0가 주어진다. (0 ≤ |ai| ≤ 100) 다음 줄에 양의 정수 c가 주어진다. (1 ≤ c ≤ 100) 다음 줄에 양의 정수 n0가 주어진다. (1 ≤ n0 ≤ 100)

- 출력 : f(n), c, n0가 O(n) 정의를 만족하면 1, 아니면 0을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [a1, a0] = inputData[0].split(' ').map(Number)
const c = parseInt(inputData[1])
const n0 = parseInt(inputData[2])

let isBigO = true
for (let n = n0; n <= 1000; n++) {
  if (a1 * n + a0 > c * n) {
    isBigO = false
    break
  }
}

console.log(isBigO ? 1 : 0)
```

<br/>

#### \* 문제 풀이

1.  n0가 100으로 주어졌을 때, 우리는 이것이 O(n)을 만족하는지를 확인하기 위해 n0부터 "충분히 큰 n"까지 검사해야 합니다. 이 문제에서는 편의상 "충분히 큰 n"을 1000으로 설정할 수 있습니다. n0부터 1000까지의 숫자에 대하여 반복문을 실행하는데 사용됩니다.

```javascript

for (let n = n0; n <= 1000; n++)

```

결과 : `성공`

<br/>
<br/>

- 백준코딩 단계 별 풀어보기 Step10 기하: 직사각형과 삼각형 링크

  [<https://www.acmicpc.net/step/50>](https://www.acmicpc.net/step/50)
