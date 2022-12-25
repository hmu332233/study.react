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


// 한번 가져온 적이 있는 리소스은 다시 요청하지 않기 위한 캐싱 처리
const cache = new Map();

// 이미지의 소스를 받아서 리소스를 리턴한다.
export const loadImage = (source) => {
  
  // 캐싱된게 있다면 바로 리턴
  let resource = cache.get(source);
  if (resource) return resource;

  // 없다면 위의 wrapPromise를 활용하여 suspense가 가능한 형태로 이미지를 불러온다.
  resource = wrapPromise(
    () =>
      // 이미지 객체를 만들어서 이미지를 불러오도록 하고 완료되었을때 resolve하는 promise를 만든다.
      new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = source;
        img.addEventListener("load", () => resolve(source));
        img.addEventListener("error", () =>
          reject(new Error(`Failed to load image ${source}`))
        );
      })
  );
 
  cache.set(source, resource);
  return resource;
}