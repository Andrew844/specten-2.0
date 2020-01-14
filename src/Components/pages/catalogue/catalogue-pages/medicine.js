import React from "react";
import finned from "../../../../img/catalogue/finned.jpg";
import medicineTan from "../../../../img/catalogue/modals/medician-tan.jpg";

const Medicine = props => {
    return (
        <div className="card-unfolded">
            <div className="card-content">
                <div className="card-header">
                    <h5 className="card-title">ТЕНы медицинские</h5>
                    <a type="btn" className="close" onClick={props.returnBack} href="#catalogue-page">
                        <span>&times;</span>
                    </a>
                </div>
                <div className="card-body">
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
                <div className="card-footer">
                    <a type="button" className="btn" onClick={props.returnBack} href="#catalogue-page">Закрыть</a>
                </div>
            </div>
        </div>
    )
};

export default Medicine;