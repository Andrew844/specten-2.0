import React from "react";

const ElectricBoilers = props => {
  return (
      <div className="card-unfolded">
          <div className="card-content">
              <div className="card-header">
                  <h5 className="card-title">Электрокотлы</h5>
                  <a type="button" className="close" href="#catalogue-page" onClick={props.returnBack}>
                      <span>&times;</span>
                  </a>
              </div>
              <div className="card-body">
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
              <div className="card-footer">
                  <a type="button" className="btn" href="#catalogue-page" onClick={props.returnBack}>Закрыть</a>
              </div>
          </div>
      </div>
  )
};

export default ElectricBoilers;