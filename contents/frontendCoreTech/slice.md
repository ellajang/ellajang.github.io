---
date: '2024-01-08'
title: '[자바스크립트] slice, splice 메소드 이해하기'
categories: ['All', 'JAVASCRIPT']
summary: '자바스크립트 slice, splice 메소드에 대해서 알아보겠습니다.'
thumbnail: './jsmethod.png'
---

> JavaScript에서 slice, splice는 배열을 다루는 데 사용되는 두 가지 중요한 메서드입니다. 이 두 메소드는 비슷하게 들릴 수 있지만, 사용 목적과 동작 방식에 큰 차이점이 있습니다.

### 1. slice 메서드

: slice 메서드는 배열의 특정 부분에 대한 새로운 배열을 만들며 **원본 배열을 변경하지 않습니다.**
<br/>
<br/>
.slice(start, end) 여기서 start는 추출 시작점의 인덱스이며, end는 추출을 종료할 인덱스입니다(end는 불포함).

<br/>

#### **예시코드**

```javascript
let arr = [1, 2, 3, 4, 5]
let sliced = arr.slice(1, 3) // [2, 3]
```

### 2. splice 메서드

: splice 메서드는 배열을 변경하여 요소를 추가하거나 삭제합니다. slice와 다르게 **원본 배열을 변경합니다.**
<br/>
<br/>
.splice(start, deleteCount, item1, item2, ...)

- start: 변경을 시작할 **인덱스**.
- deleteCount: 제거할 **요소의 개수**.
- item1, item2, ...: 배열에 **추가될 요소들** <br/>
  📌 추가되는 요소는 입력 된 순서인 item1, item2 ... 의 순서대로 추가됩니다.

<br/>

#### **예시코드 1**

```javascript
let arr = [1, 2, 3, 4, 5]
arr.splice(1, 2, 'a', 'b') // 1번 인덱스부터 2개 요소를 제거하고, 'a', 'b'를 추가
console.log(arr) // [1, 'a', 'b', 4, 5]
```

### ✨ 정리

slice는 주로 배열의 일부를 복사하여 새로운 배열을 만들 때 사용되며, 원본 배열은 변경되지 않습니다. <br/>
반면, splice는 배열의 요소를 추가하거나 제거하는 데 사용되며, 이 과정에서 원본 배열이 변경됩니다.
