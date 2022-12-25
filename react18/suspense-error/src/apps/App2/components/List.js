import { useState, useEffect  } from 'react';
import { wrapPromise } from '../utils'

const fakeFetch = (delay = 1000, fail) => new Promise((resolve, reject) => setTimeout(() => fail ? reject(new Error('fail!!')) : resolve(['a', 'b', 'c']), delay))

function useFakeFetch(delay, fail) {
  const [data, setData] = useState();
  useEffect(() => {
    const data = wrapPromise(fakeFetch, delay, fail);
    setData(data);
  }, []);
  
  return data;
}

let count = 0;
function List({ delay, fail }) {
  console.log('re-render', count++)
  const data = useFakeFetch(delay, fail);

  return (
    <ul>
      {data?.read()}
      {/* {items.map(item => (
        <li key={item}>{item}</li>
      ))} */}
    </ul>
  );
}

export default List;