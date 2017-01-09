import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import H1 from '../components/H1';
import A from '../components/A';
import Input from '../components/Input';
import Img from '../components/Img';
import Div from '../components/Div';
import Li from '../components/Li';
import Ul from '../components/Ul';
import HomePage from '../containers/HomePage';
class App extends Component {
	render() {
		return (
			<div>
			<HomePage />
			</div>
		);
	}
}
export default App;

ReactDOM.render(<App/>, document.getElementById('root'));

