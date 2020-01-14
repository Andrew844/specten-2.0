import React from "react";

import "./css/header.css";

export default function Header (props) {

	const toggleClass = e => {
		let buttons = document.querySelectorAll(".links button");
		buttons.forEach(btn => {
			btn.className = btn.className.split(" ")[0];
		});
		e.target ? e.target.className += " clicked" : e.className += " clicked";
	};

	return (
		<div className="header">
			<div className="logo"
				title="На главную"
				onClick={() => {
					props.changePages("main");
					toggleClass(document.querySelector(".links button.main"));
				}}>
				<h3>МиассСпецТэн</h3>
			</div>
			<div className="links">
				<button className="main clicked"
					 onClick={e => {
						 props.changePages("main");
						 toggleClass(e);
						 }}>Главная</button>
				<button className="catalogue"
					 onClick={e => {
						props.changePages("catalogue");
						toggleClass(e)
						}}>Каталог</button>
				<button className="useful"
					 onClick={e => {
					 	props.changePages("useful");
					 	toggleClass(e)
					 	}}>Полезное</button>
				<button className="contacts"
					 onClick={e => {
						 props.changePages("contacts");
						 toggleClass(e)
						 }}>Контакты</button>
			</div>
			<div className="phones"
					 title="Контакты"
					 onClick={() => {
					 	props.changePages("contacts");
						toggleClass(document.querySelector(".links button.contacts"));
					 }}>
				<p>	8 908 82603 01 <br/>
						(3513) 59-17-67</p>
			</div>
		</div>
	);
};