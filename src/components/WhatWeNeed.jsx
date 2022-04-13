import Storage from '../images/storage.png';
import Copy from '../images/copy.svg';
import './styles.module.css';
import toast from 'toast-me';
import { CheckIcon } from '@primer/octicons-react';
import { Outlet } from 'react-router-dom';

function WhatWeNeed() {
  const BENEFICIARY =
    'ANTOSHYNA KRYSTYNA 01001, Ukraine,city Kyiv, boulevard Druzhby Narodiv,building 3,Housing B,flat 12';

  const IBAN = 'UA543052990000026205731662098';

  const ACCOUNT = '5168 7450 1741 2153';

  const BANK_OF_BENEFICIARY =
    'JSC CB PRIVATBANK, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE SWIFT CODE/BIC: PBANUA2X';

  const CORRESPONDENT_ACCOUNT = '623-160-5145';

  const INTERMEDIARY_BANK = 'J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY SWIFT CODE/BIC: CHASDEFX';

  const CURRENCY = 'EUR';

  const copyBeneficiary = async () => {
    await navigator.clipboard.writeText(BENEFICIARY);
    toast('BENEFICIARY copied to clipboard!', {
      duration: 3000,
    });
  };

  const copyIban = async () => {
    await navigator.clipboard.writeText(IBAN);
    toast('IBAN copied to clipboard!', {
      duration: 3000,
    });
  };

  const copyAccount = async () => {
    await navigator.clipboard.writeText(ACCOUNT);
    toast('ACCOUNT copied to clipboard!', {
      duration: 3000,
    });
  };

  const copy_Correspondent_Account = async () => {
    await navigator.clipboard.writeText(CORRESPONDENT_ACCOUNT);
    toast('CORRESPONDENT ACCOUNT copied to clipboard!', {
      duration: 3000,
    });
  };

  const copy_Intermediary_Bank = async () => {
    await navigator.clipboard.writeText(INTERMEDIARY_BANK);
    toast('INTERMEDIARY BANK copied to clipboard!', {
      duration: 3000,
    });
  };

  const copyBank_of_beneficiary = async () => {
    await navigator.clipboard.writeText(BANK_OF_BENEFICIARY);
    toast('BANK OF BENEFICIARY copied to clipboard!', {
      duration: 3000,
    });
  };

  const copy_Currency = async () => {
    await navigator.clipboard.writeText(CURRENCY);
    toast('CURRENCY copied to clipboard!', {
      duration: 3000,
    });
  };
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
