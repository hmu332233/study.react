import {
  useQuery,

} from "@tanstack/react-query";
const fakeFetch = (delay) => new Promise(resolve => setTimeout(() => resolve(['a', 'b', 'c']), delay));

function useFakeFetch(delay = 1000) {
  return useQuery({
    queryKey: ['fake', delay],
    queryFn: () => fakeFetch(delay),
    // initialData: [],
    suspense: true,
  });
}

function List({ delay }) {
  const { data: items } = useFakeFetch(delay);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
