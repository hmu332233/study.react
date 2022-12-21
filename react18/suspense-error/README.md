# suspense, error boundary 사용

## 해보고자하는 것

1. react의 suspense와 error boundary를 react-query를 이용해 사용해보기
2. 위의 코드에 https://github.com/bvaughn/react-error-boundary 사용해보기
3. react-query를 빼고 suspense가 지원되는 fetch 함수 만들어서 사용해보기
4. <Suspense />를 빼고 직접 <Suspense />를 구현해서 사용해보기
5. data fetch 외에 다른 요소들 (이미지등)에 suspense를 적용해보기

## 기대 효과

- suspense, error boundary를 제품에 어떻게 녹일지 감 잡기
- suspense를 직접 구현해봄으로서 이해도를 높히고, 다른 요소들에도 쉽게 활용할 수 있는 감을 익힌다.


## 레퍼런스

https://github.com/bvaughn/react-error-boundary
https://tech.kakaopay.com/post/react-query-2/
https://maxkim-j.github.io/posts/suspense-argibraic-effect/
https://sergiodxa.com/articles/react/suspense-image-loading


**테스트해보면서 알게된 것 메모**

- initialData와 suspense는 공존 불가능 <- 당연한 것 같기도..