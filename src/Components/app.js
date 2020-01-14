import React from "react";
import {Component} from "react";

import Header from "./header";
import Main from "./pages/main";
import Contacts from "./pages/contacts";
import Footer from "./footer";
import Catalogue from "./pages/catalogue/";
import Useful from "./pages/useful";

export default class App extends Component {
	
	state = {
		filter: "main"
	};

	changePage = page => {
		this.setState({filter: page});
	};

	returnPages = page => {
		switch(page) {
			case "main":
				return <Main/>;
			case "contacts":
				return <Contacts/>;
			case "useful":
				return <Useful/>;
			case "catalogue":
				return <Catalogue/>;
			default:
				return <Main/>;
		}
	};

	render () {
		return (
			<div className="App">
				<Header	changePages={this.changePage}/>
					{this.returnPages(this.state.filter)}
				<Footer/>
			</div>
		);
	};
};
