import Logo from '../images/logo.png';
import Collage3 from '../images/collage3.png';

function Activity3() {
  return (
    <div className="container">
      <div>
        <img className="mx-auto d-block" src={Logo} alt="Logo" />
      </div>

      {/* Gallery3  */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Наша діяльність в фото:</h2>
          <img className="img-fluid mx-auto d-block " src={Collage3} alt="Our activity" />
        </div>
      </div>
      {/* Gallery3 */}
    </div>
  );
}

export default Activity3;
