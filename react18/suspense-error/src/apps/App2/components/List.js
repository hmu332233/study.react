import { wrapPromise } from '../utils'

const fakeFetch = (delay = 1000, fail) => new Promise((resolve, reject) => setTimeout(() => fail ? reject(new Error('fail!!')) : resolve(['a', 'b', 'c']), delay))

const wrappedFakeFetch = wrapPromise(fakeFetch, 3000, false);

// TODO: delay, fail을 인자로 받으면서도 wrapPromise가 가능한 형태로 만들기
function useFakeFetch(delay, fail) {
  return wrappedFakeFetch.read();
}

let count = 0;
function List({ delay, fail }) {
  console.log('re-render', count++)
  useFakeFetch(delay, fail);

  return (
    <ul>
      <li>테스트 코드</li>
      {/* {data.read()} */}
      {/* {items.map(item => (
        <li key={item}>{item}</li>
      ))} */}
    </ul>
  );
}

export default List;