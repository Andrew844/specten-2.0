import React, {Component} from "react";

import "../css/catalogue.css";
import air from "../../img/catalogue/air.jpg";
import water from "../../img/catalogue/water.jpg";
import finned from "../../img/catalogue/finned.jpg";
import noPhoto from "../../img/catalogue/no-photo.jpg";

import airModal from "../../img/catalogue/modals/air-modal.jpg";
import waterModal from "../../img/catalogue/modals/water-modal.jpg";
import finnedOne from "../../img/catalogue/modals/finned-1.jpg";
import finnedTwo from "../../img/catalogue/modals/finned-2.jpg";
import medicineTan from "../../img/catalogue/modals/medician-tan.jpg";

export default class Catalogue extends Component {

	state = {
		cards: {
			air: {
				cardHeader: "Воздушные ТЭНы",
				cardImg: air,
				cardDescription: `Нагревательные элементы – ТЭН для воздуха и других газообразных 
													сред изготавливаются по стандартам ГОСТ 13268-88. Классификация и маркировка
													воздушных ТЭНов зависит от состояния нагреваемой среды и материала изготовления`,
				dataTarget: "#air-heaters"
			},
			water: {
				cardHeader: "Водяные ТЭНы",
				cardImg: water,
				cardDescription: `Главным предназначением водяного ТЭНа является преобразования 
													электрической энергии в тепловую в водной среде. В основном он 
													применяется в бытовых условиях для нагрева и кипячения воды, также 
													в промышленности для нагрева слабых растворов щелочей и кислот.`,
				dataTarget: "#water-heaters"
			},
			finned: {
				cardHeader: "Оребрённые ТЭНы",
				cardImg: finned,
				cardDescription: `Оребренные ТЭНы изготавливаются производителями из нержавеющей стали, что предотвращает 
													систему от быстрого старения и поломки. Оребрение создается лентой, либо накатным 
													способом алюминием по спирали.`,
				dataTarget: "#finned-heaters"

			},
			medician: {
				cardHeader: "Медицинские ТЕНы",
				cardImg: noPhoto,
				cardDescription: `ТЭНы специального вида помимо использования в быту или промышленности, также 
													употребляется в медицине. 
													Это дистилляторы, парогенераторы и стерилизаторы. Они очень широко применяются 
													в медицинских учреждениях.`,
				dataTarget: "#medicine-heaters"
			},
			tanb: {
				cardHeader: "ТЭНБ",
				cardImg: noPhoto,
				cardDescription: `ТЭНБ – блоки трубчатых электронагревателей. Состоят они из одного или 
													нескольких ТЭНов, которые герметично припаяны на общем фланце. На их 
													расположение влияет рабочее давление среды.`,
				dataTarget: "#tanb"

			},
			electricFurnace: {
				cardHeader: "Электропечи Пэт",
				cardImg: noPhoto,
				cardDescription: `Электропечи Пэт – это оборудование, которое причисляют к отопительному. 
													Печи достаточно компактны, очень удобны в использовании. Область их применения в основном 
													при отоплении строительных бытовок, башенных кранов, электротранспорта и некоторых 
													помещений малого размера.`,
				dataTarget: "#electric-furnace"
			},
			electricBoiler: {
				cardHeader: "Электрокотлы",
				cardImg: noPhoto,
				cardDescription: `Электрокотлы используются в виде дополнительного или резервного 
													источника обогрева систем водяного отопления жилых или производственных 
													помещений, зданий, которые имеют открытую систему отопления.`,
				dataTarget: "#electric-boilers"
			},
			electricConvectors: {
				cardHeader: "Электроконвекторы",
				cardImg: noPhoto,
				cardDescription: `Конвекторы электрические Элкон ЭВНС имеют тонкий корпус, который 
													покрыт полимерным покрытием белого цвета. По этой причине он вполне
													гармонично впишется в интерьер любого помещения и будет служить как
													основной источник отопления.`,
				dataTarget: "#electric-convectors"
			},
			calorifer: {
				cardHeader: "Калориферы",
				cardImg: noPhoto,
				cardDescription: `Если у Вас есть необходимость дополнительно обогревать 
													бытовое или промышленное помещение, то обратите внимание на электрокалориферы.
													Электрокалориферы – это уникальные универсальные приборы отопления. 
													Наше предприятие готово поставлять калориферы различных марок и модификаций. `,
				dataTarget: "#electric-calorifers"
			
			}
		},
		searchQuery: ""
	};

	changeSearch = e => {
		this.setState({searchQuery: e.target.value});
	};

	search(cards, query) {
		if (query.length === 0) return cards;

		return Object.values(cards).filter(card => {
				return card.cardHeader.toLowerCase().indexOf(query.toLowerCase()) > -1;
		});
	}

	parseCards = cards => {
		let parsedCards = [];
	
		Object.values(cards).forEach(card => {
			let outputCard = (
				<div className="card" key={card.cardHeader} data-toggle="modal" data-target={card.dataTarget}>
					<div className="card-header">
						<h5>{card.cardHeader}</h5>
					</div>
					<div className="card-img">
						<img src={card.cardImg} alt={card.cardHeader}/>
					</div>
					<div className="card-description">
						<p>{card.cardDescription}</p>
					</div>
				</div>
			);
			parsedCards.push(outputCard);
		});
	
		return parsedCards;
	};

