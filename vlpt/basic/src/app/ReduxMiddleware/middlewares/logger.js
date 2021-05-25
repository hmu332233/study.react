/*
  store: 리덕스 스토어 인스턴스
  next: 액션을 다음 미들웨어에게 전달하는 함수. 다음 미들웨어가 없다면 reducer에게 전달됨. next를 호출하지 않으면 action이 무시처리됨
  action: 현재 처리하고 있는 action 객체
*/
const logger = store => next => action => {
  console.log(action); // 먼저 액션을 출력합니다.
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  console.log(store.getState()); // next 실행 이후 store 값
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};

export default logger;