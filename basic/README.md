## JSX

1. Nested Element
```js
/* 에러발생코드 */
render() {
  return (
    <h1>Hi</h1>
    <h2>I am Error</h2>
  )
}

/*  컴포넌트에서 여러 Elment를 랜더링 할 때
    꼭 container element 안에 포함해야한다 */
render() {
  return (
    <div>
      <h1>Hi</h1>
      <h2>lol! Error is gone.</h2>
    </div>
  )
}
```

2. JavaScript Expression

```js
/*  JSX안에서 JavaScript를 표현하는 방법은
    그냥 {}로 wrapping하면 됩니다. */
render() {
  let text = "Hello React!";
  return (
    <div>{text}</div>
  )
}

/*  if else문은 JSX에서 사용불가
    대안으로 tenary expression */
render() {
  return (
    <p>{1===1?'True':'False'}</p>
  )
}
```

3. Inline Style
```js
/*  JSX 안에서 style을 설정 할때는. string 형식을 사용하지 않고
    key가 camelCase인 객체가 사용된다. */
render() {
  let style = {
    color: 'aqua',
    backgroundColor: 'black'
  };
  return (
    <div style={style}>React</div>
  )
}

/*  JSX안에서 class를 설정할때는 class=가 아닌 className을 사용할 것*/
render() {
  return (
    <div className='box'>React</div>
  )
}
```

4. Comments
```js
  JSX안에서 주석을 작성 할 때에는
  {/*...*/}
  형식으로 작성해야한다.

  주의할 점은 Nested Elemnt 부분에 설명된 것 처럼
  container element 안에 주석이 작성 되어야 한다는 것

render() {
  return (
    <div>
      {/*This is How You Comment*/}
      {/*Multi-line
        Testing*/}
        React
    </div>
  )
}
```

## props & state

### props
  - 컴포넌트 내부의 Immutable Data (변화하지 않는 데이터)
  - JSX 내부에 `{this.props.propsName}`
  - 컴포넌트를 사용할 때, `<>` 괄호 안에  
    `propsName="value"`
  - this.props.children은 기본적으로 갖고있는 props로서  
    `<Cpnt>여기에 있는 값이 들어간다</Cpnt>`
  - **기본 값 설정**
  ```js
  class App extends React.Component {
    render() {
      return (
        <div>
          {this.props.value}
        </div>
      )
    }
  }

  App.defaultProps = {
    value: 0
  }
  ```
  - **Type 검증**
  ```js
  class App extends React.Component {
    render() {
      return (
        <div>
          {this.props.value}
          {this.props.secondValue}
          {this.props.thirdValue}
        </div>
      )
    }
  }

  App.propTypes = {
    value: React.PropTypes.string,
    secondValue: React.PropType.number,
    thirdValue: React.PropTypes.any.isRequired
  }
  ```
### state
  - 유동적인 데이터
  - JSX 내부에 `{this.state.stateName}`
  - 초기값 설정이 필수, 생성자(constructor)에서  
    `this.state = {}`으로 설정
  - 값을 수정 할 때에는 `this.setState({...})`,
    랜더링 된 다음엔 this.state = 절대 사용하지 말 것
