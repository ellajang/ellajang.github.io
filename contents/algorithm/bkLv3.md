---
date: '2023-07-17'
title: '백준-반복문'
categories: ['algorithm']
summary: '이 게시글은 백준 반복문 단계 중 1번부터 12번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.	for, while 등의 반복문을 사용합니다 '
thumbnail: '../baekjoon.jpeg'
---

> 백준 반복문 단계 중 1번부터 12번에 해당하는 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. 구구단 (문제번호 : 2739)

#### \* 문제 : N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

- 입력 : 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
- 출력 : 출력형식과 같게 N * 1부터 N *9까지 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

const x = parseInt(inputData)

for (let i = 1; i <= 9; i++) {
  console.log(`${x} * ${i} = ${x * i}`)
}
```

<br/>

#### \* 문제 풀이

1. for 반복문은 세 가지 요소인 초기화식, 조건식, 증감식로 구성 됩니다. for 루프가 시작될때 한 번만 실행되는 초기화식, 각 반복마다 조건을 확인하고 이 값이 true이면 계속하고 false면 반복을 중단합니다. 본문 코드가 한번 실행된 후에 실행되는식인 증감식으로 구성되어 있습니다. 증감식은 일반적으로 카운터 변수(i)를 증가시키거나 감소시키는데 사용됩니다.

```javascript
for (let i = 1; i <= 9; i++)

let i = 1 -> 초기화식 : 재할당이 가능한 let을 사용해 카운터 변수 'i'를 '1'로 설정합니다.
i <= 9 -> 조건식 : 'i'가 '9' 이하일 동안 루프를 계속하게 합니다.
i++ -> 증감식 : 'i'의 값을 '1'씩 증가시킵니다.

```

2. 템플릿 리터럴은 문자열 내부에 변수 또는 식을 직접 삽입하게 해주고, 여기서 백틱(``)은 템플릿 리터럴을 정의하는 데 사용합니다. 템플릿 리터럴을 사용하여 해당되는 변수의 값을 문자열에 삽입해 줍니다. 여기서 ${}는 템플릿 리터럴 내부에 변수나 식을 삽입하는 데 사용됩니다. 따옴표('')를 활용해서 문자열을 감싸면 일반 텍스트로 취급하여 ${x} _ ${i} = ${x _ i}라는 텍스트가 그대로 출력하기 때문에 백틱으로 감싸야합니다.

```javascript
console.log(`${x} * ${i} = ${x * i}`)
```

결과 : `성공`

## 단계 2. A + B - 3 (문제번호 : 10950)

#### \* 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

- 출력 : 각 테스트 케이스마다 A+B를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

for (let i = 1; i <= T; i++) {
  const numbers = inputData[i].split(' ').map(Number)
  const A = numbers[0]
  const B = numbers[1]
  console.log(A + B)
}
```

<br/>

#### \* 문제 풀이

1. const T = parseInt(inputData[0])는 첫 번째 줄에 있는 값을 정수로 변환해서 T에 저장합니다.

```javascript
const T = parseInt(inputData[0])
```

2.  for 문에서는 i가 1부터 시작하므로, 실제로는 두 번째 줄부터 처리를 시작합니다. 첫 번째 줄은 T, 즉 테스트 케이스의 수를 나타내므로, 실제 데이터 처리는 두 번째 줄부터 시작합니다. i가 1, 2, 3, ..., T까지 변하면서 각 테스트 케이스를 순서대로 처리합니다.

```javascript
for (let i = 1; i <= T; i++)
```

3. inputData[i].split(' ').map(Number)는 i번째 줄을 공백으로 나눈 후, 각 부분을 숫자로 변환합니다. 그 결과를 numbers라는 배열에 저장하고, 이 배열의 첫 번째 요소와 두 번째 요소를 각각 A와 B에 저장합니다. 이렇게 하면 각 테스트 케이스의 두 숫자를 얻을 수 있습니다.

```javascript
const numbers = inputData[i].split(' ').map(Number)
const A = numbers[0]
const B = numbers[1]
```

<br/>

결과 : `성공`

## 단계 3. 합 (문제번호 : 8393)

#### \* 문제 : n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
- 출력 : 1부터 n까지 합을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()
const n = parseInt(inputData)

let sum = 0

for (let i = 1; i <= n; i++) {
  sum += i
}

