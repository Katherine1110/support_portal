import Logo from '../images/logo.png';
import Collage2 from '../images/collage2.png';

function Activity2() {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Gallery2  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Наша діяльність в фото:</h2>
          <img className="img-fluid" src={Collage2} alt="Our activity" />
        </div>
      </div>
      {/* Gallery2 */}
    </div>
  );
}

export default Activity2;
