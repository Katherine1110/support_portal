import Logo from '../images/logo.png';
import Collage3 from '../images/collage3.png';

function Activity3() {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Gallery3  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Наша діяльність в фото:</h2>
          <img className="img-fluid " src={Collage3} alt="Our activity" />
        </div>
      </div>
      {/* Gallery3 */}
    </div>
  );
}

export default Activity3;
