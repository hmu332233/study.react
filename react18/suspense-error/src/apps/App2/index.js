import { useState } from 'react';
import List from './components/List';
import AsyncBoundary from './components/AsyncBoundary';


import MySuspense from './components/MySuspense';

function App() {

  // 에러를 재현하기 위해 억지 state
  const [useFail, setUseFail] = useState(true);
  const [count, setCount] = useState(0);
  console.log('rerender-App')
  return (

    <div className="App">
      <button onClick={() => setCount(v => v + 1)}>{count}</button>
      테스트
      
        {/* <List delay={1000} fail={useFail} /> */}
      <AsyncBoundary
        onError={(error, info) => console.log('lib.onError', error, info)}
        pendingFallback={<div>로딩 중..</div>}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            에러 발생
            <button onClick={() => { setUseFail(false); resetErrorBoundary(); }}>에러 리셋</button>
          </div>
        )}
      >
        <List delay={1000} fail={useFail} />
      </AsyncBoundary>
      {/* <MySuspense fallback={<div>로딩 중..</div>}> */}
      {/* <ErrorBoundary fallback={<div>로딩 중...</div>}>
        <List delay={1000} fail={useFail} />
      </ErrorBoundary> */}
      {/* </MySuspense> */}
    </div>
  );
}

export default App;
