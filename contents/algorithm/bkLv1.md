---
date: '2023-07-10'
title: '백준-입출력과 사칙연산'
categories: ['algorithm']
summary: '이 게시글은 백준 입출력과 사칙연산 단계에 해당하는 1번부터 13번에 해당하는 문제를 JavaScript(NodeJS)언어로 풀이 방법에 대한 내용입니다. '
thumbnail: '../baekjoon.jpeg'
---

> 백준 입출력과 사칙연산 단계에 해당하는 1번부터 13번에 해당하는 문제에 대한 풀이입니다. 사용한 언어는 **_JavaScript(NodeJS)_** 입니다.

## 단계 1. Hello World (문제번호 : 2557)

#### \* 문제 : Hello World!를 출력하시오.

```javascript
console.log('Hello World!')
```

결과 : `성공`

## 단계 2. A + B (문제번호 : 1000)

#### \* 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

```javascript
const fs = require('fs')
const inputData = fs.readFileSync(0).toString().split(' ')

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

console.log(A + B)
```

<br/>

#### \* 문제 풀이

1. 백준에서 입력되어 있는 값을 가져오기 위해서는, Node.js의 내장 모듈인 파일 시스템(fs) 모듈을 통해 값을 가져옵니다. 이 모듈은 파일 읽기, 쓰기 등의 작업을 수행할 수 있게 해줍니다.

```javascript
const fs = require('fs')
```

2.  fs모듈에서 가져온 값을 readFileSync 함수로 파일의 내용을 읽어와야하는데, 괄호 안의 변수로부터 데이터를 읽어와야하는 것을 의미합니다.<br/>
    첫번째, '/dev/stdin'는 Unix 또는 Linux 시스템에서 표준 입력을 나타내는 경로 입니다. 다시 말해, 사용자로부터의 입력을 읽어오는 것을 의미합니다. Node.js에서는 이를 다시 '0'으로 간단하게 표현할 수 있습니다.<br/>
    두번째, 첫번째에서 말한 것과 같이 '/dev/stdin' 대신 0을 사용하여 함수를 작성할 수 있습니다.<br/>
    세번째, toString()메소드를 사용하여 문자열로 변환하는 대신 'utf8'를 두번째 변수로 넣어 디코딩된 문자열로 반환하게 할 수 있습니다.<br/>
    .split(' ')은 입력 받은 문자열을 배열화 하는대 사용됩니다. 입력된 문자열이 "1 2"이라면 inputData는 ["1", "2"]이라는 배열이 되는 것 입니다.

```javascript
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ')
or
const inputData = fs.readFileSync(0).toString().split(' ')
or
const inputData = fs.readFileSync(0, 'utf8').split(' ')
```

3. parseInt 함수를 사용하여 inputData에 저장된 문자열을 정수로 변환합니다. 배열에서 첫번쨰는 0부터 count됩니다.

```javascript
const A = parseInt(inputData[0])
const B = parseInt(inputData[1])
```

<br/>

결과 : `성공`

##

- 백준코딩 단계 별 풀어보기 Step1 입출력과 사칙연산 링크

  [<https://www.acmicpc.net/step/1>](https://www.acmicpc.net/step/1)
