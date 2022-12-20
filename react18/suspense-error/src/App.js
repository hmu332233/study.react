import { Suspense } from 'react';
import List from './List';

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        테스트
        <Suspense fallback={<div>로딩 중..</div>}>
          <List delay={1000} />
        </Suspense>
        <Suspense fallback={<div>로딩 중..</div>}>
          <List delay={3000} />
        </Suspense>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
