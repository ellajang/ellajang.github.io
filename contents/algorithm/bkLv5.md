---
date: '2023-07-20'
title: '백준-문자열(단계5)'
categories: ['algorithm']
summary: '이 게시글은 백준 문자열 단계 중 1번부터 11번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다.'
thumbnail: '../baekjoon.jpeg'
---

> 백준 문자열 단계에 중 1번부터 11번문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. 문자와 문자열 (문제번호 : 27866)

#### \* 문제 : 단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 S가 주어진다. 단어의 길이는 최대 1,000이다. 둘째 줄에 정수 i가 주어진다. (1 ≤ i ≤ |S|)

- 출력 : S의 i번째 글자를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const S = inputData[0]
const i = parseInt(inputData[1]) - 1

console.log(S[i])
```

<br/>

#### \* 문제 풀이

1. 0-based index를 사용하기 때문에 i에서 1을 빼서 i번째 글자를 출력하게 합니다.

```javascript
const S = inputData[0]
const i = parseInt(inputData[1]) - 1
```

결과 : `성공`

## 단계 2. 단어 길이 재기 (문제번호 : 2743)

#### \* 문제 : 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 영어 소문자와 대문자로만 이루어진 단어가 주어진다. 단어의 길이는 최대 100이다.

- 출력 : 첫째 줄에 입력으로 주어진 단어의 길이를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const S = inputData[0]

console.log(S.length)
```

결과 : `성공`

## 단계 3. 문자열 (문제번호 : 9086)

#### \* 문제 : 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

- 입력 : 입력의 첫 줄에는 테스트 케이스의 개수 T(1 ≤ T ≤ 10)가 주어진다. 각 테스트 케이스는 한 줄에 하나의 문자열이 주어진다. 문자열은 알파벳 A~Z 대문자로 이루어지며 알파벳 사이에 공백은 없으며 문자열의 길이는 1000보다 작다.
- 출력 : 각 테스트 케이스에 대해서 주어진 문자열의 첫 글자와 마지막 글자를 연속하여 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

for (let i = 1; i < T + 1; i++) {
  const T_List = inputData[i]
  const firstLetter = T_List.charAt(0)
  const lastLetter = T_List.charAt(T_List.length - 1)
  console.log(firstLetter + lastLetter)
}
```

<br/>

#### \* 문제 풀이

1. charAt(index)는 문자열에서 지정된 위치에 있는 문자를 반환하는 JavaScript의 메소드입니다. 첫번째 문자를 반환하라고 문제에서 요구 했기 때문에 0을 기입해줍니다. .length - 1는 각 문자마다 문자열의 개수가 다르기 때문에 length를 이용해서 문자열의 길이를 알고 0-based index이기 때문에 -1을 해줘서 마지막 문자를 가져옵니다.

```javascript
const firstLetter = T_List.charAt(0)
const lastLetter = T_List.charAt(T_List.length - 1)
```

결과 : `성공`
<br/>

## 단계 4. 아스키 코드 (문제번호 : 11654)

#### \* 문제 : 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

- 입력 : 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

- 출력 : 입력으로 주어진 글자의 아스키 코드 값을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log(inputData.charCodeAt())
```

<br/>

#### \* 문제 풀이

1. charCodeAt은 자바스크립트에서 문자열을 아스키코드로 변환해주는 메소드 입니다.

결과 : `성공`
<br/>

## 단계 5. 숫자의 합 (문제번호 : 11720)

#### \* 문제 : N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.
- 출력 : 입력으로 주어진 숫자 N개의 합을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const N = parseInt(inputData[0])
const numbers = inputData[1].split('').map(Number)
let sum = 0

for (let i = 0; i < N; i++) {
  sum += numbers[i]
}
console.log(sum)
```

결과 : `성공`
<br/>

## 단계 6. 알파벳 찾기 (문제번호 : 10809)

#### \* 문제 : 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.

- 출력 : 각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다. 만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. 단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()
const result = new Array(26).fill(-1)

for (let i = 0; i < inputData.length; i++) {
  let ASCII = inputData[i].charCodeAt() - 'a'.charCodeAt()
  if (result[ASCII] === -1) {
    result[ASCII] = i
  }
}

console.log(result.join(' '))
```

