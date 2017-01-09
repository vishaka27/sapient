import React,{Component} from 'react';


//P Tag
class P extends Component {
	render() {
		return (
			<p className={this.props.class}>{this.props.children} </p>
		)
	}
}
export default P;
