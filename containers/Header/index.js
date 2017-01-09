import React, {Component} from 'react';
import './header.css';

import Input from '../../components/Input';
import Img from '../../components/Img';
import H1 from '../../components/H1';
import Button from '../../components/Button';
import Div from '../../components/Div';
import Span from '../../components/Span';

//Header Container
class Header extends Component {
	render() {
		return (
			<Div>
				<Div class="header-style">
					<H1 class="h1-style">MARVELS</H1>
					<Img src="../images/marvel.jpg" alt="no image found" class="image-style"/>
					<Span class="span-style">
						<Input type='text' class="input-style"/>
						<Button type='submit' class="button-style">Search</Button>
					</Span>
				</Div>
				</Div>
		)
	}
}

export default Header;

