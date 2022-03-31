import Logo from '../images/logo.png';
import Collage4 from '../images/collage4.png';

function Shelter1() {
  return (
    <div className="container">
      <div>
        <img className="mx-auto d-block" src={Logo} alt="Logo" />
      </div>

      {/* Gallery1  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Сховище, яке ми створили:</h2>
          <img className="img-fluid mx-auto d-block" src={Collage4} alt="Shelter" />
        </div>
      </div>
      {/* Gallery1 */}
    </div>
  );
}

export default Shelter1;