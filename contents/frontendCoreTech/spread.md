---
date: '2024-01-08'
title: '[자바스크립트] 스프레드 문법 이해하기'
categories: ['All', 'JAVASCRIPT']
summary: '자바스크립트 스프레드 문법에 대해서 알아보겠습니다.'
thumbnail: './jsgr.png'
---

> JavaScript에서 스프레드 문법(Spread Syntax)은 ES6(ECMAScript 2015)에서 도입 된 문법의 일부입니다. 스프레드 문법은 배열이나 객체와 같은 이터러블을 **개별 요소로 분리** 하는데 사용됩니다. 이 문법은 배열 리터럴 또는 함수 호출에서 사용될 수 있습니다.

### 1. 스프레드 문법이란?

: 스프레드 문법(...)은 배열이나 객체의 요소를 개별적으로 **"펼쳐"** 다른 배열이나 객체에 삽입하거나, 함수의 인자로 사용할 수 있도록 해줍니다.

### 2. 기본 사용 예시

#### **배열에서의 사용**

- 문자열을 배열로 변환

```javascript
let str = 'hello'
let chars = [...str] // ["h", "e", "l", "l", "o"]
```

✏️ split("") 메서드를 사용해서 문자열을 배열로 반환 할 수 있지만, 스프레드 문법을 사용하는 것이 간결해 보일 수 있습니다.

```javascript
let str = 'hello'
let chars = str.split('') // ["h", "e", "l", "l", "o"]
```

<br/>

- 객체 확장 및 복사 <br/>
  : 객체 리터럴에서도 사용할 수 있어, 객체의 속성을 쉽게 확장하거나 복사할 수 있습니다.

```javascript
let obj1 = { a: 1, b: 2 }
let obj2 = { ...obj1, c: 3 } // { a: 1, b: 2, c: 3 }
let copiedObj = { ...obj1 } // { a: 1, b: 2 }
```

<br/>

- 함수 인자에서의 사용 <br/>
  : 함수에 여러 인자를 배열 형태로 전달할 때 사용할 수 있습니다.

##### **예시코드 1**

```javascript
function add(a, b, c) {
  return a + b + c
}
let numbers = [1, 2, 3]
let result = add(...numbers) // result: 6
```

##### **예시코드 2**

```javascript
let numbers = [1, 2, 3]
console.log(Math.max(...numbers)) // 3
```

✅ 배열을 인자로 직접 받지 않는 함수의 경우, 함수가 요구하는 개별 인자로 변환하여 전달해줘야 합니다. <br/>
위의 예시함수 Math.max의 경우 배열을 하나의 인자로 취급하기 때문입니다. <br/>
`Math.max([...numbers])` 는 풀어서보면 `Math.max([1, 2, 3])` 라는 의미이고, 이는 배열을 하나의 인자로 취급하는 함수에는 올바르게 작동하지 않습니다. <br/> `Math.max(...numbers)` 를 풀어서보면 `Math.max(...[1, 2, 3])` 가 되고 이는 `Math.max(1, 2, 3)` 와 동일하기 떄문에 올바르게 작동하게 됩니다.

### ✨ 정리

위와 같은 예시를 익혀 스프레드 문법을 통해 가독성있고, 간결한 코드를 작성할 수 있습니다.
