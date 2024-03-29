---
date: '2023-08-02'
title: '알고리즘(Algorithm) 종류 및 개념 '
categories: ['algorithm']
summary: '알고리즘은 주어진 문제를 해결하기 위한 일련의 명령어 혹은 절차를 의미합니다. 알고리즘은 특정 작업을 수행하거나 문제를 해결하는 방법으로, 논리적인 절차를 따릅니다. 이러한 알고리즘의 종류에 대해 알아보고 각 종류별 알고리즘의 개념에 대해 설명하겠습니다.'
thumbnail: '../algo.png'
---

> 코딩테스트 문제들을 풀면서 알고리즘에 대한 지식이 필요하다고 생각하여 글을 작성하게 되었습니다. 알고리즘의 종류와 개념에 대해서 설명합니다.

### 1. 알고리즘(Algorithm)이란?

간략히 말해, 문제 해결 절차를 체계적으로 기술한 것이라고 할 수 있습니다. 문제의 요구 조건으로 입력과 출력을 명시해주는데, 알고리즘은 입력으로부터 출력을 만드는 과정을 체계적으로 기술 한 것이라고 볼 수 있습니다. JavaScript, Python, C, Java 등을 프로그래밍 언어라고 불리는데, 우리는 프로그래밍 언어를 알고리즘을 구현하는 수단으로 이용합니다.

### 2. 알고리즘(Algorithm)을 알아야 하는 이유

프로그래밍에서는 데이터의 조작과 처리가 필수적입니다. 이 때 필요한 두 가지 주요 구성 요소는 자료구조와 알고리즘입니다. 자료구조는 데이터를 어떻게 표현(구성)할 것인가에 관한 것입니다. 예를 들어, 우리는 리스트, 트리, 그래프, 스택, 큐 등의 다양한 자료구조를 사용하여 데이터를 표현하고 저장합니다.<br/>
📎 [자료구조 종류 및 개념] (https://ellajang.github.io/basicResource/dsConcept/)

반면에 알고리즘은 표현된 데이터를 어떻게 처리할 것인가에 관한 것입니다. 여기서 '처리'란, 데이터를 분석하거나 원하는 결과를 얻기 위해 데이터에 대한 여러 가지 연산(가공)을 포함합니다. 예를 들어, 정렬, 탐색, 삽입, 삭제 등의 연산을 수행하는 다양한 알고리즘이 있습니다.

따라서, 단순히 데이터를 나열하는 것만으로는 프로그램을 구현하는 것이 불가능합니다. 데이터를 적절히 표현하는 자료구조와, 그 데이터를 원하는 방식으로 처리하는 알고리즘의 조합이 프로그래밍의 핵심이라고 할 수 있습니다. 이는 효율적이고 효과적인 솔루션을 제공하기 위해 필수적입니다.

### 3. 알고리즘 종류

> #### 정렬 알고리즘(Sorting Algorithms)
>
> ##### : 이 알고리즘은 주어진 데이터 집합을 특정 순서(예: 오름차순 또는 내림차순)에 따라 정렬하는 데 사용됩니다.

<br/>

**1) 버블정렬(Bubble Sort)**

- 이 알고리즘은 인접한 두 데이터의 크기를 비교하여 정렬하는 방법입니다. 첫 번째 요소부터 시작하여 인접한 요소와 비교해 크면 자리를 바꿉니다. 이 과정을 전체 배열을 통해 반복하면 가장 큰 요소가 배열의 끝으로 이동하게 됩니다. 이를 배열의 크기만큼 반복하면 전체 배열이 정렬됩니다.

**2) 선택 정렬(Selection Sort)**

- 이 알고리즘은 주어진 데이터 중에서 최소값을 찾아서, 순서대로 정렬하는 방법입니다. 데이터 배열의 맨 앞부터 시작해서 최소값을 찾고, 그 최소값을 맨 앞의 데이터와 교체합니다. 이후 맨 앞의 데이터를 제외한 나머지 데이터에서 다시 최소값을 찾아 이를 두 번째 위치의 데이터와 교체합니다. 이 과정을 반복하면 전체 배열이 정렬됩니다.

**3) 삽입 정렬(Insertion Sort)**