<br/>

#### \* 문제 풀이

1. a-z까지 총 알파벳 수 26의 요소를 -1로 초기화해줍니다.

```javascript
const result = new Array(26).fill(-1)
```

2. charCodeAt메소드를 활용해서 주어진 인덱스에 해당하는 문자의 ASCII(아스키) 코드로 반환해줍니다. 문제에서 주어진 알파벳들의 결과값은 0부터 시작( b=1, a=0, e=2 ... )이 되기 때문에 'a'.charCodeAt()를 빼줍니다.

```javascript
let ASCII = inputData[i].charCodeAt() - 'a'.charCodeAt()
```

3. 조건문을 사용해서 초기값이 -1인데 해당 문자가 등장한 경우 현재 i값으로 설정해줍니다.

```javascript
if (result[ASCII] === -1) {
  result[ASCII] = i
}
```

결과 : `성공`
<br/>

## 단계 7. 문자열 반복 (문제번호 : 2675)

#### \* 문제 : 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다. QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%\*+-./: 이다.

- 입력 : 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다.
- 출력 : 각 테스트 케이스에 대해 P를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('\n')
const T = parseInt(inputData[0])

for (let i = 1; i < T + 1; i++) {
  const inputDataSplit = inputData[i].split(' ')
  const R = parseInt(inputDataSplit[0])
  const S = inputDataSplit[1].split('')
  let result = ''
  for (let j = 0; j < S.length; j++) {
    result += S[j].repeat(R)
  }
  console.log(result)
}
```

<br/>

#### \* 문제 풀이

1. 각 테스트 케이스는 공백을 기준으로 반복 횟수 R과 문자열 S가 주어져 있으므로, 공백을 기준으로 분리합니다.

```javascript
const inputDataSplit = inputData[i].split(' ')
```

2. 분리된 데이터의 첫 번째 값을 정수로 변환하여 반복 횟수 R을 설정합니다. 분리 된 데이터의 두 번째 값을 문자 단위로 분리하여 문자열 S를 설정합니다.

```javascript
const R = parseInt(inputDataSplit[0])
const S = inputDataSplit[1].split('')
```

3. 문자열 S의 각 문자를 R번 반복하여 result 문자열에 추가합니다. repeat메소드는 ()안에 원하는 반복 횟수를 기입하면 기입한 횟수대로 문자를 반복하여 출력해줍니다.

```javascript
for (let j = 0; j < S.length; j++) {
  result += S[j].repeat(R)
}
```

결과 : `성공`
<br/>

## 단계 8. 단어의 개수 (문제번호 : 1152)

#### \* 문제 : 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

- 입력 : 첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열의 길이는 1,000,000을 넘지 않는다. 단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 또한 문자열은 공백으로 시작하거나 끝날 수 있다.
- 출력 : 첫째 줄에 단어의 개수를 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split(' ')
console.log(inputData.length)
```

결과 : <code class="language-text other-color">실패</code>

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()
const wordCount = inputData.split(' ').filter(word => word !== '').length
console.log(wordCount)
```

결과 : `성공`

<br/>

#### \* 문제 풀이

1. 첫 번째 실패한 코드의 경우 입력 문자열을 공백을 기준으로 분리한 후, 모든 분리된 단어를 배열로 저장합니다. 그리고 배열의 길이를 inputData.length로 출력합니다. 이 방식은 공백으로 분리된 모든 문자열의 개수를 반환합니다. 즉, 빈 문자열을 포함한 단어 및 공백의 개수를 출력하기 때문에 실패한 코드입니다. 예제 입력에는 예시로 없지만 공백을 입력값을 주면 출력값이 1이 나오게 됩니다. trim()을 사용해서 양 끝의 공백을 제거한다고 해도 입력값이 공백이면 출력값이 1이 나오기 때문에 틀린 코드가 됩니다.

2. 두 번째 성공한 코드는 공백을 출력하는 문제를 해결하기 위해 split(' ')으로 문자를 공백을 기준으로 분리한 다음 분리된 단어들 중에서 빈 문자열이 아닌 단어만 필터링 해서 단어의 개수를 세는 코드로 작성했습니다.

```javascript
const wordCount = inputData.split(' ').filter(word => word !== '').length
```

## 단계 9. 상수 (문제번호 : 2908)

#### \* 문제 : 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다. 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다. 상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다. 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.

- 출력 : 첫째 줄에 상수의 대답을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split(' ')
const A = parseInt(inputData[0].split('').reverse().join(''))
const B = parseInt(inputData[1].split('').reverse().join(''))

const result = Math.max(A, B)

console.log(result)
```

