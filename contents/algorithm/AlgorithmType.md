---
date: '2023-08-02'
title: '알고리즘(Algorithm) 종류 및 개념 '
categories: ['algorithm']
summary: '알고리즘은 주어진 문제를 해결하기 위한 일련의 명령어 혹은 절차를 의미합니다. 알고리즘은 특정 작업을 수행하거나 문제를 해결하는 방법으로, 논리적인 절차를 따릅니다. 이러한 알고리즘의 종류에 대해 알아보고 각 종류별 알고리즘의 개념에 대해 설명하겠습니다.'
thumbnail: '../algo.png'
---

> 부르트 포스 알고리즘 설계 기법 중 하나로 "무차별 대입" 또는 "완전 탐색"을 의미합니다. brute는 "짐승 같은, 난폭한"이라는 뜻이고, brute-force는 "난폭한 힘, 폭력"이라는 뜻입니다. 단어에서 의미를 유추해보면 문제를 해결하기 위해서 가능한 모든 경우의 수를 나열하고 각각을 일일이 확인하는 노가다적인 방법이라고 할 수 있습니다. 예를들어, 암호를 해독하기 위해서 가능한 모든 암호의 경우의 수를 나열해 하나하나 시도해보는 방식이라고 생각할 수 있습니다.<br/>
> 장점:구현이 간단합니다. 복잡한 알고리즘을 생각해내지 않아도 됩니다. 해가 존재한다면 반드시 그 해를 찾을 수 있습니다.<br/>
> 단점 : 가능한 모든 경우의 수를 확인해야 하기 때문에, 경우의 수가 많을수록 계산 시간이 급격히 증가합니다. 따라서, 경우의 수가 적을 때에만 효과적인 방식입니다. 경우의 수가 너무 많을 경우, 브루트 포스 방식으로 문제를 해결하는 것은 현실적으로 불가능할 수 있습니다.

## 단계 1. 블랙잭 (문제번호 : 2798)

#### \* 문제 : 카지노에서 제일 인기 있는 게임 블랙잭의 규칙은 상당히 쉽다. 카드의 합이 21을 넘지 않는 한도 내에서, 카드의 합을 최대한 크게 만드는 게임이다. 블랙잭은 카지노마다 다양한 규정이 있다. 한국 최고의 블랙잭 고수 김정인은 새로운 블랙잭 규칙을 만들어 상근, 창영이와 게임하려고 한다. 김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다. 그런 후에 딜러는 숫자 M을 크게 외친다. 이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다. 블랙잭 변형 게임이기 때문에, 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다. N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.

- 입력 : 첫째 줄에 카드의 개수 N(3 ≤ N ≤ 100)과 M(10 ≤ M ≤ 300,000)이 주어진다. 둘째 줄에는 카드에 쓰여 있는 수가 주어지며, 이 값은 100,000을 넘지 않는 양의 정수이다. 합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.

- 출력 : 첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const [N, M] = inputData[0].split(' ').map(Number)
const cards = inputData[1].split(' ').map(Number)

let maxSum = 0

for (i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = cards[i] + cards[j] + cards[k]
      if (sum <= M && sum > maxSum) {
        maxSum = sum
      }
    }
  }
}
console.log(maxSum)
```

<br/>

#### \* 문제 풀이

1. sum <= M : 플레이어가 선택한 세 카드의 합계(sum)는 M보다 크지 않아야 합니다. 이 규칙은 블랙잭 게임의 규칙에 따라, 합계가 M을 초과하면 안 되기 때문입니다. sum > maxSum : 현재까지 발견한 합계(sum)가 이전에 발견한 가장 큰 합계(maxSum)보다 커야 합니다. 이는 M을 넘지 않는 한에서 가능한 한 M에 가깝게 만들기 위한 조건입니다

```javascript
if (sum <= M && sum > maxSum) {
  maxSum = sum
}
```

결과 : `성공`

## 단계 2. 분해합 (문제번호 : 2231)

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

## 단계 3. 수학은 비대면강의입니다 (문제번호 : 19532)

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

## 단계 4. 체스판 다시 칠하기 (문제번호 : 1018)

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

## 단계 5. 영화감독 숌 (문제번호 : 1436)

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

## 단계 6. 설탕 배달 (문제번호 : 2839)

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

<br/>
<br/>

- 백준코딩 단계 별 풀어보기 Step10 기하: 직사각형과 삼각형 링크

  [<https://www.acmicpc.net/step/50>](https://www.acmicpc.net/step/50)
