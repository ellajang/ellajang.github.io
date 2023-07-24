---
date: '2023-07-24'
title: 'Emotion vs Styled-Components : 어떤 CSS-in-JS 라이브러리를 선택할까?'
categories: ['CSS']
summary: 'Emotion과 Styed-Component애 대해 명확하게 알고, 두 라이브러리의 차이를 비교해봤습니다.'
thumbnail: './emotionStyled.png'
---

> Emotion, Styed-Component에 대한 개념을 명확하게 알기 위해 글을 작성하게 되었습니다.

### 1. Emotion과 Styled-Components란?

**Emotion**과 **Styled-Components**는 모두 자바스크립트에서 스타일링을 가능하게 해주는 CSS-in-JS 라이브러리입니다. 이러한 라이브러리들은 일반적으로 CSS 코드를 자바스크립트 파일 안에서 작성할 수 있게 해주며, 컴포넌트 단위의 스타일링을 가능하게 해줍니다. 모두 컴포넌트 기반의 라이브러리이기 때문에, 리액트와 같은 컴포넌트 기반 프레임워크에서 더 효율적으로 작동합니다. 또한, Emotion은 @emotion/react 패키지를 통해 React에 특화된 API를 제공하고, Styled-Components는 이름에서 알 수 있듯이 React 컴포넌트를 스타일링하는데 초점을 맞추고 있습니다.
<br/>
<br/>

#### Emotion

Emotion은 성능, 작은 패키지 크기, 유연한 CSS 스타일 작성 방식을 자랑하는 CSS-in-JS 라이브러리입니다. Emotion은 동적인 스타일링을 지원하며, string 혹은 object 스타일의 선언을 모두 지원합니다. 서버 사이드 렌더링(SSR)도 지원하여 초기 로드 성능을 개선시킬 수 있습니다.

#### Styled-Components

Styled-Components는 자바스크립트 파일 내에서 CSS를 작성하는 데 사용하는 라이브러리입니다. 이 라이브러리는 컴포넌트 스타일링의 새로운 방법을 제공하며, 각 컴포넌트에 대한 CSS 코드를 해당 컴포넌트에 캡슐화하여 관리합니다. 이로써 코드의 재사용성을 높이고 유지 관리를 쉽게 할 수 있습니다.

### 2. 사용 방법

> #### Emotion 사용 방법

<br/>

**패키지 설치**

```javascript
# npm
npm install @emotion/react @emotion/styled

# yarn
yarn add @emotion/react @emotion/styled

```

- Emotion 라이브러리는 주로 두 가지 방법으로 스타일링을 합니다.

1. 인라인 스타일 적용하기 (css prop)
   Emotion은 css prop을 제공하여 직접 컴포넌트에 인라인 스타일을 적용할 수 있습니다. 이 방식은 간단한 스타일링이 필요한 경우에 유용하며, 아래와 같이 사용할 수 있습니다:

```javascript
import { css } from '@emotion/react'

function Component() {
  return (
    <div
      css={css`
        color: hotpink;
        font-size: 24px;
      `}
    >
      Hello, Emotion!
    </div>
  )
}

export default Component
```

2. 스타일링 된 컴포넌트 만들기 (styled API)
   Emotion은 Styled-Components와 유사하게 styled API를 제공합니다. 이 API를 사용하면 스타일을 적용할 컴포넌트를 생성하고, 이 컴포넌트를 재사용할 수 있습니다. 또한, 스타일을 동적으로 변경하는 것도 가능합니다

```javascript
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  color: hotpink;
  font-size: 24px;
`

function Component() {
  return <StyledDiv>Hello, Emotion!</StyledDiv>
}

export default Component
```

   <br/>
   <br/>

> #### Styled-Components 사용 방법

<br/>

**패키지 설치**

```javascript
# npm
npm install styled-components

# yarn
yarn add styled-components

```

- Styled-Components에서는 주로 styled API를 사용하여 각 HTML 태그를 스타일링하여 적용할 수 있습니다. 이렇게 정의된 컴포넌트는 재사용이 가능하며, props를 통해 동적으로 스타일을 변경할 수도 있습니다

```javascript
import styled from 'styled-components'

