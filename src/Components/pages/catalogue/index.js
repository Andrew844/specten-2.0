import React, {Component} from "react";

import Air from "./catalogue-pages/air";
import Water from "./catalogue-pages/water";
import Finned from "./catalogue-pages/finned";
import Medicine from "./catalogue-pages/medicine";
import Tanb from "./catalogue-pages/tanb";
import ElectricFurnace from "./catalogue-pages/electric-furnace";
import ElectricConvectors from "./catalogue-pages/electric-convectors";
import ElectricBoilers from "./catalogue-pages/electric-boilers";
import Calorifers from "./catalogue-pages/calorifers";

import "../../css/catalogue.css";

import air from "../../../img/catalogue/air.jpg";
import water from "../../../img/catalogue/water.jpg";
import finned from "../../../img/catalogue/finned.jpg";

export default class Index extends Component {

	state = {
		cards: {
			air: {
				cardHeader: "Воздушные ТЭНы",
				cardImg: air,
				cardDescription: `Нагревательные элементы – ТЭН для воздуха и других газообразных 
													сред изготавливаются по стандартам ГОСТ 13268-88. Классификация и маркировка
													воздушных ТЭНов зависит от состояния нагреваемой среды и материала изготовления`,
				dataTarget: "#air"
			},
			water: {
				cardHeader: "Водяные ТЭНы",
				cardImg: water,
				cardDescription: `Главным предназначением водяного ТЭНа является преобразования 
													электрической энергии в тепловую в водной среде. В основном он 
													применяется в бытовых условиях для нагрева и кипячения воды, также 
													в промышленности для нагрева слабых растворов щелочей и кислот.`,
				dataTarget: "#water"
			},
			finned: {
				cardHeader: "Оребрённые ТЭНы",
				cardImg: finned,
				cardDescription: `Оребренные ТЭНы изготавливаются производителями из нержавеющей стали, что предотвращает 
													систему от быстрого старения и поломки. Оребрение создается лентой, либо накатным 
													способом алюминием по спирали.`,
				dataTarget: "#finned"

			},
			medician: {
				cardHeader: "Медицинские ТЕНы",
				cardDescription: `ТЭНы специального вида помимо использования в быту или промышленности, также 
													употребляется в медицине. 
													Это дистилляторы, парогенераторы и стерилизаторы. Они очень широко применяются 
													в медицинских учреждениях.`,
				dataTarget: "#medicine"
			},
			tanb: {
				cardHeader: "ТЭНБ",
				cardDescription: `ТЭНБ – блоки трубчатых электронагревателей. Состоят они из одного или 
													нескольких ТЭНов, которые герметично припаяны на общем фланце. На их 
													расположение влияет рабочее давление среды.`,
				dataTarget: "#tanb"

			},
			electricFurnace: {
				cardHeader: "Электропечи Пэт",
				cardDescription: `Электропечи Пэт – это оборудование, которое причисляют к отопительному. 
													Печи достаточно компактны, очень удобны в использовании. Область их применения в основном 
													при отоплении строительных бытовок, башенных кранов, электротранспорта и некоторых 
													помещений малого размера.`,
				dataTarget: "#electric-furnace"
			},
			electricBoiler: {
				cardHeader: "Электрокотлы",
				cardDescription: `Электрокотлы используются в виде дополнительного или резервного 
													источника обогрева систем водяного отопления жилых или производственных 
													помещений, зданий, которые имеют открытую систему отопления.`,
				dataTarget: "#electric-boilers"
			},
			electricConvectors: {
				cardHeader: "Электроконвекторы",
				cardDescription: `Конвекторы электрические Элкон ЭВНС имеют тонкий корпус, который 
													покрыт полимерным покрытием белого цвета. По этой причине он вполне
													гармонично впишется в интерьер любого помещения и будет служить как
													основной источник отопления.`,
				dataTarget: "#electric-convectors"
			},
			calorifer: {
				cardHeader: "Калориферы",
				cardDescription: `Если у Вас есть необходимость дополнительно обогревать 
													бытовое или промышленное помещение, то обратите внимание на электрокалориферы.
													Электрокалориферы – это уникальные универсальные приборы отопления. 
													Наше предприятие готово поставлять калориферы различных марок и модификаций. `,
				dataTarget: "#electric-calorifers"
			
			}
		},
		searchQuery: "",
		visibleDisplay: "",
		visibleCard: ""
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

	setVisibleCard = cardName => {
		const newCardName = cardName.slice(1);
		this.setState({
			visibleDisplay: "card",
			visibleCard: newCardName
		});
	};

	parseCards = cards => {
		let parsedCards = [];
	
		Object.values(cards).forEach(card => {
			let outputCard = (
				<div className="card" key={card.cardHeader}
					 onClick={() => this.setVisibleCard(card.dataTarget)}>

					<div className="card-header">
						<h5>{card.cardHeader}</h5>
					</div>

					{card.cardImg ?
						<div className="card-img">
							<img src={card.cardImg} alt={card.cardHeader}/>
						</div> : null}

					<div className="card-description">
						<p>{card.cardDescription}</p>
					</div>

				</div>
			);
			parsedCards.push(outputCard);
		});
	
		return parsedCards;
	};

	returnBack = () => {
		this.setState({
			visibleDisplay: "catalogue",
			visibleCard: ""
		});
	};

	showCard = card => {
		switch (card) {
			case "air":
				return <Air returnBack={this.returnBack}/>;
			case "water":
				return <Water returnBack={this.returnBack}/>;
			case "finned":
				return <Finned returnBack={this.returnBack}/>;
			case "medicine":
				return <Medicine returnBack={this.returnBack}/>;
			case "tanb":
				return <Tanb returnBack={this.returnBack}/>;
			case "electric-furnace":
				return <ElectricFurnace returnBack={this.returnBack}/>;
			case "electric-convectors":
				return <ElectricConvectors returnBack={this.returnBack}/>;
			case "electric-boilers":
				return <ElectricBoilers returnBack={this.returnBack}/>;
			case "electric-calorifers":
				return <Calorifers returnBack={this.returnBack}/>;
			default:
				return <Air returnBack={this.returnBack}/>;
		}
	};

	showCardMenu = () => {
		let cardHeaders = [];
		Object.values(this.state.cards)
			.map(card =>
				card.dataTarget.slice(1) !== this.state.visibleCard ?
					cardHeaders.push(
						<button className="card-header"
								onClick={() => this.setVisibleCard(card.dataTarget)}
								key={card.dataTarget}>{card.cardHeader}</button>

					) : null
			);
		return cardHeaders;
	};

	render () {

		const filteredCards = this.search(this.state.cards, this.state.searchQuery);
		const visibleCards = this.parseCards(filteredCards);

		return (
			<div className="catalogue-page" id="catalogue-page">

				{
					this.state.visibleDisplay === "card" ?
						(
							<>
								<div className="card-menu">
									{this.showCardMenu()}
								</div>

								{this.showCard(this.state.visibleCard)}
							</>
						) : (
							<>
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
									{visibleCards.length > 0 ? visibleCards : "Ваш запрос не дал результатов"}
								</div>
							</>
						)
				}

			</div>
		)
	};
};