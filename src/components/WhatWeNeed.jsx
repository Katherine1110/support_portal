import Storage from '../images/storage.png';
import './styles.module.css';
import { CheckIcon } from '@primer/octicons-react';
import { Outlet } from 'react-router-dom';

function WhatWeNeed() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Актуальні потреби:</h1>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Харчові продукти тривалого зберігання;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Дитяче харчування, дитячий одяг, засоби гігієни, підгузки;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Медикаменти;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Кровоспинні джгути-турнікети;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Білизна, термобілизна, шкарпетки;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Тканини;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Фурнітура;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Швейне обладнання (машини, оверлоки та ін.);
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Бронежилети, каски, розгрузки;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Тепловізори;
              </li>
              <li className="list-group-item">
                <CheckIcon size={24} className="me-2" />
                Автомобілі.
              </li>
              <li className="list-group-item"></li>
            </ul>
            <div className="mb-5">
              <img className="card-img img-fluid mx-auto d-block" src={Storage} alt="Storage" />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeNeed;
