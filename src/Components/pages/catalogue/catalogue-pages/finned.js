import React from "react";
import finned from "../../../../img/catalogue/finned.jpg";
import finnedOne from "../../../../img/catalogue/modals/finned-1.jpg";
import finnedTwo from "../../../../img/catalogue/modals/finned-2.jpg";

const Finned = props => {
  return (
      <div className="card-unfolded">
          <div className="card-content">
              <div className="card-header">
                  <h5 className="card-title">Оребренные ТЭНы</h5>
                  <a type="button" className="close" onClick={props.returnBack} href="#catalogue-page">
                      <span>&times;</span>
                  </a>
              </div>
              <div className="card-body">
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
              <div className="card-footer">
                  <a type="button" className="btn" onClick={props.returnBack} href="#catalogue-page">Закрыть</a>
              </div>
          </div>
      </div>
  )
};

export default Finned;