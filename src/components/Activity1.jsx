import Logo from '../images/logo.png';
import Collage1 from '../images/collage1.png';

function Activity1() {
  return (
    <div className="container">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* Gallery1  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Наша діяльність в фото:</h2>
          <img className="img-fluid" src={Collage1} alt="Our activity" />
        </div>
      </div>
      {/* Gallery1 */}
    </div>
  );
}

export default Activity1;