<br/>

#### \* 문제 풀이

1. split 메서드로 각 숫자를 배열로 만든 후, reverse 메서드로 뒤집습니다. 그리고 join 메서드로 뒤집어진 배열을 다시 문자열로 만든 다음 parseInt 함수로 문자열을 숫자로 변환하여 가장 큰 수를 골라냅니다.

```javascript
const A = parseInt(inputData[0].split('').reverse().join(''))
const B = parseInt(inputData[1].split('').reverse().join(''))
```

결과 : `성공`
<br/>

## 단계 10. 다이얼 (문제번호 : 5622)

#### \* 문제 : 상근이의 할머니는 아래 그림과 같이 오래된 다이얼 전화기를 사용한다.

![Alt text](lv5.png)

#### 전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다. 숫자 1을 걸려면 총 2초가 필요하다. 1보다 큰 수를 거는데 걸리는 시간은 이보다 더 걸리며, 한 칸 옆에 있는 숫자를 걸기 위해선 1초씩 더 걸린다. 상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다. 즉, 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 된다. 예를 들어, UNUCIC는 868242와 같다. 할머니가 외운 단어가 주어졌을 때, 이 전화를 걸기 위해서 필요한 최소 시간을 구하는 프로그램을 작성하시오.

- 입력 : 첫째 줄에 알파벳 대문자로 이루어진 단어가 주어진다. 단어의 길이는 2보다 크거나 같고, 15보다 작거나 같다.
- 출력 : 첫째 줄에 다이얼을 걸기 위해서 필요한 최소 시간을 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim().split('')
const alphabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

let result = 0

for (let i = 0; i < inputData.length; i++) {
  for (let j = 0; j < alphabet.length; j++) {
    if (alphabet[j].includes(inputData[i])) {
      result += j + 3
    }
  }
}
console.log(result)
```

<br/>

#### \* 문제 풀이

1. 먼저 다이얼에 해당되는 알파벳들을 배열로 만들어줍니다.

```javascript
const alphabet = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
```

2. 입력된 문자열의 각 문자에 대해 반복하는 외부 루프를 시작하는 코드입니다.

```javascript
for (let i = 0; i < inputData.length; i++)

```

3. 현재 문자가 현재 알파벳 그룹에 포함되어 있는지를 확인하는 조건문입니다.

```javascript
 if (alphabet[j].includes(inputData[i]))
```

4. 현재 알파벳 그룹에 대한 다이얼 시간을 결과에 더하는 코드입니다. 'ABC' 그룹은 2번 다이얼이지만 3초가 걸리므로(j는 알파벳 배열에서의 인덱스이므로 그룹이 순차적으로 증가하게 됩니다. 그래서 "ABC" 그룹이 j=0에 위치하므로 해당 그룹을 다이얼하는데는 2초가 소요되지만, j+3을 하면 3초로 계산됩니다), 인덱스에 3을 더해주어야 합니다.

```javascript
result += j + 3
```

결과 : `성공`

## 단계 11. 그대로 출력하기 (문제번호 : 11718)

#### \* 문제 : 입력 받은 대로 출력하는 프로그램을 작성하시오.

- 입력 : 입력이 주어진다. 입력은 최대 100줄로 이루어져 있고, 알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 각 줄은 100글자를 넘지 않으며, 빈 줄은 주어지지 않는다. 또, 각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다.
- 출력 : 입력받은 그대로 출력한다.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().trim()

console.log(inputData)
```

결과 : `성공`
<br/>
<br/>

- 백준코딩 단계 별 풀어보기 Step5 문자열 링크

  [<https://www.acmicpc.net/step/7>](https://www.acmicpc.net/step/7)
