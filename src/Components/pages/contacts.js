import React from "react";

import "../css/contacts.css";

export default function Contacts () {
	return (
		<div className="contacts-page" id="contacts-page">
			<div className="description">
				<p>
				ООО "МиассСпецТэн"
				<br/>
				Телефоны:
				<span> 8 908 82603 01, (3513) 59-17-67</span>
				<br/>
				456318 Челябинская обл., г. Миасс
				<br/>
				e-mail: <a href="mailto:spetsten@yandex.ru" rel="noopener noreferrer"
									 target="_blank">spetsten@yandex.ru</a>
				</p>
			</div>
			<div className="application-form">
				<h4>Вы можете связаться с нами через форму:</h4>
				<div  className="input-field">
					<input id="email" type="text" required={true}/>
					<label className="label" htmlFor="email">
						<span className="content-name">Введите email</span>
					</label>
        </div>
				<div  className="input-field">
					<input id="phone" type="text" required={true}/>
					<label className="label" htmlFor="phone">
						<span className="content-name">Введите номер телефона</span>
					</label>
        </div>
				<div  className="input-field">
					<input id="phone" type="text" required={true}/>
					<label className="label" htmlFor="phone">
						<span className="content-name">Задайте ваш вопрос</span>
					</label>
        </div>
				<button type="button" className="btn btn-primary">Отправить</button>
			</div>
		</div>
	);
};