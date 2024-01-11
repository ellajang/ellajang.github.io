---
date: '2024-01-10'
title: '[자바스크립트] Set 메소드 이해하기'
categories: ['All', 'JAVASCRIPT']
summary: '중복되지 않은 유일한 값을 저장하는데 사용되는 set 메소드에 대해 알아보겠습니다.'
thumbnail: './jsmethod.png'
---

> JavaScript의 Set 객체는 ES6부터 도입된 새로운 데이터 구조로, 중복되지 않는 유일한 값을 저장하는 데 사용됩니다. Set은 배열과 비슷하지만, 주요 차이점은 Set 내의 모든 값이 중복되지 않고 유일해야 한다는 것입니다.

### 1. Set의 기본 사용법

: 새로운 Set을 생성하려면 new Set() 구문을 사용합니다. 선택적으로, 초기 값을 배열로 전달할 수 있습니다.<br/>
📌 Set 객체를 사용할 때, new 키워드를 사용하는 것은 필수입니다. Set은 JavaScript에서 클래스의 한 종류로, 인스턴스를 생성할 때 new 키워드를 사용해야 합니다. new 없이 Set을 호출하려고 하면 오류가 발생합니다.
<br/>
<br/>

#### **예시코드**

```javascript
let mySet = new Set([1, 2, 3, 4, 4, 5])
console.log(mySet) // Set(5) {1, 2, 3, 4, 5}
```

### 2. Set 객체의 메소드

: Set 인스턴스에서만 사용할 수 있는 메소드들로 일반 배열에서 사용할 수 없는 메소드들에 대해 설명하겠습니다.
<br/>
<br/>

#### **예시코드**

<br/>

#### 1. 값 추가 : add 메소드를 사용하여 새로운 값을 추가할 수 있습니다.

```javascript
mySet.add(6)
```

#### 2. 값 확인 : has 메소드를 사용하여 Set에 특정 값이 있는지 확인할 수 있습니다.

```javascript
console.log(mySet.has(3)) // true
```

#### 3. 값 제거: delete 메소드를 사용하여 값을 제거할 수 있습니다.

```javascript
mySet.delete(3)
```

#### 4. 크기 확인: size 속성을 사용하여 Set의 크기를 확인할 수 있습니다.

```javascript
console.log(mySet.size) // 5
```

### ✨ 정리

Set 객체는 중복되지 않는 유일한 값을 저장하는 데 사용됩니다. add, has, delete와 같은 메소드는 Set 객체의 메소드입니다. 이러한 메소드들은 Set 인스턴스에서만 사용할 수 있으며, 일반 배열에서는 사용할 수 없습니다. 추가적으로 일반 배열에는 앞서 설명한 메소드들을 대체할 수 있는 다른 메소드들이 존재합니다. 예를 들어, 배열에 요소를 추가하려면 push 메소드를, 요소의 존재 여부를 확인하려면 includes 메소드를, 요소를 제거하려면 splice 또는 filter 메소드를 사용할 수 있습니다.