- 이 알고리즘은 두 번째 요소부터 시작하여 해당 요소 앞쪽의 데이터와 비교하면서 정렬하는 방법입니다. 삽입할 요소보다 더 작은 값을 찾을 때까지 앞쪽의 데이터를 뒤로 밀어냅니다. 그리고 작은 값을 찾았거나, 더 이상 앞쪽에 요소가 없는 경우 해당 위치에 요소를 삽입합니다. 이 과정을 반복하면 전체 배열이 정렬됩니다.

**4) 퀵 정렬(Quick Sort)**

- 이 알고리즘은 데이터에서 피벗(기준점)을 정하여, 피벗보다 작은 데이터는 왼쪽에, 큰 데이터는 오른쪽에 위치시킵니다. 이 과정을 재귀적으로 반복합니다. 먼저 전체 배열에 대해 피벗을 정하고 정렬한 후, 피벗을 기준으로 나뉜 두 부분에 대해 각각 피벗을 정하고 정렬합니다. 각 부분에서 더 이상 나눌 수 없을 때까지 이 과정을 반복하면 전체 배열이 정렬됩니다.<br/>
  \*\* _분할 정복 알고리즘_ 에 기반합니다.<br/>
  📍 재귀적으로 반복 : 재귀적으로라는 단어의 의미는 동일한 형태의 더 작은 부분 문제들로 나누어 해결한다는 의미입니다. 퀵정렬에서 사용되는 재귀적으로 반복이라는 말의 의미는 피벗을 기준으로 배열을 나눠 두개의 부분 배열이 생겼고 이 작은 규모의 부분 배열을 반복적으로 정렬해가며 문제를 해결하게 됩니다. 즉, 복잡한 문제를 작은 부분문제로 나눠 해결한다는 의미로 볼 수 있습니다.

**5) 병합 정렬(Merge Sort)**

- 이 알고리즘은 _분할 정복 알고리즘_ 에 기반하며, 재귀함수를 사용합니다. 배열을 절반으로 나누어 두 부분 배열로 만든 후, 각 부분 배열을 재귀적으로 병합 정렬합니다. 이후 두 부분 배열을 다시 합치는데, 이때 두 부분 배열의 요소를 순서대로 비교하여 작은 순서대로 합칩니다. 이 과정을 반복하면 전체 배열이 정렬됩니다.<br/>
  📍재귀함수 : 자기 자신을 다시 호출하는 함수를 말합니다. 재귀 함수를 작성할 때는 반드시 종료 조건이 있어야 합니다. 종료 조건이 없는 경우, 함수는 무한히 자신을 호출하게 되어 프로그램이 정상적으로 종료되지 않게 됩니다.

<br/>

> #### 검색 알고리즘(Search Algorithms)
>
> ##### : 이 알고리즘은 데이터 집합에서 특정 항목을 찾는 데 사용됩니다.

<br/>

**1) 선형 검색(Linear Search)**

- 가장 간단한 형태의 검색 알고리즘입니다. 리스트의 처음부터 끝까지 하나씩 차례대로 원하는 값을 찾습니다. 이 알고리즘은 리스트의 크기에 비례하는 시간이 걸립니다.

**2) 이진 검색(Binary Search)**

- 정렬된 리스트에서 사용됩니다. 리스트의 중간값과 찾으려는 값을 비교하며 검색 범위를 반으로 줄여 나갑니다. 값이 중간값보다 작으면 왼쪽을, 크면 오른쪽을 탐색합니다. 이 과정을 반복하면 원하는 값을 찾을 수 있습니다. 이진 검색은 로그 시간에 실행되므로 매우 효율적입니다. 원하는 값을 찾기 위해 배열을 절반으로 분할하며 검색 범위를 줄이기 때문에 _분할 정복 알고리즘_ 공통으로 체택합니다.

**3) 해시 검색(Hashing)**

- 해시 테이블을 사용하는 검색 알고리즘입니다. 검색하려는 값을 해시 함수에 넣어서 얻은 해시값을 통해 데이터를 찾습니다. 적절한 해시 함수가 사용되면 상수 시간에 데이터를 검색할 수 있습니다.<br/>
  📍 해시 테이블 : 해시 테이블은 키를 값에 연결하여 일대일 대응을 이루는 자료구조를 말합니다. 이는 키를 이용하여 데이터를 빠르게 저장하고 검색할 수 있는 특성이 있습니다.

