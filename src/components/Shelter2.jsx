import Logo from '../images/logo.png';
import Collage5 from '../images/collage5.png';

function Shelter1() {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Gallery1  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Сховище, яке ми створили:</h2>
          <img className="img-fluid" src={Collage5} alt="Shelter" />
        </div>
      </div>
      {/* Gallery1 */}
    </div>
  );
}

export default Shelter1;
