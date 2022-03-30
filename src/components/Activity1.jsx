import Logo from '../images/logo.png';
import Collage1 from '../images/collage1.png';

function Activity1() {
  return (
    <div className="container">
      <div>
        <img className="mx-auto d-block" src={Logo} alt="Logo" />
      </div>

      {/* Gallery1  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Наша діяльність в фото:</h2>
          <img className="img-fluid mx-auto d-block" src={Collage1} alt="Our activity" />
        </div>
      </div>
      {/* Gallery1 */}
    </div>
  );
}

export default Activity1;
