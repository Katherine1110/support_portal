import Logo from '../images/logo.png';
// import Storage from '../images/storage.png';
import Storage from '../images/storage.png';

function WhatWeNeed() {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div class="card">
        <div class="card-body">
          <h1 className="card-title">Потребуємо:</h1>
          <ul>
            <li>Харчові продукти тривалого зберігання;</li>
            <li>Дитяче харчування, дитячий одяг, засоби гігієни, підгузки;</li>
            <li>Медикаменти;</li>
            <li>Кровоспинні джгути-турнікети;</li>
            <li>Білизна, термобілизна, шкарпетки;</li>
            <li>Тканини;</li>
            <li>Фурнітура;</li>
            <li>Швейне обладнання (машини, оверлоки та ін.);</li>
            <li>Бронежилети, каски, розгрузки;</li>
            <li>Тепловізори;</li>
            <li>Автомобілі.</li>
          </ul>
          <div>
            <img className="img-fluid" src={Storage} alt="Storage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeNeed;