console.log(sum)
```

<br/>

#### \* 문제 풀이

1. 'let sum = 0'로 sum을 정의 해 변수를 초기화 해줍니다. 이 식이 없다면 'ReferenceError: sum is not defined'가 발생해 정의하라는 에러가 발생합니다.

```javascript
let sum = 0
```

2.'+=' 기호를 활용 해 'i'값을 누적하여 더해줍니다.

```javascript
for (let i = 1; i <= n; i++) {
  sum += i
}
```

결과 : `성공`
<br/>

## 단계 4. 영수증 (문제번호 : 25304)

#### \* 문제 : 준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다. 정말 멋졌다. 그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다! 준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.

#### 영수증에 적힌,

#### - 구매한 각 물건의 가격과 개수

#### - 구매한 물건들의 총 금액

#### 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.

- 입력 : 첫째 줄에는 영수증에 적힌 총 금액 X가 주어진다. 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 N이 주어진다. 이후
  N개의 줄에는 각 물건의 가격a와 개수b가 공백을 사이에 두고 주어진다.

- 출력 : 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다. 일치하지 않는다면 No를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const X = parseInt(inputData[0])
const N = parseInt(inputData[1])

let sum = 0

for (let i = 1; i <= N; i++) {
  const numbers = inputData[i + 1].split(' ').map(Number)
  const a = numbers[0]
  const b = numbers[1]
  sum += a * b
}

if (X === sum) {
  console.log('Yes')
} else {
  console.log('No')
}
```

<br/>

#### \* 문제 풀이

1. inputData[i + 1] 입력의 세번째 줄부터 정보를 가져와야 하기 때문에 +1을 세번째 줄부터 정보를 가져오게 합니다.

```javascript
for (let i = 1; i <= N; i++) {
  const numbers = inputData[i + 1].split(' ').map(Number)
```

2.'+=' 기호를 활용 해 'a x b'값을 누적하여 더해줍니다.

```javascript
sum += a * b
```

3.조건문을 사용하여 영수증에 적힌 총 금액 X값과 'a x b'값을 누적하여 더한 sum값이 일치하는지 확인해줍니다.

```javascript
if (X === sum) {
  console.log('Yes')
} else {
  console.log('No')
}
```

결과 : `성공`
<br/>

## 단계 5. 코딩은 체육과목 입니다 (문제번호 : 25314)

#### \* 문제 : 오늘은 혜아의 면접 날이다. 면접 준비를 열심히 해서 앞선 질문들을 잘 대답한 혜아는 이제 마지막으로 칠판에 직접 코딩하는 문제를 받았다. 혜아가 받은 문제는 두 수를 더하는 문제였다. C++ 책을 열심히 읽었던 혜아는 간단히 두 수를 더하는 코드를 칠판에 적었다. 코드를 본 면접관은 다음 질문을 했다. “만약, 입출력이 N바이트 크기의 정수라면 프로그램을 어떻게 구현해야 할까요?”혜아는 책에 있는 정수 자료형과 관련된 내용을 기억해 냈다. 책에는 long int는 4바이트 정수까지 저장할 수 있는 정수 자료형이고 long long int는 8바이트 정수까지 저장할 수 있는 정수 자료형이라고 적혀 있었다. 혜아는 이런 생각이 들었다. “int 앞에 long을 하나씩 더 붙일 때마다 4바이트씩 저장할 수 있는 공간이 늘어나는 걸까? 분명 long long long int는 12바이트, long long long long int는 16바이트까지 저장할 수 있는 정수 자료형일 거야!” 그렇게 혜아는 당황하는 면접관의 얼굴을 뒤로한 채 칠판에 정수 자료형을 써 내려가기 시작했다. 혜아가 N바이트 정수까지 저장할 수 있다고 생각해서 칠판에 쓴 정수 자료형의 이름은 무엇일까?

- 입력 : 첫 번째 줄에는 문제의 정수 N이 주어진다.(4 <= N <= 1000; N은 4의 배수)

- 출력 : 혜아가 N바이트 정수까지 저장할 수 있다고 생각하는 정수 자료형의 이름을 출력하여라.(출력에서 long과 long, long과 int 사이에는 공백이 하나씩 들어간다.)

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

const N = parseInt(inputData)

let sum = ''
const result = N / 4