**4) 이진 탐색 트리(Binary Search Tree)**

- 이진 탐색 개념을 트리 구조에 적용한 것입니다. 루트 노드보다 작은 값을 가진 노드는 왼쪽 서브트리에, 큰 값을 가진 노드는 오른쪽 서브트리에 위치합니다. 원하는 값을 찾기 위해 루트 노드부터 시작하여 비교하며 왼쪽 또는 오른쪽 서브트리로 이동합니다.<br/>
  📍 노드 : 노드는 트리나 그래프 같은 구조체에서 개별 단위를 의미합니다. 노드는 하나 이상의 값을 가질 수 있으며, 다른 노드와의 연결(주로 '링크' 또는 '에지'라고 불림) 정보를 포함합니다.

<br/>

> #### 그래프 알고리즘(Graph Algorithms)
>
> ##### : 이 알고리즘은 그래프 데이터 구조를 사용하여 문제를 해결합니다.

<br/>

**1) 깊이 우선 탐색 (Depth-First Search, DFS)**

- 이 알고리즘은 그래프의 깊이를 우선적으로 탐색하는 방식을 취합니다. 시작 노드에서 시작해 가능한 한 깊게 그래프를 탐색하며, 더 이상 깊게 탐색할 수 없는 경우 이전 노드로 돌아가서 다른 이웃 노드를 탐색하는 방식입니다.

**2) 너비 우선 탐색 (Breadth-First Search, BFS)**

- 이 알고리즘은 그래프의 너비를 우선적으로 탐색하는 방식을 취합니다. 시작 노드의 모든 이웃 노드를 우선적으로 방문하고, 이후 이들 각각의 이웃 노드들을 방문하는 식으로 진행됩니다.

**3) 최소 신장 트리 (Minimum Spanning Tree, MST)**

- 이 알고리즘은 그래프의 모든 노드를 연결하는 가장 가중치가 적은 트리를 찾는 문제입니다.

**4) 최단 경로 알고리즘 (Shortest Path Algorithm)**

- 이 알고리즘은 그래프 내에서 한 노드에서 다른 노드로 가는 최단 경로를 찾는 문제입니다.

<br/>

> #### 동적 프로그래밍 알고리즘(Dynamic Programming Algorithms)
>
> ##### : 이 알고리즘은 복잡한 문제를 간단한 하위 문제로 분해하고, 각 하위 문제의 결과를 저장하여 동일한 하위 문제의 반복 계산을 피하는 방법을 사용합니다.

<br/>

**- 동적 프로그래밍은 크게 두 가지 접근법이 있습니다.**

- Top-down: 큰 문제부터 시작하여 작은 하위 문제로 나누는 방식입니다. 이 방식은 재귀를 사용하여 구현됩니다. 작은 문제의 답이 필요할 때마다 계산하고, 계산된 답은 메모이제이션(기억화)을 통해 저장하여 나중에 다시 사용합니다.

- Bottom-up: 가장 작은 문제부터 시작하여 큰 문제로 나아가는 방식입니다. 이 방식은 반복문을 사용하여 구현됩니다. 각 문제는 이전에 해결한 문제의 답을 활용하여 해결합니다.

<br/>

**1) 피보나치 수열(Fibonacci Sequence)**

- 피보나치 수열은 각 수가 바로 앞의 두 수를 더한 값이 되는 숫자의 나열입니다. 첫 번째와 두 번째 수를 각각 0, 1로 시작하고, 세 번째 수부터는 바로 앞의 두 수를 더한 값이 됩니다. 따라서 이 수열은 0, 1, 1, 2, 3, 5, 8, 13, 21, ... 와 같이 이어집니다. 이를 동적 프로그래밍으로 풀면, 중복 계산을 피하고 더 효율적으로 값을 구할 수 있습니다.

**2) 배낭 문제(Knapsack Problem)**

- 배낭 문제는 주어진 무게 한도 내에서 가치를 최대화하는 물건들의 조합을 찾는 문제입니다. 물건은 각각 무게와 가치를 가지며, 배낭의 무게 한도를 넘지 않으면서 가장 가치가 높은 물건들을 고르는 것이 목표입니다. 이 문제도 동적 프로그래밍을 통해 효율적으로 해결할 수 있습니다.

