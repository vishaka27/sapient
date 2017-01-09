import React, {Component} from 'react';

import "./item.css";
import Img from '../../components/Img';
import Div from '../../components/Div';
import A from '../../components/A';
import P from '../../components/P';


//Item Container
class Item extends Component {
	render() {
		return (
				<Div class="item-style">
					<Img src={this.props.src} alt="No image found" class="item-image"/>
					<A href={this.props.href} class="item-link">{this.props.linkname}</A>
					<P>{this.props.info}</P>
				</Div>
		)
	}
}

export default Item;