for (i = 1; i <= result; i++) {
  sum += 'long '
}
sum = sum.trim()
console.log(sum, 'int')
```

<br/>

#### \* 문제 풀이

1. sum에 문자가 누적되기 때문에 ''로 변수를 선언해줍니다.

```javascript
let sum = ''
```

2. 입력된 N바이트 정수는 4의 배수로 long하나에 4바이트씩 저장할 수 있다고 문제에 나왔기 때문에 4로 나눈 몫을 result에 값을 저장해줍니다.

```javascript
const result = N / 4
```

3. long, long과 사이에는 공백이 들어간다고 했기 때문에 띄어쓰기를 ''안에 포함해줍니다.

```javascript
sum += 'long '
```

4. console.log(sum, 'int')로 결과 값이 나오면 int와 sum의 결과값 사이에 공백이 2개가 생기기 때문에 sum.trim()을 통해 맨 마지막 공백을 제거해줍니다.

```javascript
sum = sum.trim()
console.log(sum, 'int')
```

결과 : `성공`
<br/>

## 단계 6. 빠른 A+B (문제번호 : 15552)

#### \* 문제 : 본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다. C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다. Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다. 또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다. 자세한 설명 및 다른 언어의 경우는 [이 글](https://www.acmicpc.net/board/view/22716)에 설명되어 있다. [이 블로그 글](https://www.acmicpc.net/blog/view/55)에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

- 입력 : 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
- 출력 : 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

for (let i = 1; i <= T; i++) {
  const numbers = inputData[i].split(' ').map(Number)
  const A = numbers[0]
  const B = numbers[1]
  console.log(A + B)
}
```

<br/>

#### \* 문제 풀이

1. 단계 2번과 답이 같습니다.

결과 : `성공`
<br/>

## 단계 7. A + B - 7 (문제번호 : 11021)

#### \* 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 테스트 케이스의 개수 T가 주어진다.각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
- 출력 : 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

for (let i = 1; i <= T; i++) {
  const numbers = inputData[i].split(' ').map(Number)
  const A = numbers[0]
  const B = numbers[1]
  console.log(`Case #${i}:`, A + B)
}
```

<br/>

#### \* 문제 풀이

1. Case #${i}:가 답이 출력될 때 앞에 출력되기 때문에 ,로 구분하여 앞에 넣어 줍니다. 답이 출력될 때 각각의 다른 번호가 나오기 때문에 템플릿 리터럴을 사용해줍니다.

```javascript
console.log(`Case #${i}:`, A + B)
```

결과 : `성공`
<br/>

## 단계 8. A+B - 8 (문제번호 : 11022)

#### \* 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
- 출력 : 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

for (let i = 1; i <= T; i++) {
  const [A, B] = inputData[i].split(' ').map(Number)
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`)
}
```

<br/>

#### \* 문제 풀이

1. 이전 단계7 에서는 const A = numbers[0],const B = numbers[1]로 이해하기 쉽게 입력 받은 데이터를 numbers라는 변수에 배열로 저장 후 A,B에 각 배열의 첫번째, 두번째 입력된 데이터를 저장해 줬습니다. 이번 문제에서는 코드를 짧게 만들기 위해 배열 비구조화 할당을 사용하여 각 테스트 케이스의 값을 A와 B에 할당해줬습니다.<abbr title="배열 비구조화 할당은 ES6에서 도입된 기능으로, 배열의 요소를 분리하여 각각 다른 변수에 할당할 수 있는 JavaScript의 문법입니다.">[보기]</abbr>

```javascript
const [A, B] = inputData[i].split(' ').map(Number)
```

결과 : `성공`
<br/>

## 단계 9. 별 찍기 - 1 (문제번호 : 2438)

#### \* 문제 : 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

- 입력 : 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
- 출력 : 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()
const N = parseInt(inputData)

let sum = ''

for (i = 1; i <= N; i++) {
  sum += '*'
  console.log(sum)
}
```

<br/>

결과 : `성공`
<br/>

## 단계 10. 별 찍기 - 2 (문제번호 : 2439)

#### \* 문제 : 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

- 입력 : 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
- 출력 : 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()
const N = parseInt(inputData)

