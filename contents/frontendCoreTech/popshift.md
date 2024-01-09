---
date: '2024-01-09'
title: '[자바스크립트] 배열에 값 추가/제거 메소드 이해하기'
categories: ['All', 'JAVASCRIPT']
summary: '배열에 값을 추가 또는 제거하기 위한 메소드인 pop, shift, unshift, push 메소드에 대해 알아보겠습니다.'
thumbnail: './jsmethod.png'
---

> JavaScript에서 pop, shift, unshift, push 메소드는 배열에 값을 추가 또는 제거하기 위해 사용되는 중요한 메서드입니다. 배열 내의 값을 다루기 위해 자주 사용되는 메서드이기 때문에 정리해봤습니다.

### 1. pop 메소드

: 배열의 **마지막 요소를 제거** 하며, 원본 배열을 변경합니다. 반환은 **배열이 아닌 제거된 값을 반환** 합니다.
<br/>
<br/>

#### **예시코드**

```javascript
let numbers = [1, 2, 3]
let last = numbers.pop() // last는 3, numbers는 이제 [1, 2]
```

### 2. shift 메소드

: 배열의 **첫 번째 요소를 제거** 하며, 반환은 **배열이 아닌 제거된 값을 반환** 합니다. 마찬가지로 원본 배열을 변경합니다.
<br/>
<br/>

#### **예시코드**

```javascript
let numbers = [1, 2, 3]
let first = numbers.shift() // first는 1, numbers는 이제 [2, 3]
```

### 3. unshift 메소드

: 하나 이상의 요소를 배열의 **시작 부분에 추가** 하고, 반환은 **배열이 아닌 변경된 배열의 길이를 반환** 합니다. 마찬가지로 원본 배열을 변경합니다.
<br/>
<br/>

#### **예시코드**

```javascript
let numbers = [2, 3]
let newLength = numbers.unshift(1) // newLength는 3, numbers는 이제 [1, 2, 3]
```

### 4. push 메소드

: 하나 이상의 요소를 배열의 **끝 부분에 추가** 하고, 반환은 **배열이 아닌 변경된 배열의 길이를 반환** 합니다. 마찬가지로 원본 배열을 변경합니다.
<br/>
<br/>

#### **예시코드**

```javascript
let numbers = [1, 2]
let newLength = numbers.push(3) // newLength는 3, numbers는 이제 [1, 2, 3]
```

### ✨ 정리

위 메소드들은 배열을 조작하는데 흔하게 사용됩니다. 주의해야 할 점은 배열 자체를 반환하는 것이 아닌 변경 된 배열의 길이 또는 제거된 값이 반환된다는 점 입니다.
