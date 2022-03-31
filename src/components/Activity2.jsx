import Logo from '../images/logo.png';
import Collage2 from '../images/collage2.png';

function Activity2() {
  return (
    <div className="container">
      <div>
        <img className="mx-auto d-block" src={Logo} alt="Logo" />
      </div>

      {/* Gallery2  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Наша діяльність в фото:</h2>
          <img className="img-fluid mx-auto d-block" src={Collage2} alt="Our activity" />
        </div>
      </div>
      {/* Gallery2 */}
    </div>
  );
}

export default Activity2;
