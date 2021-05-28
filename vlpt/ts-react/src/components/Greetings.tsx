// https://react.vlpt.us/using-typescript/02-ts-react-basic.html

import React, { MouseEventHandler } from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 함수를 선언하는 방법. void 아무것도 리턴하지 않음을 의미
  // onClick: MouseEventHandler<HTMLButtonElement>,
};

// React.FC를 사용할 경우 자동완성에 사용 가능하지만 defaultProps가 동작하지 않음
// const Greettings: React.FC<GreetingsProps> = ({ name }) => {
//   return (
//     <div>Hello, {name}</div>
//   );
// };


// React.FC를 사용하지 않는 것을 추천
function Greettings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      <span>Hello, {name}{mark}</span>
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

Greettings.defaultProps = { 
  mark: '!',
};


export default Greettings;