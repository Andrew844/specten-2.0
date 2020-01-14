import React from "react";

const Calorifers = props => {
  return (
      <div className="card-unfolded">
          <div className="card-content">
              <div className="card-header">
                  <h5 className="card-title">Калориферы </h5>
                  <a type="button" className="close" href="#catalogue-page" onClick={props.returnBack}>
                      <span>&times;</span>
                  </a>
              </div>
              <div className="card-body">
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
              <div className="card-footer">
                  <a type="button" className="btn" href="#catalogue-page" onClick={props.returnBack}>Закрыть</a>
              </div>
          </div>
      </div>
  )
};

export default Calorifers;