import React from "react";

const ElectricFurnace = props => {
  return (
     <div className="card-unfolded">
         <div className="card-content">
             <div className="card-header">
                 <h5 className="card-title">Электропечи Пэт</h5>
                 <a type="button" className="close" onClick={props.returnBack} href="#catalogue-page">
                     <span>&times;</span>
                 </a>
             </div>
             <div className="card-body">
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
             <div className="card-footer">
                 <a type="button" className="btn" href="#catalogue-page" onClick={props.returnBack}>Закрыть</a>
             </div>
         </div>
     </div>
  )
};

export default ElectricFurnace;