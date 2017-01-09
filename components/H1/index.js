import React, {Component} from 'react';


//H1 Tag
class H1 extends Component {
	render() {
		return (
			<h1 className={this.props.class}>{this.props.children}</h1>
		)
	}
}

export default H1;