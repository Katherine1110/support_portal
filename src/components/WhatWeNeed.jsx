import Logo from '../images/logo.png';
// import Storage from '../images/storage.png';
import Storage from '../images/storage.png';

function WhatWeNeed() {
  return (
    <div className="container">
      <div>
        <img className="mx-auto d-block" src={Logo} alt="logo" />
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Потребуємо:</h1>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">Харчові продукти тривалого зберігання;</li>
            <li className="list-group-item">
              Дитяче харчування, дитячий одяг, засоби гігієни, підгузки;
            </li>
            <li className="list-group-item">Медикаменти;</li>
            <li className="list-group-item">Кровоспинні джгути-турнікети;</li>
            <li className="list-group-item">Білизна, термобілизна, шкарпетки;</li>
            <li className="list-group-item">Тканини;</li>
            <li className="list-group-item">Фурнітура;</li>
            <li className="list-group-item">Швейне обладнання (машини, оверлоки та ін.);</li>
            <li className="list-group-item">Бронежилети, каски, розгрузки;</li>
            <li className="list-group-item">Тепловізори;</li>
            <li className="list-group-item">Автомобілі.</li>
            <li className="list-group-item"></li>
          </ul>
          <div>
            <img className="img-fluid mx-auto d-block" src={Storage} alt="Storage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeNeed;
