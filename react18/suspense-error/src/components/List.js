import {
  useQuery,

} from "@tanstack/react-query";
const fakeFetch = (delay, fail) => new Promise((resolve, reject) => setTimeout(() => fail ? reject(new Error('fail!!')) : resolve(['a', 'b', 'c']), delay));

function useFakeFetch(delay = 1000, fail) {
  return useQuery({
    queryKey: ['fake', delay, fail],
    queryFn: () => fakeFetch(delay, fail),
    // initialData: [],
    suspense: true,
  });
}

function List({ delay, fail }) {
  const { data: items } = useFakeFetch(delay, fail);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
