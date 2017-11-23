class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            show: false
        };
    }
    
    _increase(){
        this.setState({
            number: this.state.number+1
        });
    }
    
    _show() {
        this.setState({
            show: true
        });
    }
    
    _unmount() {
        this.setState({
            number: 0,
            show: false
        });
    }
    
    render(){
        let component = (<Card number={this.state.number}/>);
        return  (
            <div>
                <Button caption="Show Card" customClass="green" onClick={this._show.bind(this)} />
                <Button caption="Increase Number" customClass="blue" onClick={this._increase.bind(this)}/>
                <Button caption="Unmount Card" customClass="red" onClick={this._unmount.bind(this)}/>
                {this.state.show ? component : ""}
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        let className = "ui button " + this.props.customClass;
        
        return (
            <div onClick={this.props.onClick}className={className}>{this.props.caption}</div>
            
        )
    }
}

class Card extends React.Component {
  	// 컴포넌트가 처음 만들어질 때 실행된다.
  	// 기본 state를 설정 할 수 있다.
    constructor(props){
        super(props);
        console.log("constructor");
    }
  	// 컴포넌트가 DOM 위에 만들어지기 전에 실행된다.
    componentWillMount(){
        console.log("componentWillMount");
    }
    // 첫 렌더링 마치고 실행된다.
  	// 이 안에서 다른 자바스크립트 프레임워크 연동 및
  	// setTimeout, setInterval 및 AJAX 사용
    componentDidMount(){
        console.log("componentDidMount");
    }
    // 컴포넌트가 props를 받을 때 실행된다.
  	// props에 따라 state를 업데이트 할 때 사용하면 유용하다.
  	// 이 안에서 setState를 해도 괜찮다.
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }
    // props/state가 변경되었을 때 리렌더링을 할지말지 정한다.
  	// 실제로 사용 할 때는 필요한 비교를 하고 값을 반환해야한다.
  	// 예: return nextProps.id !== this.props.id
  	// JSON.stringfy를 사용하여 여러 field를 편하게 비교
  	//return이 true면 업데이트를 이어가고 false면 여기서 멈춘다
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }
    //컴포넌트가 업데이트되기 직전 호출
  	// 여기서 setState를 절대 사용하지 말 것 (무한 루프에 빠짐)
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }
    //컴포넌트가 업데이트된 직후 호출
  	// 여기서 setState를 절대 사용하지 말 것 (무한 루프에 빠짐)
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }
    // 컴포넌트가 DOM에서 사라진 후 실행된다.
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
    render() {
        console.log("render");
        return (<div className="ui card">
        <div className="content">
            number: {this.props.number}
        </div>
    </div>)
}
}

ReactDOM.render(<App/>, document.getElementById('app'));