	render () {

		const sortedCards = this.search(this.state.cards, this.state.searchQuery);
		const visibleCards = this.parseCards(sortedCards);

		return (
			<div className="catalogue-page" id="catalogue-page">
				<div className="section-header">
					<h4>Каталог</h4>
				</div>
				<div className="search-panel">
					<div  className="input-field">
						<input id="search" type="text" required={true}
									 onChange={this.changeSearch}/>
						<label htmlFor="search">
							<span className="content-name">Введите запрос</span>
						</label>
					</div>
				</div>
				<div className="cards">
					{visibleCards}
				</div>

			{/* Modals */}
			
		<div className="modal fade" id="air-heaters" tabIndex="-1" role="dialog" aria-labelledby="air-heaters" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">ТЭНы воздушные</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
							Маркировка воздушных ТЭНов.
							<p>Нагревательные элементы – ТЭН для воздуха и других газообразных сред изготавливаются 
							по стандартам ГОСТ 13268-88. Классификация и маркировка воздушных ТЭНов зависит от 
							состояния нагреваемой среды и материала изготовления:</p>
							
							- Спокойный воздух.
							<ul>
								<li>O – материал изготовления: углеродистая сталь;</li>
								<li>К - материал изготовления: нержавеющая сталь;</li>
							</ul>

							- Движущийся воздух.
							<ul>
								<li>S – материал изготовления: углеродистая сталь;</li>
								<li>Т – материал изготовления: нержавеющая сталь;</li>
							</ul>

								<p>Кроме маркировки, зависящей от среды и типа стали, воздушные ТЭНы могут быть 
								оребренными лентами из стали, или дополнительной накаткой из алюминия. А так же 
								иметь разный профиль изгиба и крепежную арматуру.</p>
					
								<p>ТЭНы воздушные применяются в:</p>
								<ul>
									<li>Тепловых завесах</li>
									<li>Электрокалориферах</li>
									<li>Тепловых пушках</li>
									<li>Сушильных камерах</li>
									<li>В саунах</li>
									<li>В других нагревательных установках на воздухообмене.</li>
								</ul>
    
							<h5>Максимальные мощности для воздушных ТЭНов</h5>
							<p>Мощность ТЭН зависит от длины и диаметра нагревательной трубки. Например, при диаметре 13 мм. 
								мощность ТЭН выше в 1,3 раза, чем для нагревательного элемента с диаметром 10 мм. той же длины.</p>
								
							<img src={airModal} alt="documentation"/>

							<p>Вы можетe обратиться за помощью к нашим менеджерам для выбора оптимальной конфигурации ТЭН.</p>
						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="water-heaters" tabIndex="-1" role="dialog" aria-labelledby="water-heaters" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">ТЭНы водяные</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
							<p>Главным предназначением водяного ТЭНа является преобразования электрической энергии в 
								тепловую в водной среде. В основном он применяется в бытовых условиях для нагрева и 
								кипячения воды, также в промышленности для нагрева слабых растворов щелочей и кислот.</p> 
							
							<p>При нагревании важно, чтобы среда поменяла своих свойств, не испортилось или не загрязнилась 
								жидкость и оборудование, как это часто происходит в бытовых стиральных машинах. Поэтому мы 
								рекомендуем  использовать водяные ТЭНы из нержавеющей стали, углеродистой стали или меди.</p>

							<p>Крепежная система производится из такого же состава. Таким образом, поступающая в трубы 
								и бак нагреваемая жидкость не портиться. Именно такие виды водяных ТЭНов считаются 
								оптимальным вариантом для обогрева воды или другой жидкости при минимальных затратах 
								электроэнергии. При использовании ТЭН из нержавеющей стали, меди и углеродистой стали 
								образовании накипи и осадка минимальны.</p>
							
							<h5>Максимальные мощности для водяных ТЭНов</h5>

							<p style={{textAlign: "center"}}>(диаметр трубки 13мм,  при d=10мм мощность уменьшается в 1,3 раза) :</p>
							
							<img src={waterModal} alt="documentation"/>

							<p>Если на складе в момент не окажется необходимого вида, то мы поставим Вам 
								необходимое оборудование в течение 10 дней.</p>
						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="finned-heaters" tabIndex="-1" role="dialog" aria-labelledby="finned-heaters" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Оребренные ТЭНы</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
							<img src={finned} alt="documentation"/>

							<p>Данный вид ТЭН представляет собой трубчатые электронагреватели, которые 
								оребренны определенной лентой.</p>

							<img src={finnedOne} alt="documentation"/>
							<p style={{textAlign: "center"}}>L – развернутая длина; Lo – длина оребрения; D – диаметр оболочки; 
							Do – диаметр оребрения; h – шаг оребрения.</p>

							<p>Оребренные ТЭНы используются для работы в калориферах. 
								Или же очень часто в установках для интенсивного нагрева движущихся газовых сред.</p>

							<h5>Возникает вопрос: чем же отличаются обычные ТЭНы от оребренных?</h5>

							<p>Само оребрение необходимо для увеличения теплоотдачи ТЭН, 
								которые функционируют в воздушной среде.</p>

							<p>Оребренные ТЭНы изготавливаются производителями из нержавеющей стали, что предотвращает 
								систему от быстрого старения и поломки. Оребрение создается лентой, либо накатным способом 
								алюминием по спирали. Такие ТЭНы работают под обдувом. А скорость потока рабочей среды 
								составляет не менее 6 м/с. Помимо этого их можно использовать также и без обдува.</p>
							
							<img src={finnedTwo} alt="documentation"/>

							<p>ТЭНР выдерживают 3000 часов беспрерывной работы. Когда вы получаете новые ТЭНР, то лучше 
								всего подключить их с нагрузкой в 1/3 номинального напряжения, для того чтобы просушить 
								ТЭНР ( примерно 1-2 часа).</p>
						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="medicine-heaters" tabIndex="-1" role="dialog" aria-labelledby="medicine-heaters" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">ТЕНы медицинские</h5>
						<button type="btn" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
							<img src={finned} alt="documentation"/>

							<p>ТЭНы специального вида помимо использования в быту или промышленности, 
								также употребляется в медицине.</p>

							<p><b>Это дистилляторы, парогенераторы и стерилизаторы. 
								Они очень широко применяются в медицинских учреждениях. </b></p>

							<p>Наша компания предлагает высоко качественные ТЭНы для медицинского оборудования.</p>
							
							<p>Такие нагреватели выполнены в соответствии со всеми требованиями завода изготовителя и 
								основными рекомендациями (предпочтениями) потребителей. Произведены ТЭНы из нержавеющей стали, 
								что повышает их качество и надежность. А все трубы нагревателя цельные, что продлевает 
								срок их службы.</p>

							<p>Помимо этого они очень стойки к возникновению коррозии за счет использования латуни. 
								Выбирая ТЕНы медицинские, для медицинского оборудования помимо внешнего вида и мощности, 
								очень важно обратить внимание на год выпуска вашего оборудования.</p>


								<div  className="accordion" id="medicine-tans">
									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button" type="button" data-toggle="collapse" 
												data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													ТЭН 100.01.000 (медицинские)
												</button>
											</h2>
										</div>
										<div id="collapseOne"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<img src={medicineTan} alt="documentation"/>
												<p><b>Технические характеристики:</b> <br/>
														Мощность (кВт): 0,5 <br/>
														Напряжение (В): 220 <br/>
														Материал: сталь <br/>
														Среда применения: воздух <br/>
														Аналогичные наименования: ТЭН стальной 500Вт, 220В, разв.длина 1000мм  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
													ТЭН 100.01.013
												</button>
											</h2>
										</div>
										<div id="collapseTwo"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 1 <br/>
															Напряжение (В): 220 <br/>
															Материал: сталь <br/>
															Диаметр оболочки (мм): 13 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: воздух <br/>
															Аналогичные наименования: ТЭН 100 А13/1,0-S-220 R40 сталь <br/>
															Применяется в медтехнике: ШСС</p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
													ТЭН 120.22.000 (2,5кВт, 220В, медь, вода)
												</button>
											</h2>
										</div>
										<div id="collapseThree"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 2,5 <br/>
															Напряжение (В): 220 <br/>
															Материал: медь <br/>
															Габаритные размеры (мм): длина 617 <br/>
															Масса (кг): 0,76 <br/>
															Диаметр оболочки (мм): 12 <br/>
															Резьба штуцеров (втулок для установки): М18х1,5 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: ТЭН 120.22.000 медный 2500Вт разв. 
															Длина 1200мм в комп. (гайка, шайба, паронит) / 120.01.000 <br/>
															Применяется в медтехнике: различное медоборудование  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
													ТЭН 125.05.000 (2,7кВт, 220В, н/сталь, вода)
												</button>
											</h2>
										</div>
										<div id="collapseFour"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 2,7 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Габаритные размеры (мм): 192х50х37 <br/>
															Масса (кг): 0,51 <br/>
															Диаметр оболочки (мм): 8 <br/>
															Резьба штуцеров (втулок для установки): М14х1,5 <br/>
															Резьба контактных стержней: М3 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: ТЭН125.05.000 / ТЭН 62 А13/2,7 Р-220 Ш14/1,5 
															с гайкой нерж / ТЭН 125 А8/2,7-Р-220 R30 Ш14/1,5 нерж. <br/>
															Применяется в медтехнике: АЭ-10 (с фев. 2000г.)</p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
													ТЭН 160.01.000 (4кВт, 220В, н/сталь, вода)												
												</button>
											</h2>
										</div>
										<div id="collapseFive"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 4 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Габаритные размеры (мм): 294х57х46 <br/>
															Масса (кг): 0,61 <br/>
															Диаметр оболочки (мм): 8 <br/>
															Резьба штуцеров (втулок для установки): М14х1,5 <br/>
															Резьба контактных стержней: М3 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: ТЭН 160 А8/4,0-Р-220 R30 I14/1,5 нерж <br/>
															Примечание: Возможна поставка аналогичного медного ТЭНа <br/>
															Применяется в медтехнике: ДЭ-60 (с июля 2001г.) </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
													ТЭН 160.02.000 (3кВт, 220В, н/сталь, вода)												
												</button>
											</h2>
										</div>
										<div id="collapseSix"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 3 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Габаритные размеры (мм): 192х57х38 <br/>
															Масса (кг): 0,51 <br/>
															Диаметр оболочки (мм): 8 <br/>
															Резьба штуцеров (втулок для установки): М14х1,5 <br/>
															Резьба контактных стержней: М3 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: ТЭН 160 А8/4,0-Р-220 R30 I14/1,5 нерж <br/>
															Примечание: Возможна поставка аналогичного медного ТЭНа <br/>
															Применяется в медтехнике: АЭ-25 (с фев. 2001г.)  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
													ТЭН 170.07.000 (6,3кВт, 220В, н/сталь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseSeven"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 6,3 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Габаритные размеры (мм): длина 730 <br/>
															Масса (кг): 1,5 <br/>
															Диаметр оболочки (мм): 16 <br/>
															Резьба штуцеров (втулок для установки): М24х2 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: Электронагреватель об. ТЭН170.07.000 <br/>
															Применяется в медтехнике: ГП-400, ГП-560, ГПД-400, ГПД-560, ГПД-700, ЦСУ-1000 </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
													ТЭН 2.983.658.001 (1,8кВт, 220В, н/сталь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseEight"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 1,8 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Диаметр оболочки (мм): 10 <br/>
															Резьба штуцеров (втулок для установки): М18х1,5 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: ТЭН 78 А10/1,8-Р-220 R25 Ш18/1,5нерж <br/>
															Применяется в медтехнике: ДЭ-4 </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
													ТЭН 2.983.695 (2,5кВт, 220В, н/сталь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseNine"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 2,5 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Диаметр оболочки (мм): 10 <br/>
															Резьба штуцеров (втулок для установки): М18х1,5 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: 2983695 Эл.нагреватель ДЭ-25 /
															 ТЭН 80А10/2-Р220-R25(нерж) / ТЭН 78 А10/2,5-J-220 R25 Ш18/1,5 нерж <br/>
															Применяется в медтехнике: ДЭ-25 </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
													ТЭН 31.02.000 (0,32кВт, 110В, сталь, воздух)											
												</button>
											</h2>
										</div>
										<div id="collapseTen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 0,32 <br/>
															Напряжение (В): 110 <br/>
															Материал: сталь <br/>
															Диаметр оболочки (мм): 13 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: воздух <br/>
															Аналогичные наименования: ТЭН 78.34.000.03 стальной для воздушных 
															стерилизаторов 320Вт, 110В, разв.длина 315мм <br/>
															Применяется в медтехнике: ГП-20 </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
													ТЭН 100.01.001 (0,8кВт, 220В, сталь, вода)										
												</button>
											</h2>
										</div>
										<div id="collapseEleven"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 0,8 <br/>
															Напряжение (В): 220 <br/>
															Материал: сталь <br/>
															Диаметр оболочки (мм): 13 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: ТЭН 100 А10/0,8-S-220  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseTwelve" aria-expanded="true" aria-controls="collapseTwelve">
													ТЭН 100.13.000 (1,6кВт, 380В, сталь, воздух)											
												</button>
											</h2>
										</div>
										<div id="collapseTwelve"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 1,6 <br/>
															Напряжение (В): 380 <br/>
															Материал: сталь <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: воздух <br/>
															Аналогичные наименования: ТЭН стальной 1600 Вт, 380 В, разв.длина 1000 мм</p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseThirteen" aria-expanded="true" aria-controls="collapseTen">
													ТЭН 123.01.000 (1,6кВт, 220В, сталь, воздух)											
												</button>
											</h2>
										</div>
										<div id="collapseThirteen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 1,6 <br/>
															Напряжение (В): 220 <br/>
															Материал: сталь <br/>
															Диаметр оболочки (мм): 13 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: воздух <br/>
															Аналогичные наименования: ТЭН 78.34.000 стальной для воздушных 
															стерилизаторов 1600 Вт, 220В, разв.длина 1230мм / ТЭН 123 А13/1,6S-220 R-40 сталь <br/>
															Применяется в медтехнике: ШСС  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseFourteen" aria-expanded="true" aria-controls="collapseFourteen">
													ТЭН 153 В13/2,2 (2,2кВт, 220В, сталь, воздух)											
												</button>
											</h2>
										</div>
										<div id="collapseFourteen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 2,2 <br/>
															Напряжение (В): 220 <br/>
															Материал: сталь <br/>
															Среда применения: воздух <br/>
															Аналогичные наименования: ТЭН стальной 2200 Вт, 220 В, разв.длина 1530 мм</p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseFifteen" aria-expanded="true" aria-controls="collapseFifteen">
													ТЭН 160.01.001 (4кВт, 220В, медь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseFifteen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Развернутая длина (мм): 1600 <br/>
															Мощность (кВт): 4 <br/>
															Напряжение (В): 220 <br/>
															Материал: медь <br/>
															Масса (кг): 0,61 <br/>
															Диаметр оболочки (мм): 8 <br/>
															Резьба штуцеров (втулок для установки): М14х1,5 <br/>
															Резьба контактных стержней: М6 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: Тэн медный 57.160.040 для ДЭ-60 разв. 
															длина 1600 мм, 4000 Вт, 220 В <br/>
															Примечание: Возможна поставка аналогичного ТЭНа из нерж. стали <br/>
															Применяется в медтехнике: ДЭ-60 (с июля 2001г.) </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseSixteen" aria-expanded="true" aria-controls="collapseSixteen">
													ТЭН 160.02.001 (3кВт, 220В, медь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseSixteen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 3 <br/>
															Напряжение (В): 220 <br/>
															Материал: медь <br/>
															Габаритные размеры (мм): 192х57х38 <br/>
															Масса (кг): 0,51 <br/>
															Диаметр оболочки (мм): 8 <br/>
															Резьба штуцеров (втулок для установки): М14х1,5 <br/>
															Резьба контактных стержней: М6 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: Тэн медный 57.160.030 для АЭ-25 разв. длина 1600 мм, 3000 Вт, 220 В <br/>
															Примечание: Возможна поставка аналогичного ТЭНа из нерж. стали <br/>
															Применяется в медтехнике: АЭ-25 (с фев. 2001г.)  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseSeventeen" aria-expanded="true" aria-controls="collapseSeventeen">
													ТЭН 2.983.537 (2,75кВт, 220В, н/сталь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseSeventeen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 2,75 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Диаметр оболочки (мм): 10 <br/>
															Резьба штуцеров (втулок для установки): М18х1,5 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: 2983537 Эл.нагреватель ДЭ-25 / ТЭН 78 А10/2,75-J-220 R25 Ш18/1,5 нерж 
															/ ТЭН 71 А10/2,5-Р-220 <br/>
															Применяется в медтехнике: ДЭ-25 (СПб)  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseEighteen" aria-expanded="true" aria-controls="collapseEighteen">
													ТЭН 2.983.690 (2,5кВт, 220В, н/сталь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseEighteen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 2,5 <br/>
															Напряжение (В): 220 <br/>
															Материал: н/сталь <br/>
															Диаметр оболочки (мм): 10 <br/>
															Резьба штуцеров (втулок для установки): М18х1,5 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: 2983690 Эл.нагреватель ДЭ-10 / ТЭН 78 А10/2,5-Р-220 R25 Ш18/1,5 нерж <br/>
															Применяется в медтехнике: ДЭ-10 (СПб)  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseNineteen" aria-expanded="true" aria-controls="collapseNineteen">
													ТЭН 31.01.000 (0,4кВт, 110В, сталь, воздух)											
												</button>
											</h2>
										</div>
										<div id="collapseNineteen"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 0,4 <br/>
															Напряжение (В): 110 <br/>
															Материал: сталь <br/>
															Диаметр оболочки (мм): 13 <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: воздух <br/>
															Аналогичные наименования: ТЭН 78.34.000.03 стальной для воздушных стерилизаторов 
															400Вт, 110В, разв.длина 315мм / ТЭН 32 А13/0,4-S-110 R-30 Ф-2 сталь <br/>
															Применяется в медтехнике: ГП-20  </p>
											</div>
										</div>
									</div>

									<div  className="card">
										<div  className="card-header" id="headingOne">
											<h2  className="mb-0">
												<button  className="button  " type="button" data-toggle="collapse" 
												data-target="#collapseTwenty" aria-expanded="true" aria-controls="collapseTwenty">
													ТЭН 60.05.000 (1,25кВт, 220В, медь, вода)											
												</button>
											</h2>
										</div>
										<div id="collapseTwenty"  className="collapse" aria-labelledby="headingOne" 
										data-parent="#medicine-tans">
											<div  className="card-body">
												<p><b>Технические характеристики:</b> <br/>
															Мощность (кВт): 1,25 <br/>
															Напряжение (В): 220 <br/>
															Материал: медь <br/>
															Габаритные размеры (мм): 300х160х36 <br/>
															Масса (кг): 0,5 <br/>
															Диаметр оболочки (мм): 12 <br/>
															Резьба штуцеров (втулок для установки): Пластина <br/>
															Резьба контактных стержней: М4 <br/>
															Среда применения: вода <br/>
															Аналогичные наименования: электронагреватель тэн60.05.000 <br/>
															Применяется в медтехнике: ВК-30, ВКУ-50 </p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="tanb" tabIndex="-1" role="dialog" aria-labelledby="tanb" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">ТЭНБ</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
							<p style={{color: "red"}}>Если в Вашем оборудовании вышли из строя блоки электронагревателей ТЭНБ, мы с радостью 
								предложим как стандартные ТЭНБ, так и изготовленные под заказ по опросному листу, 
								либо по эскизу. </p> 
							
								<p>Ниже вы можете ознакомиться с ассортиментом серийных блоков и краткой технической информацией о них.</p>
								<p>ТЭНБ – блоки трубчатых электронагревателей. Состоят они из одного или нескольких ТЭНов, которые 
									герметично припаяны на общем фланце. На их расположение влияет рабочее давление среды.</p>
								<p>Фланец изготовлен из различных высокопрочных и качественных материалов, таких как 
									нержавеющая сталь, латунь, сталь. Прикрепляются они в установки шпильками, болтами, резьбой, прижимными пластинами.</p>
								<p>В основном применяются для нагрева слабых растворов щелочей и кислот, воды и масла в 
									котлах и в других бытовых и промышленных установках.</p>

								<h5>Выделяют определенные условия эксплуатации ТЭНБ.</h5>
								<p>Одной из них является температурный режим – не более 300°С. Также 
									необходимо учитывать влажность воздуха до 65% при температуре 20°С.</p>
								<p>Окружающая среда должна быть невзрывоопасная, с допустимым содержанием различных примесей не превышающие ГОСТ 12.1.005-88.</p>
								<p>Таким образом, подобные ТЭНБ прекрасно подходят для обогрева различных жидкостей в бытовой и на производственной сферах. 
									При этом происходит мощная экономия электроэнергии.</p>

								<div className="accordion" id="tanb-accordion">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseOne-tanb" 
												aria-expanded="true" aria-controls="collapseOne-tanb">
													ТЭНБ-3
												</button>
											</h2>
										</div>

										<div id="collapseOne-tanb" className="collapse" aria-labelledby="headingOne" data-parent="#tanb">
											<div className="card-body">
												<p>Это блок трубчатых электронагревателей, имеющий мощность в 3 кВт, напряжение в 220 или 380 Вольт. 
													Имеет установочную длину - 425 мм, активную длину -  375 мм. ТЭНБ-3 может быть изготовлен как из 
													углеродистой стали – среда Р, так из нержавеющей стали – среда J. Температура на оболочке имеет 
													показатель в 100 градусов Цельсия. <br/> Предназначен для комплектации как отечественных, так и импортных 
													промышленных установок. Также могут применяться для самостоятельного использования. Блоки ТЭН применяют 
													для нагрева воды, масел, слабых растворов щелочей и кислот, реже для нагрева газовых сред. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTwo-tanb" 
												aria-expanded="true" aria-controls="collapseTwo-tanb">
													ТЭНБ-9
												</button>
											</h2>
										</div>

										<div id="collapseTwo-tanb" className="collapse" aria-labelledby="headingOne" data-parent="#tanb">
											<div className="card-body">
												<p>Это блок трубчатых электронагревателей, имеющий мощность в 9 кВт, напряжение в 220 или 
													380 Вольт. Имеет установочную длину - 500 мм, активную длину -  450 мм. ТЭНБ-9 может быть 
													изготовлен как из углеродистой стали – среда Р, так из нержавеющей стали – среда J. Температура 
													на оболочке имеет показатель в 100 градусов Цельсия. <br/> Предназначен для комплектации как 
													отечественных, так и импортных промышленных установок. Также могут применяться для самостоятельного 
													использования. Блоки ТЭН применяют для нагрева воды, масел, слабых растворов щелочей и кислот, 
													реже для нагрева газовых сред.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseThree-tanb" 
												aria-expanded="true" aria-controls="collapseThree-tanb">
													ТЭНБ-18
												</button>
											</h2>
										</div>

										<div id="collapseThree-tanb" className="collapse" aria-labelledby="headingOne" data-parent="#tanb">
											<div className="card-body">
												<p>Это блок трубчатых электронагревателей, имеющий мощность в 18 кВт, напряжение в 220 или 380 Вольт. 
													Имеет установочную длину - 850 мм, активную длину -  800 мм. ТЭНБ-18 может быть изготовлен как 
													из углеродистой стали – среда Р, так из нержавеющей стали – среда J. Температура на оболочке 
													имеет показатель в 100 градусов Цельсия. <br/>	Предназначен для комплектации как отечественных, так и 
													импортных промышленных установок. Также могут применяться для самостоятельного использования. Блоки 
													ТЭН применяют для нагрева воды, масел, слабых растворов щелочей и кислот, реже для нагрева газовых сред.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseFour-tanb" 
												aria-expanded="true" aria-controls="collapseFour-tanb">
													ТЭНБ-6
												</button>
											</h2>
										</div>

										<div id="collapseFour-tanb" className="collapse" aria-labelledby="headingOne" data-parent="#tanb">
											<div className="card-body">
												<p>Это блок трубчатых электронагревателей, имеющий мощность в 6 кВт, напряжение в 220 или 380 Вольт. 
													Имеет установочную длину - 425 мм, активную длину -  375 мм. ТЭНБ-6 может быть изготовлен как 
													из углеродистой стали – среда Р, так из нержавеющей стали – среда J. Температура на оболочке имеет 
													показатель в 100 градусов Цельсия. <br/>	Предназначен для комплектации как отечественных, 
													так и импортных промышленных установок. Также могут применяться для самостоятельного использования. 
													Блоки ТЭН применяют для нагрева воды, масел, слабых растворов щелочей и кислот,
													 реже для нагрева газовых сред. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseFive-tanb" 
												aria-expanded="true" aria-controls="collapseFive-tanb">
													ТЭНБ-12
												</button>
											</h2>
										</div>

										<div id="collapseFive-tanb" className="collapse" aria-labelledby="headingOne" data-parent="#tanb">
											<div className="card-body">
												<p>Это блок трубчатых электронагревателей, имеющий мощность в 12 кВт, напряжение в 220
													 или 380 Вольт. Имеет установочную длину - 600 мм, активную длину -  535 мм. ТЭНБ-12 
													 может быть изготовлен как из углеродистой стали – среда Р, так из нержавеющей стали –
													  среда J. Температура на оболочке имеет показатель в 100 градусов Цельсия. <br/>	Предназначен 
														для комплектации как отечественных, так и импортных промышленных установок. Также могут 
														применяться для самостоятельного использования. Блоки ТЭН применяют для нагрева воды, масел, 
														слабых растворов щелочей и кислот, реже для нагрева газовых сред.   </p>
											</div>
										</div>
									</div>

								</div>

						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="electric-furnace" tabIndex="-1" role="dialog" aria-labelledby="electric-furnace" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Электропечи Пэт</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
								<p>это оборудование, которое причисляют к отопительному. Печи достаточно компактны, 
									очень удобны в использовании. Чаще всего встречаются электропечи ПЭТ, имеющие мощность 
									от 1 до 1,6 килоВатт на напряжения в 100, 220, 280 и 750 Вольт. Область их применения 
									в основном при отоплении строительных бытовок, башенных кранов, электротранспорта и 
									некоторых помещений малого размера.</p>
							
								<p>Электропечи достаточно просты по своей конструкции. Благодаря этому они могут 
									прослужить очень долго, не требуя ремонта. Что касается установки и применения 
									печей ПЭТ, то это достаточно удобно и просто. В этом нет никакой сложности. 
									Любой желающий сможет провести операцию самостоятельно. <br/> Электропечи ПЭТ имеют 
									большую производительность.</p>

								<p>Они способны очень быстро прогревать воздух в отапливаемом помещении и в 
									течение продолжительного времени удерживать установленный температурный режим. 
									Имея сравнительно малые габариты, небольшую массу, данное оборудование отличается 
									низкой ценой. Если необходимо обогревать помещения небольшой площади, то воспользоваться 
									электропечью ПЭТ – самое рациональное и разумное решение.</p>

								<p>Что касается внешнего вида, то электропечи представляют собой комплект, состоящий из 
									трубчатых электронагревательных элементов, которые встроены на поддоне. Поддоны закрыты 
									при помощи ограждающего металлического перфорированного кожуха. С торцевых сторон 
									электропечей крепятся металлические крышки.</p>

								<p>Правила эксплуатации ПЭТ достаточно просты. При эксплуатации электропечей ПЭТ запрещается 
									включать прибор без заземления корпуса. Также запрещается эксплуатировать прибор вблизи 
									легковоспламеняющихся предметов и в помещениях, где есть легковоспламеняющиеся газы, жидкости.</p>

								<p>Наша компания, занимаясь поставками отопительного оборудования, предлагает приобрести 
									печи ПЭТ. Мы поставляем качественное оборудование по доступным ценам. Наш персонал 
									обладает необходимым опытом работы в данном направлении. Для нас нет неразрешимых задач. 
									В любой момент мы готовы дать исчерпывающую информацию по установке, использованию, техническим 
									характеристикам электропечей ПЭТ.</p>

								<p>Если у Вас возникли какие – то вопросы, то сотрудники нашей компании ответят на любые 
									Ваши запросы, касающиеся электропечей ПЭТ, а также другого поставляемого оборудования.</p>

								<div className="accordion" id="electric-furnace-accordion">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseOne-furnace" 
												aria-expanded="true" aria-controls="collapseOne-furnace">
													Электрообогреватели ПЭТ-1
												</button>
											</h2>
										</div>

										<div id="collapseOne-furnace" className="collapse" aria-labelledby="headingOne" data-parent="#electric-furnace-accordion">
											<div className="card-body">
												<p>Электрообогреватели ПЭТ-1 можно использовать для обогрева как офисных, так и служебных и складских помещений.
													 ПЭТ-1 имеет массу в 7 килограмм, габариты 656х246х172 и номинальную мощность в 1 киловатт.  </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTwo-furnace" 
												aria-expanded="true" aria-controls="collapseTwo-furnace">
													Электрообогреватели ПЭТ-2 
												</button>
											</h2>
										</div>

										<div id="collapseTwo-furnace" className="collapse" aria-labelledby="headingOne" data-parent="#electric-furnace-accordion">
											<div className="card-body">
												<p>Электрообогреватели ПЭТ-2 можно использовать для обогрева как офисных, так и служебных 
													и складских помещений. ПЭТ-2 имеет массу в 4,5 килограмма, габариты 656х246х172 и 
													номинальную мощность в 1 киловатт.  </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseThree-furnace" 
												aria-expanded="true" aria-controls="collapseThree-furnace">
													Электрообогреватели ПЭТ-4
												</button>
											</h2>
										</div>

										<div id="collapseThree-furnace" className="collapse" aria-labelledby="headingOne" data-parent="#electric-furnace-accordion">
											<div className="card-body">
												<p>Электрообогреватели ПЭТ-4 можно использовать для обогрева как складских, так и 
													производственных помещений с возможностью поддержания нужного уровня влажности. 
													ПЭТ-4 имеет массу в 4,5 килограмма, габариты 656х246х172 и номинальную мощность в 
													1 киловатт и 1, 6 киловатт. </p>
											</div>
										</div>
									</div>
								</div>

						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="electric-convectors" tabIndex="-1" role="dialog" aria-labelledby="electric-convectors" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Электроконвекторы</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
								<p>Конвекторы электрические Элкон ЭВНС имеют тонкий корпус, который покрыт 
									полимерным покрытием белого цвета. По этой причине он вполне гармонично 
									впишется в интерьер любого помещения и будет служить как основной источник 
									отопления. Конвектор обогревает путем естественной конвекции имеющегося воздуха.
									 Если его правильно установить и также правильно использовать, то он прослужит 
									 достаточно долгое время. При этом у Вас нет надобности за ним присматривать. <br/>	
									 Внутри электроконвектора находится нагревательный элемент. Он имеет большую теплоотдачу 
									 и через него проходит холодный воздух, который после нагрева покидает его через 
									 отверстия, которые находятся на верхней лицевой стороне корпуса. В конвекторе
									  предусмотрены аварийное отключение, регулятор степени мощности, датчики температур.</p>

								<p><b>Общая информация об электроконвекторах.</b> <br/>
											Электроконвекторы – приборы, которые защищены декоративным металлическим к
											орпусом снаружи. Прибор имеет отверстия для воздуха, находящиеся сверху и 
											снизу. Конвектор состоит из трубчатого элемента нагрева, датчика безопасности,
											 который необходим для отключения питания в случае перегрева. <br/> Температура 
											 нагрева конвектора около 100 градусов. При работе он не влияет на влажность в 
											 помещении. Пыль, которая оседает на приборе, не сжигается, воздух не пересушивается.</p>
								
								<p>Электроконвекторы используют при отоплении помещений госучреждений, офисов, больниц, 
									детских садов. Он позволяет экономично потреблять электроэнергию, сохраняя необходимый температурный режим. <br/>
									Есть категория таких объектов, где кроме отопления электрического ничего невозможно использовать. 
									К таким объектам относятся торговые павильоны, палатки, где подводка теплотрасс невозможна. 
									Вот именно здесь применение электроконвекторов наиболее целесообразно. Они обеспечат 
									безопасность отопления даже в ночное время и не допустят переохлаждения помещения даже 
									при работе в экономичном режиме. <br/> Электроконвекторы занимают мало места, не создают 
									сквозняков и эстетичны. Они обеспечивают как пожарную, так и экологическую безопасность. 
									Кроме всего прочего, конвектора имеют достаточно широкий диапазон температур и высокую 
									точность. Они поддерживают и отслеживают температуру в каждом из помещений.</p>

								<p>Что касается ремонта, то он легок. Что касается установки конвектора, то она не требует специальных знаний. </p>

								<div className="accordion" id="electric-convector-accordion">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseOne-convector" 
												aria-expanded="true" aria-controls="collapseOne-convector">
													Электроконвектор ЭВНС-1
												</button>
											</h2>
										</div>

										<div id="collapseOne-convector" className="collapse" aria-labelledby="headingOne" data-parent="#electric-convector-accordion">
											<div className="card-body">
												<p>При наличии тонкого корпуса и полимерного покрытия белого цвета найдет свое 
													место в любом помещении и будет служить основным источником обогрева. При 
													массе в 6 килограмм и габаритах в 500х440х70 мм имеет диапазон регулирования 
													температур в 40 градусов и номинальную потребляемую мощность в 1 киловатт.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTwo-convector" 
												aria-expanded="true" aria-controls="collapseTwo-convector">
													Электроконвектор ЭВНС-1,5
												</button>
											</h2>
										</div>

										<div id="collapseTwo-convector" className="collapse" aria-labelledby="headingOne" data-parent="#electric-convector-accordion">
											<div className="card-body">
												<p>При наличии тонкого корпуса и полимерного покрытия белого цвета найдет свое место в 
													любом помещении и будет служить основным источником обогрева. При массе в 7 килограмм и
													 габаритах в 750х400х70 мм имеет диапазон регулирования температур в 40 градусов 
													 и номинальную потребляемую мощность в 1,5 киловатт. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseThree-convector" 
												aria-expanded="true" aria-controls="collapseThree-convector">
													Электроконвектор ЭВНС-2
												</button>
											</h2>
										</div>

										<div id="collapseThree-convector" className="collapse" aria-labelledby="headingOne" data-parent="#electric-convector-accordion">
											<div className="card-body">
												<p>При наличии тонкого корпуса и полимерного покрытия белого цвета найдет свое 
													место в любом помещении и будет служить основным источником обогрева. При 
													массе в 8 килограмм и габаритах в 900х440х70 мм имеет диапазон регулирования 
													температур в 40 градусов и номинальную потребляемую мощность в 2 киловатта. </p>
											</div>
										</div>
									</div>
								</div>

						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="electric-boilers" tabIndex="-1" role="dialog" aria-labelledby="electric-boilers" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Электрокотлы</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
								<p>Электрокотлы используются в виде дополнительного или резервного источника обогрева 
									систем водяного отопления жилых или производственных помещений, зданий, которые 
									имеют открытую систему отопления. Такая система должна функционировать при давлении 
									не менее 0.15 МПаскаль и иметь напряжение однофазной сети в 220 Вольт или трехфазной 
									сети в 380 Вольт. Электрокотлы используют автономно или в паре с основным котлом, 
									который работает на твердом, газовом или жидком топливе. Электрокотел имеет 
									рабочий диапазон температур от +20С до +85С.</p>

								<p>Внешне электрокотел выглядит как корпус из трубы. Внутри корпуса установлены 
									трубчатые нагреватели, которые объединены в блок. Что касается корпуса котла, 
									то он закрыт стальным кожухом. Он имеет два патрубка. Один патрубок служит в 
									целях подвода холодной воды, а другой – для отвода нагретой воды. </p>

								<p>Внутри кожуха рядом с корпусом находятся элементы управления: датчик-реле температур, 
									магнитный пускатель, лампа индикации. При помощи ручки датчика-реле производится 
									регулирование температуры воды в самом водонагревателе. Для индикации наличия 
									напряжения служит лампа индикации, которая установлена рядом с датчиком на кожухе. 
									Включение – отключение блока нагревателя обеспечивает магнитный пускатель.</p>

								<p>Что касается электрокотлов ЭВПм, то они применяются для обогрева помещений. 
									Их устанавливают в производственные и жилые помещения с открытой отопительной 
									системой, которая работает при малом давлении (не превышает 0,15МПаскаль), 
									с напряжением питающей сети в 220 Вольт или 380 Вольт. Электрокотлы марок ЭВПм 
									являются полностью автономными. Однако, могут быть установлены для работы с 
									основными котлами в комплексе. Тип монтажа бывает как горизонтальный, так и вертикальный.</p>

								<p>В состав входит пульт управления, при помощи которого есть возможность устанавливать 
									и поддерживать в системе отопления нужную температуру воды, в интервале от 35 до 85 градусов.</p>

								<p>Что касается электрокотлов ЭВП, то они применяются при нагреве воды до температуры в 85 градусов. 
									Электрокотлы марок ЭВП используют для технических целей и для обогрева жилых помещений. 
									Котел выглядит как корпус, в котором расположен блок трубчатых электронагревателей.</p>

								<p>Внутри корпуса электрокотла расположены два патрубка. Один служит для подвода 
									холодной воды, а другой – для отвода горячей. При помощи пульта управления, 
									который имеет два варианта исполнения – электронный и электромеханический, 
									подключается к сети.</p>

								<div className="accordion" id="electric-boiler-accordion">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseOne-boiler" 
												aria-expanded="true" aria-controls="collapseOne-boiler">
													ЭВПм 3
												</button>
											</h2>
										</div>

										<div id="collapseOne-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 3 – моноблочный электрокотел массой до 10 килограмм и номинальной 
													мощностью в 3 киловатта и габаритами 280х190х555. Имеет встроенный пульт 
													управления. ЭВПм 3 позволяет удерживать температуру от 35 до 85 градусов 
													на площади в 20-25 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTwo-boiler" 
												aria-expanded="true" aria-controls="collapseTwo-boiler">
													ЭВПм 9
												</button>
											</h2>
										</div>

										<div id="collapseTwo-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 9 – моноблочный электрокотел массой до 12 килограмм, номинальной 
													мощностью в 9 киловатт и габаритами 280х190х654. Имеет встроенный пульт 
													управления. ЭВПм 9 позволяет удерживать температуру от 35 до 85 градусов 
													на площади в 65-70 квадратных метров. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseThree-boiler" 
												aria-expanded="true" aria-controls="collapseThree-boiler">
													ЭВПм 24
												</button>
											</h2>
										</div>

										<div id="collapseThree-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 24 – моноблочный электрокотел массой до 21 килограмма, номинальной 
													мощностью в 24 киловатта и габаритами 430х180х654. Имеет встроенный 
													пульт управления. ЭВПм 24 позволяет удерживать температуру от 35 до 
													85 градусов на площади в 180-220 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseFour-boiler" 
												aria-expanded="true" aria-controls="collapseFour-boiler">
													ЭВПм 48
												</button>
											</h2>
										</div>

										<div id="collapseFour-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 48 – моноблочный электрокотел массой до 40 килограмм, 
													номинальной мощностью в 48 киловатт и габаритами 710х180х654. 
													Имеет встроенный пульт управления. ЭВПм 48 позволяет удерживать 
													температуру от 35 до 85 градусов на площади в 400-480 квадратных метров.</p>
											</div>
										</div>
									</div>
									
									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseFive-boiler" 
												aria-expanded="true" aria-controls="collapseFive-boiler">
													ЭВП 6
												</button>
											</h2>
										</div>

										<div id="collapseFive-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВП 6 – электрокотел, имеющий массу до 9 килограмм с номинальной 
													мощностью в 6 киловатт и габаритами 700х180х180. Бывает с пультом 
													управления, без пульта управления. При помощи ЭВП 6 можно поддерживать 
													температуру воды от 38 до 85 градусов. Отапливает помещения от 40 до 
													44 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseSix-boiler" 
												aria-expanded="true" aria-controls="collapseSix-boiler">
													ЭВП 12
												</button>
											</h2>
										</div>

										<div id="collapseSix-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВП 12 – электрокотел, имеющий массу до 9,6 килограмм с номинальной 
													мощностью в 12 киловатт и габаритами 800х180х180. Бывает с пультом 
													управления, без пульта управления. При помощи ЭВП 12 можно поддерживать 
													температуру воды от 38 до 85 градусов. Отапливает помещения от 80 до 
													85 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseSeven-boiler" 
												aria-expanded="true" aria-controls="collapseSeven-boiler">
													ЭВПм 6
												</button>
											</h2>
										</div>

										<div id="collapseSeven-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 6 – моноблочный электрокотел массой до 10 килограмм, номинальной 
													мощностью в 6 киловатт и габаритами 280х190х555. Имеет встроенный пульт 
													управления. При помощи ЭВПм 6 можно удерживать температуру в 35 – 85 
													градусов на площади в 40-44 квадратных метров. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseEight-boiler" 
												aria-expanded="true" aria-controls="collapseEight-boiler">
													ЭВПм 12
												</button>
											</h2>
										</div>

										<div id="collapseEight-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 12 – моноблочный электрокотел массой до 12 килограмм, номинальной 
													мощностью в 12 киловатт и габаритами 280х190х654. Имеет встроенный пульт 
													управления. ЭВПм 12 позволяет удерживать температуру от 35 до 85 градусов 
													на площади в 80-85 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseNine-boiler" 
												aria-expanded="true" aria-controls="collapseNine-boiler">
													ЭВПм 36
												</button>
											</h2>
										</div>

										<div id="collapseNine-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВПм 36 – моноблочный электрокотел массой до 30 килограмм, номинальной 
													мощностью в 36 киловатт и габаритами 570х180х654. Имеет встроенный пульт 
													управления. ЭВПм 36 позволяет удерживать температуру от 35 до 85 градусов 
													на площади в 300-360 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTen-boiler" 
												aria-expanded="true" aria-controls="collapseTen-boiler">
													ЭВП 3
												</button>
											</h2>
										</div>

										<div id="collapseTen-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВП 3 – электрокотел, имеющий массу до 3 килограмм с номинальной 
													мощностью в 3 киловатта и габаритами 700х180х180. Бывает с 
													пультом управления, без пульта управления. При помощи ЭВП 3 
													можно поддерживать температуру воды от 38 до 85 градусов. 
													Отапливает помещения от 20 до 22 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseEleven-boiler" 
												aria-expanded="true" aria-controls="collapseEleven-boiler">
													ЭВП 9
												</button>
											</h2>
										</div>

										<div id="collapseEleven-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВП 9 – электрокотел, имеющий массу до 9,6 килограмм с номинальной 
													мощностью в 9 киловатт и габаритами 800х180х180. Бывает с пультом 
													управления, без пульта управления. При помощи ЭВП 9 можно поддерживать 
													температуру воды от 38 до 85 градусов. Отапливает помещения от 60 
													до 75 квадратных метров.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTwelve-boiler" 
												aria-expanded="true" aria-controls="collapseTwelve-boiler">
													ЭВП 18
												</button>
											</h2>
										</div>

										<div id="collapseTwelve-boiler" className="collapse" aria-labelledby="headingOne" data-parent="#electric-boiler-accordion">
											<div className="card-body">
												<p>ЭВП 18 – электрокотел, имеющий массу до 11,5 килограмм с номинальной 
													мощностью в 18 киловатт и габаритами 950х180х180. Бывает с пультом 
													управления, без пульта управления. При помощи ЭВП 18 можно поддерживать 
													температуру воды от 38 до 85 градусов. Отапливает помещения от 85 
													до 95 квадратных метров.</p>
											</div>
										</div>
									</div>
								</div>

						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="electric-calorifers" tabIndex="-1" role="dialog" aria-labelledby="electric-calorifers" 
			aria-hidden="true">
			<div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Калориферы </h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="description">
								<p>Если у Вас есть необходимость дополнительно обогревать бытовое или промышленное 
									помещение, то обратите внимание на электрокалориферы. Электрокалориферы – это 
									уникальные универсальные приборы отопления. Наше предприятие готово поставлять калориферы различных марок и модификаций. <br/>
									Электрокалориферы КЭВМ имеют ступенчатую регулировку мощности. <br/>
									Электрокалориферы КЭВ не имеют возможности регулировать мощность.</p>

								<h5>Общая информация о калориферах. </h5>

								<p>Калориферы являются обособленным классом отопительного оборудования. 
									Принцип их действия основан на подаче потока нагретого воздуха. На 
									данный момент применение калориферов распространено во многих сферах 
									деятельности человека. Электрокалориферы можно применять дома, например, 
									когда еще в доме не включено централизованное отопление, а также в 
									качестве источника дополнительного тепла. В загородном доме, на даче, 
									на производстве, в промышленном помещении, в офисе, в павильоне. В 
									любом месте применение калорифера вполне оправдано не только в виде 
									дополнительного источника тепла, но и как основного источника. У нас 
									продукция высокого качества. Вы можете выбрать более дешевую модель 
									калорифера КЭВ, которая не имеет переключателя мощности. Если же Вам 
									необходима более функциональная модель, то Вам следует заказать 
									калорифер КЭВМ. Кстати, они тоже имеют приемлемые цены и превосходят по 
									многим показателям аналоги из других стран.</p>

								<p>Кроме этого, электрокалориферы применяют как горизонтальные тепловые 
									завесы. Они отсекают потоки холодного воздуха от входных дверей. Применение 
									прибора в технологических целях тоже возможно: для просушки помещений и 
									покрытий из лака или краски, на складах – для создания нужного климата 
									или же для просушки дерева. Получается, что калориферы являются 
									универсальными приборами, которые необходимы везде. В теплое время 
									года его можно использовать как вентилятор!</p>

								<h5>Конструкция электрокалориферов</h5>

								<p>Электрокалорифер состоит из корпуса, внутри которого находится мощный 
									вентилятор, а также блок ТЭНов. На корпусе, на лицевой стороне находятся 
									настройки режимов работы и клавиши управления включением прибора. Электрокалориферы 
									имеют терморегулятор, который при достижении заданной температуры включает 
									калорифер КЭВ. Это позволяет экономить электроэнергию. Для того, чтобы 
									защитить отверстия для выхода воздуха, существует защитная сетка.</p>

								<div className="accordion" id="electric-calorifer-accordion">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseOne-calorifer" 
												aria-expanded="true" aria-controls="collapseOne-calorifer">
													Электрокалорифер КЭВМ-3
												</button>
											</h2>
										</div>

										<div id="collapseOne-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВМ-3 – обогреватель, изготовленный в металлическом корпусе. 
													Имея общую мощность в 3 киловатта и габариты 240х200х235, может работать в 
													две ступени мощности - 0,5 и полную. Масса не более 5,5 килограмма.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTwo-calorifer" 
												aria-expanded="true" aria-controls="collapseTwo-calorifer">
													Электрокалорифер КЭВМ-12
												</button>
											</h2>
										</div>

										<div id="collapseTwo-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВМ-12 – обогреватель, изготовленный в металлическом корпусе. Имея общую мощность в 12 
													киловатт и габариты 420х320х410, может работать в две ступени мощности - 0,5 и полную. 
													Масса не более1 5,5 килограммов. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseThree-calorifer" 
												aria-expanded="true" aria-controls="collapseThree-calorifer">
													Электрокалорифер КЭВМ-40
												</button>
											</h2>
										</div>

										<div id="collapseThree-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВМ-40 – промышленный обогреватель, изготовленный 
													в металлическом корпусе. Имея общую мощность в 40 киловатт и 
													габариты 630х485х700, может работать в три ступени мощности - 
													16, 24 и полную. Масса не более 43 килограмм.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseFour-calorifer" 
												aria-expanded="true" aria-controls="collapseFour-calorifer">
													Электрокалорифер КЭВ-21
												</button>
											</h2>
										</div>

										<div id="collapseFour-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВ-21 – профессиональный обогреватель , 
													изготовленный в металлическом корпусе. При общей мощности в 
													21 киловатт и при габаритах в 695х530х510 имеет массу в 30 килограмм.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseFive-calorifer" 
												aria-expanded="true" aria-controls="collapseFive-calorifer">
													Электрокалорифер КЭВ-60
												</button>
											</h2>
										</div>

										<div id="collapseFive-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВ-60 – профессиональный обогреватель , изготовленный 
													в металлическом корпусе. При общей мощности в 60 киловатт и при габаритах 
													в 980х650х640 имеет массу в 60 килограмм.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseSix-calorifer" 
												aria-expanded="true" aria-controls="collapseSix-calorifer">
													Электрокалорифер (воздухонагреватель) КЭВМ-9
												</button>
											</h2>
										</div>

										<div id="collapseSix-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер (воздухонагреватель) КЭВМ-9 – обогреватель, 
													изготовленный в металлическом корпусе. Имея общую мощность в 9 
													киловатт и габариты 430х320х410, может работать в две ступени 
													мощности - 0,5 и полную. Масса не более 15,5 килограмм. </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseSeven-calorifer" 
												aria-expanded="true" aria-controls="collapseSeven-calorifer">
													Электрокалорифер КЭВМ-21
												</button>
											</h2>
										</div>

										<div id="collapseSeven-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВМ-21 – обогреватель, изготовленный в 
													металлическом корпусе. Имея общую мощность в 21 киловатт и 
													габариты 550х325х530, может работать в две ступени мощности - 
													0,5 и полную. Масса не более 25,5 килограмм.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseEight-calorifer" 
												aria-expanded="true" aria-controls="collapseEight-calorifer">
													Электрокалорифер КЭВ-12
												</button>
											</h2>
										</div>

										<div id="collapseEight-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВ-12 – профессиональный обогреватель , 
													изготовленный в металлическом корпусе. При общей мощности в 
													12 киловатт и при габаритах в 695х530х510 имеет массу в 27 килограмм.  </p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseNine-calorifer" 
												aria-expanded="true" aria-controls="collapseNine-calorifer">
													Электрокалорифер КЭВ-42
												</button>
											</h2>
										</div>

										<div id="collapseNine-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВ-42 – профессиональный обогреватель , 
													изготовленный в металлическом корпусе. При общей мощности в 
													42 киловатта и при габаритах в 785х530х510 имеет массу в 37 килограмм.</p>
											</div>
										</div>
									</div>

									<div className="card">
										<div className="card-header" id="headingOne">
											<h2 className="mb-0">
												<button className="button" type="button" data-toggle="collapse" data-target="#collapseTen-calorifer" 
												aria-expanded="true" aria-controls="collapseTen-calorifer">
													Электрокалорифер КЭВМ-2
												</button>
											</h2>
										</div>

										<div id="collapseTen-calorifer" className="collapse" aria-labelledby="headingOne" data-parent="#electric-calorifer-accordion">
											<div className="card-body">
												<p>Электрокалорифер КЭВМ-2 – обогреватель, изготовленный в 
													металлическом корпусе. Имея общую мощность в 2 киловатта и 
													габариты 240х200х235, может работать в две ступени мощности - 
													0,5 и полную. Масса не более 7 килограмм.</p>
											</div>
										</div>
									</div>						

								</div>

						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Закрыть</button>
						</div>
					</div>
				</div>
			</div>

			</div>
		)
	};
};