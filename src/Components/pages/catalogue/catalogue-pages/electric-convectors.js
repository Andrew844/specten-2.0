import React from "react";

const ElectricConvectors = props => {
  return (
      <div className="card-unfolded">
          <div className="card-content">
              <div className="card-header">
                  <h5 className="card-title">Электроконвекторы</h5>
                  <a type="button" className="close" href="#catalogue-page" onClick={props.returnBack}>
                      <span>&times;</span>
                  </a>
              </div>
              <div className="card-body">
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
              <div className="card-footer">
                  <a type="button" className="btn" href="#catalogue-page" onClick={props.returnBack}>Закрыть</a>
              </div>
          </div>
      </div>
  )
};

export default ElectricConvectors;