**3) 최장 공통 부분열(Longest Common Subsequence, LCS)**

- 두 개의 문자열이 주어졌을 때, 두 문자열에 모두 나타나는 부분 문자열 중 가장 긴 것을 찾는 문제입니다. 이 문제를 해결하기 위해서는 모든 가능한 부분 문자열을 생성하고, 그 중 가장 긴 공통 부분 문자열을 찾아야 합니다. 이를 동적 프로그래밍으로 해결하면 불필요한 계산을 피하고 효율적으로 문제를 해결할 수 있습니다.

<br/>

> #### 탐욕 알고리즘(Greedy Algorithms)
>
> ##### : 문제를 해결하는 데에 있어서, 그 순간 가장 최선의 선택을 하는 방법을 추구하는 알고리즘입니다. 매 선택이 순간마다 이루어지며, 각 선택은 이후의 선택에 영향을 주지 않아야 하며, 각 선택은 국소적인 최적화로 이루어집니다. 이러한 성질을 '탐욕적'이라 부릅니다. 탐욕 알고리즘이 일반적으로 효과적으로 사용되는 경우는 각 단계에서의 최적의 결정이 전체적으로 최적의 결과를 도출할 때입니다. 즉, 현재의 선택이 마지막 결과를 단순화하고 이해하기 쉽게 만들어 주는 경우입니다.

<br/>

**1) 다익스트라의 알고리즘(Dijkstra's Algorithm)**

- 이 알고리즘은 주어진 출발점과 도착점 사이의 가장 짧은 경로를 찾는 알고리즘입니다. 이 알고리즘은 그래프의 모든 간선의 가중치가 양수일 때만 적용 가능합니다. 다익스트라 알고리즘은 가중치의 합이 최소가 되는 노드를 우선적으로 선택하여, 그래프의 모든 노드를 순회하게 됩니다.

**2) 프림의 알고리즘(Prim's Algorithm)**

- 이 알고리즘은 그래프에서 최소 신장 트리를 찾는 알고리즘입니다. 최소 신장 트리란 그래프의 모든 노드를 연결하는 간선들 중 그 합이 최소가 되는 트리를 의미합니다. 프림 알고리즘은 시작 노드에서부터 시작하여 가장 가중치가 작은 간선이 연결하는 노드를 선택하고, 이 과정을 모든 노드가 선택될 때까지 반복합니다.

**3) 허프만 코딩(Huffman Coding)**

- 허프만 코딩은 압축 알고리즘의 한 종류로, 데이터를 효율적으로 인코딩하는 데 사용되는 가변 길이 코딩 방식입니다. 가장 빈번하게 등장하는 문자에 가장 짧은 코드를, 가장 드물게 등장하는 문자에 가장 긴 코드를 부여하여 전체 메시지를 표현하는 데 필요한 비트 수를 최소화합니다. 이 과정에서 이진 트리를 사용하며, 각 문자의 빈도 수를 기반으로 허프만 트리를 생성하게 됩니다.

<br/>

> #### 분할 정복 알고리즘(Divide and Conquer Algorithms)
>
> ##### : 이 알고리즘은 주어진 문제를 작은 크기의 같은 유형의 서브 문제들로 분할하고, 이를 해결한 후, 해결된 서브 문제들을 결합하여 원래 문제의 해결책을 구하는 방법입니다. 이러한 방식은 큰 문제를 해결하기 어려울 때 작은 문제로 나누어 풀면서 해결하는 전략을 취합니다.

<br/>

**1) 병합 정렬(Merge Sort), 퀵 정렬(Quick Sort), 이진 검색(Binary Search)**

- 앞서 설명했습니다.

**2) 큰 수 곱셈(Large Number Multiplication)**

- 큰 수를 더 작은 부분으로 나누어 곱셈한 후, 그 결과를 합쳐서 최종 결과를 얻습니다.

**3) 스트라센의 행렬 곱셈(Strassen's Matrix Multiplication)**

- 큰 행렬을 더 작은 크기의 서브 행렬들로 분할하여 곱하고, 그 결과를 결합하여 최종 결과를 얻습니다.

**4) 히스토그램에서 가장 큰 직사각형(Largest Rectangle in Histogram)**

- 히스토그램에서 가장 큰 직사각형의 면적을 찾는 문제를 작은 범위의 히스토그램으로 나누어 해결합니다.

