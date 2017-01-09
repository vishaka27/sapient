import React, {Component} from 'react';
import './sidebar.css';

import Img from '../../components/Img';
import SelectTag from '../../components/Select';
import OptionTag from '../../components/Option';
import Div from '../../components/Div';
import A from '../../components/A';
import Ul from '../../components/Ul';
import Li from '../../components/Li';


//SideBar Container
class SideBar extends Component {
	render() {
		return (

			<Div class="sidebar-style">
			<Div class="sideimage-style">
				<Img src="../../images/gradient.jpg" alt="No image found" class="image-style-sidebar"/>
			<Ul class="movie-list-style">
			<Li>
			<A href="https://en.wikipedia.org/wiki/List_of_films_based_on_Marvel_Comics">MARVEL FILMS</A>
			</Li>
			<Li>
			<A href="https://en.wikipedia.org/wiki/List_of_Marvel_Comics_characters">MARVEL CHARACTERS
			</A>
			</Li>
			<Li>
			Search for Movies by Year
			</Li>
			<Li>
			<SelectTag>
				<OptionTag>1991-1995</OptionTag>
				<OptionTag>1996-2000</OptionTag>
				<OptionTag>2001-2005</OptionTag>
				<OptionTag>2006-2010</OptionTag>
				<OptionTag>2011-2015</OptionTag>
				<OptionTag>2016-Present</OptionTag>
			</SelectTag>
			</Li>
			</Ul>
			</Div>
			</Div>
			
			)
	}
}

export default SideBar;