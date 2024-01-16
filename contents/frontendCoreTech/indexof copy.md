---
date: '2024-01-12'
title: '[자바스크립트] indexOf / lastIndexOf 메소드 이해하기'
categories: ['All', 'JAVASCRIPT']
summary: '문자열 내에서 특정 부분 문자열의 위치를 찾는 데 사용할 수 있는 메소드 대해 알아보겠습니다.'
thumbnail: './jsmethod.png'
---

> JavaScript에서 문자열 내에서 특정 부분 문자열의 위치를 찾는 데 사용할 수 있는 메소드 indexOf와 lastIndexOf 입니다.

### 1. indexOf 메소드

📍 indexOf() 메소드는 문자열에서 다른 문자열이 **처음** 나타나는 **위치**를 찾습니다. 이 메소드는 대소문자를 구분하며, 해당 부분 문자열이 존재하지 않으면 -1을 반환합니다.
<br/>
<br/>

#### **예시코드1**

```javascript
let str = 'Hello, welcome to JavaScript world!'
let position = str.indexOf('welcome') // 7
```

✨ 설명 : H(0) e(1) l(2) l(3) o(4) ,(5) (6) w(7) e(8) l(9) c(10) o(11) m(12) e(13) (14) t(15) o(16)..와 같이 각 문자마다 (n)번째 위치에 해당하고 welcome의 첫 문자 w의 위치는 7로 7을 반환합니다.

<br/>
<br/>

#### **예시코드2**

📍 indexOf(v,i)는 두 번째 매개변수(i)를 사용하여 검색을 시작 할 인덱스를 지정할 수 있습니다.

```javascript
let str = 'Hello, welcome to JavaScript world, welcome again!'
let position = str.indexOf('welcome', 10) // 36
```

✨ 설명 : H(0) e(1) l(2) l(3) o(4) ,(5) (6) w(7) e(8) l(9) c(10) o(11) m(12) e(13) (14) t(15) o(16) ...와 같이 10번째 인덱스가 시작점인 c를 시작점으로 welcome이 나오는 곳의 위치는 36번째로 36을 반환합니다.

### 2. lastIndexOf 메소드

: lastIndexOf 메소드는 indexOf 와 유사하지만, 문자열을 뒤에서부터 검색하여 부분 문자열이 마지막으로 나타나는 위치를 찾습니다. 이 메소드 역시 대소문자를 구분하며, 부분 문자열이 없는 경우 -1을 반환합니다.
<br/>
<br/>

#### **예시코드 1**

```javascript
let str = 'Hello, welcome to JavaScript world, welcome again!'
let position = str.lastIndexOf('welcome') // 36
```

✨ 설명 : 문자열의 마지막인 ! 를 시작점으로 해서 시작점과 가장 가까운 welcome의 index인 36을 출력하게 됩니다. 주의할 점은 인덱스 값은 항상 문자열의 앞쪽부터인 H(0) e(1) l(2) l(3) o(4) ,(5) (6) w(7) e(8) l(9) c(10)와 같이 변하지 않습니다.

<br/>
<br/>

#### **예시코드2**

📍 lastIndexOf(v,i)도 두 번째 매개변수(i)를 사용하여 검색을 시작할 인덱스를 지정할 수 있습니다. 이 경우, 지정된 인덱스부터 문자열의 시작 방향으로 검색이 진행됩니다.

```javascript
let str = 'Hello, welcome to JavaScript world, welcome again!'
let position = str.lastIndexOf('welcome', 25) // 7
```

✨ 설명 : 인덱스 25부터 시작하여 문자열의 앞쪽으로 검색을 진행합니다. H(0) e(1) l(2) l(3) o(4) ,(5) (6) w(7)...처럼 앞쪽 문자 welcome이 시작되는 인덱스 값인 7일 출력됩니다.

### ✨ 정리

indexOf 메소드는 문자열에서 지정된 부분 문자가 처음 나타나는 위치를 찾아 그 인덱스를 반환하며, 검색 시작점을 지정할 수 있습니다. lastIndexOf 메소드는 문자열을 뒤에서부터 검색하여 부분 문자자가 마지막으로 나타나는 위치의 인덱스를 반환하며, 이 역시 시작점을 지정할 수 있습니다. 두 메소드 모두 대소문자를 구분하며, 지정된 부분 문자열이 존재하지 않을 경우 -1을 반환합니다