<br/>`

> #### 백트래킹 알고리즘(Backtracking Algorithms)
>
> ##### : 이 알고리즘은 모든 가능한 해결책을 찾아보고, 해결책이 적절하지 않다면 이전 단계로 돌아가 (즉, "백트랙") 다른 경로를 시도하는 방식을 사용합니다.

<br/>

**1) 순열 생성(Permutation Generation)**

- 주어진 집합의 모든 순열을 생성하는 문제.

**2) 미로 찾기(Maze Solving)**

- 주어진 출발점에서 도착점까지 경로를 찾는 문제.

**3) N-퀸 문제(N-Queens Problem)**

- N x N 체스판에서 N개의 퀸이 서로 공격할 수 없는 위치에 놓이는 모든 가능한 배열을 찾는 문제.

**4) 수도쿠(Sudoku)**

- 9x9 격자에 1부터 9까지의 숫자를 채우되, 각 행, 각 열, 각 3x3 서브그리드에 1-9까지의 숫자가 한 번씩만 나타나게 하는 문제.

**5) 색칠 문제(Coloring Problem)**

- 그래프의 노드를 색칠하는데, 인접한 두 노드는 같은 색으로 칠할 수 없는 문제. 최소의 색을 사용해야 함.

### 4. 바람직한 알고리즘

**바람직한 알고리즘이 되기 위해 필요한 요소입니다.**

- 명확성<br/>
  이해하기 쉽고 가능하면 간단하게 작성하는 것이 좋습니다.

- 효율성<br/>
  같은 문제를 해결하기 위해 다양한 알고리즘이 존재합니다. 동일한 문제를 해결하는 알고리즘들이 수행 시간 또는 사용하는 메모리 공간이 수백만 배 이상 차이가 날 수 있습니다. 이중 가장 빠르게 또는 적은 메모리 공간으로 문제를 해결할 수 있는 알고리즘이 좋은 알고리즘이라고 할 수 있습니다.

- 안정성<br/>
  같은 우선순위의 입력 값에 대해서는 원래의 순서가 유지되는 정렬 알고리즘을 안정적이라고 합니다. 예를들어 이름으로 사람들의 리스트를 알파벳 순으로 정렬하고, 그 다음에 같은 이름을 가진 사람들을 나이 순으로 정렬한다고 가정해 봅시다. 만약 이름이 같은 사람들 사이에서 원래의 순서가 유지되면 (즉, 이름이 같은 사람들 중에서는 나이가 어린 사람이 먼저 옴), 이것은 '안정적인' 정렬이라고 할 수 있습니다. 반대로, 이름이 같은 사람들 사이에서 원래의 순서가 유지되지 않으면 (즉, 이름이 같은 사람들 중에서는 나이 순서와 상관없이 누가 먼저 오는지 예측할 수 없음), 이것은 '불안정한' 정렬이라고 할 수 있습니다.

### 5. 결론

알고리즘은 프로그래밍의 핵심 구성 요소 중 하나입니다. 적절한 알고리즘을 선택하고 이해하는 것은 문제 해결의 중요한 단계로, 최적의 솔루션을 찾아내는 데 도움이 됩니다. 그렇지 않으면, 효율성이 떨어지거나 문제 해결에 실패할 수 있습니다.

이 글에서는 알고리즘의 기본 개념과 다양한 종류, 그리고 바람직한 알고리즘의 특성에 대해 알아보았습니다. 이를 통해 알고리즘이 어떻게 작동하고, 언제 어떤 알고리즘을 사용해야 하는지에 대한 기본적인 이해를 돕고자 했습니다.

이론적인 이해만으로는 충분하지 않다고 생각합니다. 실제 문제를 풀어보고, 다양한 알고리즘을 구현해보는 것이 중요하다고 생각합니다. 문제가 주어지면 어떤 알고리즘을 사용해야하는지 생각해보면서 풀어야 알고리즘에 대해 깊이있게 이해를 할 수 있다고 생각합니다. 따라서, 알고리즘을 학습하는 과정에서는 이론적인 학습과 실습을 병행하는 것이 꼭 필요하다고 생각합니다.

이 글이 알고리즘에 대한 기본적인 이해를 가지는데 도움이 되었으면 좋겠습니다 :)
