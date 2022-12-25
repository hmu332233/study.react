import React from 'react';

import { isPromiseLike } from '../utils';

const initialState = { error: null };

class MySuspense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  // static getDerivedStateFromError(error) {
  //   // if (!error?.suspense) {
  //   //   throw error;
  //   // }
  //   return { isLoading: true }
  // }

  componentDidCatch(error, errorInfo) {
    // suspense의 역할을 할 예정이기 때문에 promise만 처리하고 그 외 에러는 throw 처리
    // 실제 promise를 throw 해버리면 error boundary를 이용하여 catch 할 수가 없음
    // error boundary를 이용해 suspense를 구현하기 위해서는 throw가 최소한 객체의 형태이여야함

    // 아래는 컨셉 코드 동작하는 코드는 아님
    if (error?.suspense) {
      this.setState({ isLoading: true })
      error.suspender
        .then(() => this.setState({ isLoading: false }))
        .catch(err => {
          console.log(err)
          throw err
        });
    };
  }

  render() {
    const { isLoading } = this.state;
    const { fallback, children } = this.props;

    console.log('isLoading', isLoading)
    if (!isLoading) {
      return children;
    }

    if (React.isValidElement(fallback)) {
      return fallback;
    }

    return children;
  }
}

export default MySuspense;