const StyledDiv = styled.div`
  color: hotpink;
  font-size: 24px;
`

function Component() {
  return <StyledDiv>Hello, Styled-Components!</StyledDiv>
}

export default Component
```

<br/>

#### Styled-Components에서는 주로 styled API를 사용하고, Emotion에서는 추가적으로 css prop을 제공하여 인라인 스타일링을 할 수 있습니다. 이 두 가지 방식은 각각의 경우에 따라 선택하여 사용 할 수 있습니다.

### 3.결론

&nbsp;두 라이브러리 모두 높은 성능을 보장하고, 여러 최적화 기능을 제공합니다. <br/>
서버 사이드 렌더링(SSR), Critical CSS, Dead Code Elimination 등의 기능은 둘 다 잘 지원하며, 라이브러리의 런타임 성능도 매우 뛰어납니다.<br/>
&nbsp;Styled-Components는 초기에 출시되어 커뮤니티가 더 크고, 사용 사례와 튜토리얼, 자료가 많습니다. 또한, 많은 UI 라이브러리가 Styled-Components를 기반으로 만들어져 있습니다.<br/>
&nbsp;반면, Emotion은 최근에 빠르게 인기를 얻고 있으며, 문서화가 잘 되어 있습니다. Emotion 11 버전에서는 Styled-Components와의 호환성을 높이는 등의 변화가 있었습니다. Emotion은 약간 더 작은 패키지 크기를 가지며, 빌드 과정에서 최적화를 더욱 신경 썼다고 알려져 있습니다. <br/>
**정리** : 작은 패키지 크기와 높은 성능을 추구하며, Object 스타일의 작성을 선호한다면 Emotion을 선택하는 것이 좋습니다.
만약 커뮤니티 지원과 넓은 사용 사례, 그리고 라이브러리의 안정성을 중요하게 생각한다면 Styled-Components를 선택하는 것이 좋습니다.
<br/><br/><br/>

#### 📍참고 용어

- 서버 사이드 렌더링 (Server-Side Rendering, SSR)
  서버 사이드 렌더링은 클라이언트 사이드 렌더링에 대한 대안으로 사용되는 렌더링 방식입니다. 이 방식에서 웹 페이지의 초기 렌더링은 서버에서 진행되며, 서버는 이미 렌더링된 페이지의 HTML을 클라이언트로 보냅니다. 이렇게 함으로써 사용자는 페이지를 더 빠르게 볼 수 있게 됩니다. SSR은 특히 검색 엔진 최적화 (SEO)에 중요하며, 초기 로딩 시간을 개선하는 데도 도움이 됩니다.

- Critical CSS
  Critical CSS는 페이지가 처음로드 될 때 필요한 최소한의 CSS를 의미합니다. 이는 "위에 내용(above-the-fold)" 렌더링에 필요한 CSS로, 첫 화면에 표시되는 내용을 스타일링하는 데 사용됩니다. 이 CSS는 HTML 문서의 < head > 내에 인라인으로 포함되어 페이지 로드 시 가장 먼저 다운로드 되어야 합니다. 이렇게 함으로써 사용자는 스타일이 완전히 로드되기 전에 페이지를 볼 수 있게 됩니다.

- Dead Code Elimination
  Dead Code Elimination은 프로그램에서 절대 실행되지 않는 코드(사용되지 않는 함수, 변수 등)를 찾아 제거하는 프로세스입니다. 이는 최적화 과정에서 중요한 역할을 하며, 사용하지 않는 코드를 제거함으로써 프로그램의 크기를 줄이고 실행 속도를 높입니다.

\*\* Emotion과 Styled-Components 모두 SSR, Critical CSS를 지원하며, Dead Code Elimination 능력을 통해 최적화를 돕습니다. 이는 웹 사이트의 로딩 시간을 줄이고, 사용자 경험을 향상시키는 데 중요한 역할을 합니다.
