## Component Life Cycle API

- **componentWillMount**
  - 랜더링이 되기전이 실행
- **componentDidMount**
  - 랜더링이된 다음
- **componentWillReceiveProps**
  - 새로운 props를 받았을때
- **shouldComponentUpdate**
  - 컴포넌트가 업데이트를 해야할지 말아야할지 정하는 부분
- **componentWillUpdate**
  - 컴포넌트가 업데이트 되기 전
- **componentDidUpdate**
  - 컴포넌트가 업데이트 된 후
- **componentWillUnmount**
  - 컴포넌트가 제거될때

[참고 - 코드](05-life_cycle.js)  
[참고 - 한글](https://velopert.com/1130)  
[참고 - 영어](https://reactjs.org/docs/react-component.html)