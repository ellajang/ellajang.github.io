---
date: '2023-08-08'
title: 'TypeScipt란?'
categories: ['TYPESCRIPT']
summary: 'TypeScipt가 무엇이고, 특징에 대해 정리했습니다.'
thumbnail: './ts.png'
---

> TypeScipt를 사용하는 이유와 TypeScipt가 무엇인지에 대해 알아보겠습니다!

### 1. TypeScipt를 왜 사용하는가?

TypeScript는 2012년에 처음 출시되었지만, 최근 몇 년 사이에 그 사용률이 크게 증가했습니다. 이에는 몇 가지 이유가 있습니다.<br/>
**- JavaScript의 복잡성 증가** : JavaScript의 사용 범위가 웹페이지의 간단한 스크립트에서 서버사이드 개발, 모바일 앱, 데스크톱 앱 등으로 확대되면서 JavaScript로 개발하는 것이 점점 더 복잡해졌습니다. 이런 상황에서 TypeScript는 정적 타입, 클래스, 인터페이스 등의 기능을 제공함으로써 대규모 애플리케이션 개발을 더 쉽고 안정적으로 만들어주었습니다.<br/>
**- 프레임워크의 지원** : Angular, Vue.js 등 일부 주요 JavaScript 프레임워크들이 TypeScript를 공식적으로 지원하기 시작했습니다. 특히 Angular 2 이후 버전에서는 TypeScript를 기본으로 사용하도록 바뀌었고, 이는 TypeScript의 인기를 끌어올리는 데 크게 기여했습니다.<br/>
**- 개발 도구의 발전** : Visual Studio Code와 같은 최신 개발 도구들은 TypeScript를 훌륭하게 지원합니다. 이런 도구들은 코드의 자동 완성, 리팩토링, 타입 체킹 등의 기능을 제공하여 TypeScript 개발을 훨씬 쉽게 만들어줍니다.<br/>
**- 커뮤니티의 성장** : TypeScript의 사용자와 기여자가 증가함에 따라, 문제 해결에 필요한 리소스(예: StackOverflow의 답변, GitHub의 이슈 해결, 블로그 포스트 등)가 많이 생겨났습니다. 이는 TypeScript를 시작하고 사용하는 데 큰 도움이 되었습니다.<br/>

### 2. TypeScipt란?

TypeScript는 Microsoft에서 개발하고 유지 보수하는 오픈 소스 프로그래밍 언어입니다. TypeScript는 JavaScript의 상위 집합으로, JavaScript 코드를 TypeScript 코드로 간편하게 변환할 수 있습니다.<br/>
TypeScript의 핵심 기능 중 하나는 정적 타입 체킹을 제공하는 것입니다. 이는 코드를 실행하기 전에 프로그램의 타입 안정성을 검증하는 데 도움이 됩니다.<br/>
정적 타입 체킹은 컴파일 타임에 수행되므로, 실행 전에 에러를 잡아낼 수 있어 디버깅을 용이하게 만듭니다. 또한, 자체 문서화 기능을 제공하며, IDE의 지원을 통해 개발자의 생산성 향상에 크게 기여합니다.<br/>
그러므로 TypeScript의 정의는 "JavaScript의 상위 집합으로, 정적 타입 체킹과 같은 추가 기능을 제공하는 오픈 소스 프로그래밍 언어"라고 할 수 있습니다.<br/>

### 3. TypeScipt의 주요 특징

#### **- 정적 타이핑**

: TypeScript는 변수, 함수 매개변수, 함수 반환 값 등에 대한 타입을 명시적으로 선언할 수 있습니다. 이를 통해 개발자가 코드를 작성하는 시점에 타입 관련 에러를 사전에 잡아낼 수 있게 됩니다. 즉, 실행하기 전에 코드의 오류를 찾아내어 런타임 오류를 줄일 수 있습니다. 또한 이러한 타입 정보는 코드의 가독성을 향상시키고, 자동완성, 리팩토링 등 IDE의 도움을 받을 수 있게 합니다.
<br/>
<br/>

#### **- 객체 지향 프로그래밍 지원**

: TypeScript는 클래스, 인터페이스, 상속, 추상화 등 객체 지향 프로그래밍의 핵심 개념을 지원합니다. 이는 코드의 재사용성과 유지 보수성을 향상시키는 데 도움이 됩니다.
<br/> [참고] 📎 [객체 지향 프로그래밍이란?] (https://ellajang.github.io/frontendCoreTech/oop/)
<br/>
<br/>

#### **- ESNext 기능 지원**

: TypeScript는 최신 JavaScript(ECMAScript)의 새로운 기능들을 지원합니다. 예를 들어, async/await, decorators, optional chaining 등의 기능을 안정적으로 사용할 수 있습니다.
<br/>
<br/>

#### **- 컴파일 타임 에러 체크**

: TypeScript는 컴파일 과정에서 타입 불일치 및 다른 에러를 감지하고 알려줍니다. 이로써 코드가 실제로 실행되기 전에 대부분의 오류를 미리 잡아낼 수 있습니다.
<br/>
<br/>

#### **- 호환성**

: TypeScript는 JavaScript의 상위 집합이므로, 기존의 JavaScript 코드를 TypeScript로 쉽게 변환할 수 있습니다. 또한, TypeScript로 작성한 코드는 컴파일을 거쳐 JavaScript 코드로 변환되기 때문에, TypeScript 코드는 어떤 JavaScript 환경에서도 실행할 수 있습니다.
<br/>
<br/>

### 4. TypeScript 컴파일러 설치 및 사용법

1. TypeScript를 사용하려면 먼저 Node.js 환경이 필요합니다. 그런 다음, TypeScript를 글로벌로 설치하기 위해 npm (Node 패키지 관리자)를 사용하면 됩니다. 이렇게 하면, 개발 환경에서 TypeScript를 사용할 수 있게 됩니다.

```javascript
npm install -g typescript
```

2. 이후에는 TypeScript 코드를 작성하고, TypeScript 컴파일러(tsc)를 사용하여 JavaScript로 변환(컴파일)하는 과정이 필요합니다. 예를 들어, TypeScript 파일(app.ts)을 JavaScript 파일(app.js)로 변환하려면 다음과 같이 명령합니다<br/>
   📌 TypeScript는 JavaScript의 "상위 집합"이며, 더 많은 기능(예: 정적 타입, 인터페이스, 제네릭 등)을 제공하기 위해 JavaScript 언어를 확장한 것이기 때문에 Node.js와 같은 JavaScript 런타임에서 직접 실행될 수 없어 컴파일하는 과정이 필요합니다.

```javascript
tsc app.ts
```

3. 또한, TypeScript는 복잡한 프로젝트에서도 타입 설정 등의 기능을 제어할 수 있도록 tsconfig.json 파일을 사용합니다. tsconfig.json은 TypeScript 프로젝트의 루트 디렉토리에 위치하며, TypeScript 컴파일러에게 어떤 파일을 변환하고, 어떤 컴파일 옵션을 사용해야 하는지 알려주는 역할을 합니다.

### 5. 결론

TypeScript는 큰 커뮤니티, JavaScript와의 호환성, 정적 타이핑, 객체 지향 프로그래밍 지원, 그리고 ESNext 기능 지원과 같은 특징들로 인해 많은 개발자들이 선택하는 프로그래밍 언어입니다. 또한, Angular, Vue.js 등의 주요 프레임워크에서 공식적으로 지원하고 있어서 대규모 프로젝트에서 안정적인 개발을 가능하게 합니다. 이런 이유로 TypeScript를 많은 곳에서 사용하고 있다고 할 수 있습니다.
