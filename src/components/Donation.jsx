import Logo from '../images/logo.png';

function Donation() {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Звичайно, ми маємо де все це придбати.</h2>
          <h2 className="card-title">А ви можете зробити пожертву на рахунок:</h2>
          <div>
            <h3>ENEFICIARY</h3>
            <p>
              Получатель (Ф.И.О. получателя счета латиницей) ANTOSHYNA KRYSTYNA 01001, Ukraine,city
              Kyiv, boulevard Druzhby Narodiv,building 3,Housing B,flat 12
            </p>
          </div>
          <div>
            <h3>IBAN:</h3>
            <p>UA543052990000026205731662098</p>
          </div>
          <div>
            <h3>ACCOUNT</h3>
            <p>
              Счет в банке получателя (номер пластиковой карты или текущий счет в ПриватБанке) 5168
              7450 1741 2153
            </p>
          </div>
          <div>
            <h3>BANK OF BENEFICIARY</h3>
            <p>
              Банк получателя JSC CB PRIVATBANK, 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE SWIFT
              CODE/BIC: PBANUA2X
            </p>
          </div>
          <div>
            <h3>CORRESPONDENT ACCOUNT</h3>
            <p>Счет банка получателя в банке-корреспонденте 623-160-5145</p>
          </div>
          <div>
            <h3>INTERMEDIARY BANK</h3>
            <p>
              Банк-корреспондент J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY SWIFT CODE/BIC: CHASDEFX
            </p>
          </div>
          <div>
            <h3>Валюта карты:</h3>
            <p>EUR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
