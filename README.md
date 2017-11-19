## React study

### 에디터 환경
- Atom을 사용하며 `jshint`와 `react` 패키지를 추가로 설치하여 사용한다.

### 개발 환경
- **nodejs**
```bash
$ apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_6.x | bash -
$ apt-get install -y nodejs
```
- **mongoDB**
```bash
$ apt-get install mongodb
$ mkdir -p /data/db
```

### react 개발을 위한 설치
- **webpack**
  - 브라우저 위에서 import(require)를 할 수 있게 해주고 자바스크립트 파일들을 하나로 합쳐준다.
- **webpack-dev-server**
  - 별도의 서버를 구축하지 않고도 static 파일을 다루는 웹서버를 열수 있으며 hot-loader를 통해 코드가 수정 될 때마다 자동으로 리로드 되게 할 수 있다.
  
```bash
$ npm install -g webpack webpack-dev-server
```
- **react**
```bash
$ npm install --save react react-dom
```
- **개발 의존 모듈 설치**
  - 첫째줄(babel): es6 + jsx 문법을 사용할 수 있게 해줌
  - 둘째줄:개발 도중 서버가 해당 컴포넌트만 업데이트하도록 해줌
```bash
$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
$ npm install --save-dev react-hot-loader webpack webpack-dev-server
```

### webpack 설정
- `webpack.config.js` 파일 생성 
  - [webpack.config.js](/project/webpack.config.js) 참고
  - `entry` 파일부터 시작하여 모든 require된 아이들은 재귀적으로 파고들어가 한 곳으로 모아준다. 배열도 가능
  - 이렇게 합친 파일들을 `output` 설정대로 모아 저장한다.
  - `devServer` : 개발서버 셋팅
    - `hot`: 수정될때마다 리로딩하겠다
    - `inline`: hot 리로딩에 필요한 webpack devServer를 bundle에 같이 넣는 것
    - `host`: 서버를 리슨할 주소
    - `port`: port
    - `contentBase`: index파일의 위치
  - `module`
    - loader를 통해 es2015, react형식을 일반 js형식으로 변환한다.
    - html, css 등 여러 loader가 많음
    
### 개발서버 실행 스크립트
- `package.json`에 다음과 같이 추가한다.
```
"scripts": {
    "dev-server": "webpack-dev-server"
},
```
- 다음과 같은 명령어로 실행할 수 있다.
```
$ npm run dev-server
```

### 부가 설치
```
$ npm install --save react-addons-update
```
- **immutability-helper**
  - setState로 객체나 배열을 조금더 쉽게 수정할 수 있게 도와준다.
  
```
import update from 'react-addons-update';

//원소 추가
this.setState({
  list: update(
    this.state.list,
    {
      $push: [newObj, newObj2]
    }
  )
});
//원소 삭제
this.setState({
  list: update(
    this.state.list,
    {
      $splice: [[index,1]]
    }
  )
});

//원소 수정
this.setState({
  list: update(
    this.state.list,
    {
      [index]: {
        field: {$set: "value"}
        field2: {$set: "value"}
      }
    }
  )
});
```

```
//원소 수정 예제
let object = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f {
      change_this_value: 0,
      this_stays_same: 6
    }
  }
}

let changed = update(object, {
  c: {
    f: {
      change_this_value: {
        $set: 5    
      }
    }
  }
}
```