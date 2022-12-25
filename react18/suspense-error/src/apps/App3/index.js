import AsyncBoundary from './components/AsyncBoundary';
import SuspenseImage from './components/SuspenseImage';


function App() {
  console.log('rerender-App')
  return (
    <div className="App">
      테스트
      <AsyncBoundary
        onError={(error, info) => console.log('lib.onError', error, info)}
        pendingFallback={<div>로딩 중..</div>}
      >
        <SuspenseImage src="https://9oormthon-badge.minung.dev/badge.svg" />
      </AsyncBoundary>
    </div>
  );
}

export default App;
