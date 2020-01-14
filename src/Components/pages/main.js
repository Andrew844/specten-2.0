import React from "react";
import {Component} from "react";

import "../css/main.css";

export default class Main extends Component {
	render () {
		return (
			<div className="main" id="main-page">
				<section className="welcome">
					<div className="description">
						<h4>Добро пожаловать</h4>
						<p>Наша компания <span>МиассСпецТэн</span> занимается поставками ТЭН по всей территории Российской Федерации, 
							а также в страны ближнего зарубежья.
							<br/>
							<br/>
							Нас не смущают дальние расстояния и объемы поставок, так как в МиассCпецТэн работают профессионалы
							с большим опытом и высоким уровнем ответственности. Работая оперативно, грамотно и надежно, <span>мы 
							поддерживаем партнерские отношения со многими предприятиями</span> – производителями промышленного оборудования, 
							находящиеся на территории России.
							</p>
					</div>
					<div className="application-form">
						<h4>Отправить заявку</h4>
						<div  className="input-field">
							<input id="email" type="text" required={true}/>
							<label htmlFor="email">
								<span className="content-name">Введите email</span>
							</label>
        		</div>
						<div  className="input-field">
							<input id="phone" type="text" required={true}/>
							<label htmlFor="phone">
								<span className="content-name">Введите номер телефона</span>
							</label>
        		</div>
						<div  className="input-field">
							<input id="phone" type="text" required={true}/>
							<label htmlFor="phone">
								<span className="content-name">Задайте ваш вопрос</span>
							</label>
        		</div>
						<button type="button" className="btn">Отправить</button>
					</div>
				</section>
				
				<section className="benefits">
					<h4>Наши преимущества</h4>
					<div className="benefits-cards">
						<div className="benefit-card">
							<h5>Высокое качество</h5>
							<i className="far fa-check-square"/>
							<p>Мы уверены в качестве поставляемого товара и в соответствии его цены реальности.</p>
						</div>
						<div className="benefit-card">
							<h5>Гибкая система скидок</h5>
							<i className="far fa-check-square"/>
							<p>	Для постоянных клиентов и оптовых покупателей у нас действует гибкая система скидок, a также
							проводятся акции.</p>						
						</div>
						<div className="benefit-card">
							<h5>Доставка</h5>
							<i className="far fa-check-square"/>
							<p>МиассCпецТэн  сможет доставить приобретенную
							Вами продукцию в любой транспортный узел, находящийся в Миассе.</p>
						</div>
						<div className="benefit-card">
							<h5>Консультация и отладка</h5>
							<i className="far fa-check-square"/>
							<p>Мы занимаемся не только поставкой оборудования, но и осуществляем консультационную помощь
							в его установке, наладке.</p>
						</div>
					</div>
				</section>

				<section className="heating">
					<h4>У нас широкий ассортимент</h4>

					<div className="collapsible-lists">

						<div className="accordion heating-elements" id="heating-elements">
							<h5>Нагревательных элементов</h5>
							
							<div className="card">
								<div className="card-header" id="air-heating-heading">
										<button className="btn" type="button" data-toggle="collapse" data-target="#air-heating" 
														aria-expanded="true" aria-controls="air-heating">
											Для нагрева воздуха
										</button>
								</div>
								<div id="air-heating" className="collapse" aria-labelledby="air-heating-heading" data-parent="#heating-elements">
									<div className="card-body">
										ТЭН, ТЭНР, ТЭНП									
									</div>
								</div>
							</div>
							
							<div className="card">
								<div className="card-header" id="water-heating-header">
										<button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#water-heating" 
														aria-expanded="false" aria-controls="water-heating">
											Для нагрева воды
										</button>
								</div>
								<div id="water-heating" className="collapse" aria-labelledby="water-heating-header" data-parent="#heating-elements">
									<div className="card-body">
										ТЭН, БЭВ, ТЭНП, СЭВ									
									</div>
								</div>
							</div>
							
							<div className="card">
								<div className="card-header" id="oils-heating-header">
										<button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#oils-heating" 
														aria-expanded="false" aria-controls="oils-heating">
											Для нагрева масел
										</button>
								</div>
								<div id="oils-heating" className="collapse" aria-labelledby="oils-heating-header" data-parent="#heating-elements">
									<div className="card-body">
										ТЭН, ТЭНП, БЭВ, СЭМ									
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-header" id="contact-heating-header">
										<button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#contact-heating" 
														aria-expanded="false" aria-controls="contact-heating">
											Для контактного нагрева
										</button>
								</div>
								<div id="contact-heating" className="collapse" aria-labelledby="contact-heating-header" data-parent="#heating-elements">
									<div className="card-body">
										плоские нагреватели, кольцевые нагреватели, ТЭНП, ЭНГЛ
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-header" id="medicial-equipment-header">
										<button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#medicial-equipment" 
														aria-expanded="false" aria-controls="medicial-equipment">
											Для медицинского оборудования
										</button>
								</div>
								<div id="medicial-equipment" className="collapse" aria-labelledby="medicial-equipment-header" data-parent="#heating-elements">
									<div className="card-body">
										ТЭНы для стерилизаторов и дистилляторов
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-header" id="food-equipment-header">
										<button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#food-equipment" 
														aria-expanded="false" aria-controls="food-equipment">
											Для пищевого оборудования
										</button>
								</div>
								<div id="food-equipment" className="collapse" aria-labelledby="food-equipment-header" data-parent="#heating-elements">
									<div className="card-body">
										электроконфорки, ТЭНы для варочных котлов
									</div>
								</div>
							</div>

						</div>

						<div className="accordion heating-equipment" id="heating-equipment">
							<h5>Промышленных и бытовых нагревательных приборов</h5>

							<div className="card">
								<div className="card-header" id="air-heating-heading-equipment">
										<button className="btn" type="button" data-toggle="collapse" data-target="#air-heating-equipment" 
														aria-expanded="true" aria-controls="air-heating-equipment">
											Для нагрева воздуха
										</button>
								</div>
								<div id="air-heating-equipment" className="collapse" aria-labelledby="air-heating-heading-equipment" data-parent="#heating-equipment">
									<div className="card-body">
										тепловые пушки, калориферы, ПЭТ, конвекторы								
									</div>
								</div>
							</div>
							
							<div className="card">
								<div className="card-header" id="water-heating-heading-equipment">
										<button className="btn" type="button" data-toggle="collapse" data-target="#water-heating-equipment" 
														aria-expanded="true" aria-controls="water-heating">
											Для нагрева воды
										</button>
								</div>
								<div id="water-heating-equipment" className="collapse" aria-labelledby="water-heating-heading-equipment" data-parent="#heating-equipment">
									<div className="card-body">
										электрокотлы, ЭВНКА, ЭВПП									
									</div>
								</div>
							</div>
							
							<div className="card">
								<div className="card-header" id="sauna-heading">
										<button className="btn" type="button" data-toggle="collapse" data-target="#sauna" 
														aria-expanded="true" aria-controls="sauna">
											Для сауны
										</button>
								</div>
								<div id="sauna" className="collapse" aria-labelledby="sauna-heading" data-parent="#heating-equipment">
									<div className="card-body">
										электрокаменки								
									</div>
								</div>
							</div>
							
							<div className="card">
								<div className="card-header" id="home-heating-heading">
										<button className="btn" type="button" data-toggle="collapse" data-target="#home-heating" 
														aria-expanded="true" aria-controls="home-heating">
											Для обогрева дома, промышленного помещения
										</button>
								</div>
								<div id="home-heating" className="collapse" aria-labelledby="home-heating-heading" data-parent="#heating-equipment">
									<div className="card-body">
										конвекторы, калориферы, тепловые пушки, ЭВПМ, тепловые завесы, ПЭТ									
									</div>
								</div>
							</div>
				
						</div>
					</div>
				</section>
			</div>
		);
	};
};