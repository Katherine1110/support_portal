// import Logo from '../images/logo.png';
import Copy from '../images/copy.svg';
import './styles.module.css';
import toast from 'toast-me';

function Donation() {
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
    <div className="container App">
      {/* <div>
        <img src={Logo} alt="Logo" />
      </div> */}

      <div className="card">
        <div className="card-body">
          <div className="mb-5">
            <h2 className="card-title">Звичайно, ми маємо де все це придбати.</h2>
            <h2 className="card-title">А ви можете зробити пожертву на рахунок:</h2>
            <h2>Реквізити:</h2>
          </div>

          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text fw-bold" id="inputGroup-sizing-sm">
              BENEFICIARY:
            </span>
            <input
              className="form-control"
              type="text"
              value={BENEFICIARY}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              className=" btn btn-outline-secondary"
              onClick={copyBeneficiary}
              disabled={!BENEFICIARY}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text fw-bold" id="inputGroup-sizing-sm">
              IBAN:
            </span>
            <input
              className="form-control"
              type="text"
              value={IBAN}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button className="btn btn-outline-secondary" onClick={copyIban} disabled={!IBAN}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text fw-bold" id="inputGroup-sizing-sm">
              ACCOUNT:
            </span>
            <input
              className="form-control"
              type="text"
              value={ACCOUNT}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button className="btn btn-outline-secondary" onClick={copyAccount} disabled={!ACCOUNT}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text fw-bold" id="inputGroup-sizing-sm">
              BANK OF BENEFICIARY:
            </span>
            <input
              className="form-control"
              type="text"
              value={BANK_OF_BENEFICIARY}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              className="btn btn-outline-secondary"
              onClick={copyBank_of_beneficiary}
              disabled={!BANK_OF_BENEFICIARY}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text fw-bold" id="inputGroup-sizing-sm">
              CORRESPONDENT ACCOUNT:
            </span>
            <input
              className="form-control"
              type="text"
              value={CORRESPONDENT_ACCOUNT}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              className="btn btn-outline-secondary"
              onClick={copy_Correspondent_Account}
              disabled={!CORRESPONDENT_ACCOUNT}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text fw-bold" id="inputGroup-sizing-sm">
              INTERMEDIARY BANK:
            </span>
            <input
              className="form-control"
              type="text"
              value={INTERMEDIARY_BANK}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              className="btn btn-outline-secondary"
              onClick={copy_Intermediary_Bank}
              disabled={!INTERMEDIARY_BANK}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text title fw-bold" id="inputGroup-sizing-sm">
              CURRENCY:
            </span>
            <input
              className="form-control"
              type="text"
              value={CURRENCY}
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button className="btn btn-outline-secondary" onClick={copy_Currency}>
              <img src={Copy} alt="Copy button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
