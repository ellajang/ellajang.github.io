---
date: '2024-01-06'
title: '[자바스크립트] map, forEach 메소드 이해하기'
categories: ['All', 'JAVASCRIPT']
summary: '자바스크립트 map, forEach 메소드에 대해서 알아보겠습니다.'
thumbnail: './jsmethod.png'
---

> JavaScript에서 map과 forEach는 배열을 다루는 데 사용되는 두 가지 중요한 메서드입니다. 이 두 메소드는 비슷한 작업을 수행하지만, 주요 차이점이 있습니다. 두 메서드에 대해 이해하기 쉽게 간단하게 정리했습니다.

### 1. map 메서드

: map 메서드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과로 **새로운 배열을 생성**합니다. 그렇기 때문에 배열의 각 요소를 변형하거나 다른 형태로 매핑할 때 사용됩니다.

<br/>

#### **예시코드**

```javascript
let numbers = [1, 2, 3]
let squaredNumbers = numbers.map(x => x * 2) // [2, 4, 6]
```

### 2. forEach 메서드

: forEach 메서드는 배열의 각 요소에 대해 주어진 함수를 실행합니다. 그러나 **새로운 배열을 생성하지 않습니다.** 배열의 각 요소에 대해 부수 효과(side effect)를 일으키는 작업을 할 때 사용됩니다. 예를 들어, 각 요소를 콘솔에 출력하거나, 배열의 각 요소에 대해 특정작업을 수행하고 자 할 때 사용되며 이 과정에서 원본 배열은 변경되지 않습니다. 이해하기 쉽게 두 가지 예시를 가져왔습니다.

<br/>

#### **예시코드 1**

```javascript
let numbers = [1, 2, 3]
numbers.forEach(x => console.log(x)) // 콘솔에 1, 2, 3 출력
```

#### **예시코드 2**

```javascript
let numbers = [1, 2, 3]
let sum = 0

numbers.forEach(number => {
  sum += number // 외부 변수 sum을 변경
})

console.log(sum) // 출력: 6
```

### 3. forEach 와 map의 차이점

#### **1) 결과 생성**

: map은 새로운 배열을 생성하지만, forEach는 아무것도 반환하지 않습니다.

<br/>

#### **2) 용도**

: map은 주로 데이터를 변환하거나 새로운 형태의 데이터를 생성할 때 사용되며, forEach는 단순히 각 요소에 대해 어떤 작업을 수행하고 싶을 때 사용됩니다.

<br/>

#### **3) 부수 효과**

: map은 일반적으로 순수 함수(pure functions)와 함께 사용되어 부수 효과를 일으키지 않는 것이 좋습니다. 반면, forEach는 부수 효과를 일으키는 작업에 더 적합합니다.
<br/>

<br/>
<br/>

### ✨ 정리

map은 변환된 새로운 배열을 생성하는 데 사용되며, forEach는 각 요소에 대한 작업을 수행하는 데 중점을 둡니다.
