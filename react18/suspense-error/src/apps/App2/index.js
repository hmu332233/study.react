import { useState } from 'react';
import List from './components/List';
import AsyncBoundary from './components/AsyncBoundary';


import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    }
  }
});

function App() {

  // 에러를 재현하기 위해 억지 state
  const [useFail, setUseFail] = useState(true);
  const [count, setCount] = useState(0);
  console.log('rerender-App')
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setCount(v => v + 1)}>{count}</button>
      <div className="App">
        테스트
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
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
