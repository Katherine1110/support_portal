import Logo from '../images/logo.png';
import Storage from '../images/storage.png';

function WhatWeNeed() {
  return (
    <>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <h1>Потребуємо:</h1>
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
      </div>
      <img src={Storage} alt="Storage" />
    </>
  );
}

export default WhatWeNeed;
