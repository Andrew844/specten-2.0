import React from "react";

const Tanb = props => {
  return (
      <div className="card-unfolded">
          <div className="card-content">
              <div className="card-header">
                  <h5 className="card-title">ТЭНБ</h5>
                  <a type="button" className="close" onClick={props.returnBack} href="#catalogue-page">
                      <span>&times;</span>
                  </a>
              </div>
              <div className="card-body">
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

                      <div className="accordion" id="tanb">
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
              <div className="card-footer">
                  <a type="button" className="btn" onClick={props.returnBack} href="#catalogue-page">Закрыть</a>
              </div>
          </div>
      </div>
  )
};

export default Tanb;