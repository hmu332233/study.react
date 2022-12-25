const STATUS = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
}


/**
 * 핵심 컨셉
 * 매 랜더링마다 read 함수가 불림
 * read 실행시 throw된 Error나 pending 상태의 Promise, 혹은 정상적인 결과값이냐에 따라 어떤 UI를 보여질지가 결정됨
 * throw가 된 경우 컴포넌트에서는 상위 Suspense, ErrorBoundary의 fallback UI를 찾아 보여주는 컨셉
 * 결국 throw를 통해 예외처리를 하도록 하고, 어떤게 throw 됐는지에 따라 해당하는 컴포넌트들이 캐치해서 처리한다는게 메인 컨셉
 */
export const wrapPromise = (promise, ...params) => {
  console.log('wrapPromise')
  let status = STATUS.PENDING; // 최초의 상태
  let results;

  const suspender = promise(...params)
    .then((r) => {
      status = STATUS.SUCCESS; // 성공으로 완결시 success로
      results = r;
    })
    .catch((e) => {
      status = STATUS.ERROR;  // 실패로 완결시 error로
      results = e;
    });

  return {
    read() {
      if (status === STATUS.PENDING) {
        console.log('pending!')
        // throw { suspender, suspense: true }; // 펜딩 promise를 throw 하면 Suspense의 Fallback UI를 보여준다
        throw suspender; // 펜딩 promise를 throw 하면 Suspense의 Fallback UI를 보여준다
      } else if (status === STATUS.ERROR) {
        console.log('error!')
        throw results; // Error을 throw하는 경우 ErrorBoundary의 Fallback UI를 보여준다
      } else if (status === STATUS.SUCCESS) {
        console.log('success!')
        return results; // 결과값을 리턴하는 경우 성공 UI를 보여준다
      }
    }
  }
}