for (i = 1; i <= N; i++) {
  let sum = ''
  for (j = 1; j <= N; j++) {
    if (j <= N - i) {
      sum += ' '
    } else {
      sum += '*'
    }
  }
  console.log(sum)
}
```

<br/>

#### \* 문제 풀이

1. 우리가 작성하려는 줄 수를 반복하는 외부 반복문입니다. N=5라면 5줄이 나오게 해야하기 때문에 1부터 5까지 반복하게 됩니다. 즉, i는 줄 번호라고 생각하면 됩니다.

```javascript
for (i = 1; i <= N; i++)
```

2. 각 줄에 들어갈 문자(공백 또는 별)를 반복하는 내부 반복문입니다.'j'는 현재 문자의 위치를 나타낸다고 할 수 있습니다. N이 5일때 j가 1이면 5개의 문자 중 첫번째 문자가 위치한 곳이라고 생각하면 됩니다.

```javascript
for (j = 1; j <= N; j++)
```

3. 조건문을 활용하여 j가 N - i보다 작거나 같다면 (즉, 현재 줄에서 별이 시작되기 전이라면) row에 공백 문자를 추가합니다. 그렇지 않으면 (즉, 별을 시작해야 할 때) row에 별 문자를 추가합니다.

```javascript
if (j <= N - i) {
  sum += ' '
} else {
  sum += '*'
}
```

4. 각 줄이 완성되면, 완성된 줄을 콘솔에 출력합니다. 이렇게 하여 오른쪽 정렬된 별 트리를 출력하게 됩니다.

```javascript
console.log(sum)
```

결과 : `성공`
<br/>

## 단계 11. A + B - 5 (문제번호 : 10952)

#### \* 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

- 입력 : 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10) 입력의 마지막에는 0 두 개가 들어온다.
- 출력 : 각 테스트 케이스마다 A+B를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().split('\n')

let i = 0
while (true) {
  const [A, B] = inputData[i].split(' ').map(Number)
  if (A === 0 && B === 0) {
    break
  }
  console.log(A + B)
  i++
}
```

<br/>

#### \* 문제 풀이

1. 테스트 케이스의 개수가 미리 주어지지 않고, 입력의 마지막에 0 0이 주어짐을 통해 입력이 끝난다는 것을 알 수 있습니다. 따라서 어디에서 종료해야할지 미리 알 수 없는 이러한 경우에는 보통 while 문을 사용합니다. while (true) 구문은 무한 루프를 생성하고, 코드 내부에서 break 문을 만나는 경우에만 루프를 종료합니다. 이 코드에서는 A와 B가 모두 0인 경우를 확인하여 이를 통해 루프를 종료합니다. 반면에 for 문은 미리 정해진 횟수만큼 반복을 수행하기 때문에, 테스트 케이스의 개수가 미리 주어지는 경우나 반복 횟수가 미리 알려진 경우에 주로 사용됩니다.

```javascript
while (true)
```

2. 'i'를 사용하는 이유는 여러 테스트 케이스를 순회하며 처리하기 위함입니다. 테스트 케이스가 단 한 줄로 이루어져 있다면 i는 필요 없지만, 여러 줄로 이루어져 있다면 각 테스트 케이스를 순서대로 처리하기 위해 i가 필요합니다.

```javascript
let i = 0
...
i++
```

결과 : `성공`
<br/>

## 단계 12. A + B - 4 (문제번호 : 10951)

#### \* 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

- 입력 : 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
- 출력 : 각 테스트 케이스마다 A+B를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().split('\n')

let i = 0
while (true) {
  if (!inputData[i]) {
    break
  }
  const [A, B] = inputData[i].split(' ').map(Number)
  console.log(A + B)
  i++
}
```

<br/>

#### \* 문제 풀이

1. while 문은 주어진 조건이 참인 경우 계속 실행되는 루프입니다. 따라서 종료 조건을 설정하지 않으면 while 문은 무한히 반복되게 됩니다. 이는 프로그램이 영원히 멈추지 않고 계속 실행되게 하는 무한 루프를 생성하기 때문에 종료 조건을 정의해줘야 합니다. 이 문제에서는 true가 while문을 실행하는 조건(즉, 항상 참인조건)이기 때문에 if문을 사용하여 종료조건을 정의했습니다. 예를들어 아래와 같이 while 뒤 ()안 조건을 입력하여 해당 조건(i가 10보다 작음)에 부합하지 않을 경우 종료됩니다.

```javascript
let i = 0
while (i < 10) {
  console.log(i)
  i++
}
```

결과 : `성공`
<br/>

- 백준코딩 단계 별 풀어보기 Step3 반복문 링크

  [<https://www.acmicpc.net/step/3>](https://www.acmicpc.net/step/3)
