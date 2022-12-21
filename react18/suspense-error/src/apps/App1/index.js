import { useState, Suspense } from 'react';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';
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


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        테스트
        <Suspense fallback={<div>로딩 중..</div>}>
          <List delay={1000} />
        </Suspense>
        <ErrorBoundary fallbackRender={({ reset }) => (
          <div>
            에러 발생
            <button onClick={() => { setUseFail(false); reset(); }}>에러 리셋</button>
          </div>
        )}>
          <Suspense fallback={<div>로딩 중..</div>}>
            <List delay={2000} fail={useFail} />
          </Suspense>
        </ErrorBoundary>
        <AsyncBoundary
          pendingFallback={<div>로딩 중..</div>}
          fallbackRender={({ reset }) => (
            <div>
              에러 발생2
              <button onClick={() => { setUseFail(false); reset(); }}>에러 리셋2</button>
            </div>
          )}
        >
          <List delay={3000} fail={useFail} />
        </AsyncBoundary>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
