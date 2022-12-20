import {
  useQuery,

} from "@tanstack/react-query";
const fakeFetch = () => new Promise(resolve => setTimeout(() => resolve(['a', 'b', 'c']), 1000));

function useFakeFetch() {
  return useQuery({
    queryKey: ['fake'],
    queryFn: fakeFetch,
    initialData: [],
  });
}

function List() {
  const { data: items } = useFakeFetch();

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
