import React from 'react';

const initialState = { error: null };

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    // 여기는 로깅만 담당하면 된다.
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    this.props.onError?.(error);
  }

  reset() {
    this.setState(initialState)
  }

  render() {
    const { error } = this.state;
    const { fallback, fallbackRender, children } = this.props
    
    if (!error) {
      return children;
    }

    // 여기서부터는 모두 에러있을 때

    // 우선순위1 fallback
    if (React.isValidElement(fallback)) {
      return fallback;
    }

    // 우선순위2 fallbackRender
    if (typeof fallbackRender === 'function') {
      // error를 대상으로 fallback을 직접 컨트롤하거나 리셋하고 싶은게 있을때 사용하라고 render props으로 빼둠
      return fallbackRender({ error, reset: this.reset })
    }

    // TODO: 아래는 발생하면 안되는 케이스로 처리해두기. ts로 만들껄..
    return null;
  }
}

export default ErrorBoundary;