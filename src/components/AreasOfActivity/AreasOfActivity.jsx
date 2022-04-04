// import Logo from '../../images/logo.png';
import LastPic from '../../images/lastPic.png';
import Mark from '../../images/checkmark2.svg';
import styles from './style.css';
import React from 'react';

function AreasOfActivity() {
  return (
    <div className="container">
      {/* <div>
        <img className="mx-auto d-block" src={Logo} alt="Logo" />
      </div> */}

      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-4">Завданнями та напрямками діяльності Організації є:</h3>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <span>
                Прийом та розподіл гуманітарної допомоги від приватних осіб та організацій, у тому
                числі закордонних;
              </span>
            </li>

            <li className="list-group-item">
              Прийом пожертв від приватних осіб та організацій, у тому числі закордонних;
            </li>
            <li className="list-group-item">
              Придбання товарів та послуг, необхідних для реалізації завдань;
            </li>
            <li className="list-group-item">
              Виробництво балаклав, бронежилетів, кровоспинних жгутів турнікетів, військового одягу
              та ін.
            </li>
            <li className="list-group-item">
              Організація фестивальних, виставкових, просвітницьких, наукових, освітніх та
              культурних заходів;
            </li>
            <li className="list-group-item">
              Сприяння реалізації інтересів членів Організації, цивільних, економічних, соціальних і
              культурних прав;
            </li>
            <li className="list-group-item">
              Предствництво та захист інтересів членів Організації перед органами державної влади та
              органами місцевого самоврядування, у різноманітних громадських інституціях, установах
              та на підприємствах як в Україні, так і за кордоном.
            </li>
          </ul>
          <h3 className="card-title mb-4">
            Для здійснення мети та статутних завдань Організація у встановленому чинним
            законодавством порядку має право:
          </h3>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Засновувати засоби масової інформації;</li>
            <li className="list-group-item">
              Приймати участь у конкурсах та подавати заявки для отримання грантів від національних,
              зарубіжних, міжнародних підприємств, організацій, та установ на виконання мети,
              завдань та напрямів діяльності, передбачених Статутом Організації, а також інших
              програм, затверджених Організацією; отримує та використовує в своїй діяльності
              зазначені гранти;
            </li>
            <li className="list-group-item">
              Подавати необхідні документи для реєстрації отримувачем гуманітарної допомоги
              центральному органу виконавчої влади,що реалізує державну політику у сфері соціального
              захисту населення;
            </li>
            <li className="list-group-item">
              Подавати необхідні документи центральному органу виконавчої влади, що реалізує
              державну політику у сфері соціального захисту населення для визнання вантажів, коштів,
              у тому числі в іноземній валюті, виконаних робіт, легкових автомобілів, наданих послуг
              гуманітарною допомогою;
            </li>
            <li className="list-group-item">Бути отримувачем гуманітарної допомоги;</li>
            <li className="list-group-item">
              Проводити громадські дослідження з дотримання прав людини та основоположних свобод,
              здійснювати громадський аналіз проектів законів та інших нормативно-правових актів;
            </li>
            <li className="list-group-item">
              Ідейно, організаційно та матеріально підтримувати неприбуткові та неполітичні
              організації та установи, надавати допомогу в їх створенні;
            </li>
            <li className="list-group-item">
              Створювати юридичні особи (товариства, підприємства) в установленому законодавством
              порядку;
            </li>
            <li className="list-group-item">
              Утворювати відокремлені підрозділи Організації як на території України, так і за її
              межами.
            </li>
          </ul>
          <img className="img-fluid mx-auto d-block" src={LastPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AreasOfActivity;
