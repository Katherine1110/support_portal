import Bicycle from '../images/bicycle.png';

function Intro() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <p>
            Діяльність Громадської організації «Портал Підтримки України» спрямована на підтримку
            суспільства та Збройних Сил України під час російської агресії проти України та після
            перемоги, на відновлення нашоЇ країни.
          </p>
          <p>
            Маємо своє текстильне виробництво в Києві. Працюємо з укриттями, фондами, волонтерами,
            державними установами, ЗСУ та ТерОбороною.
          </p>
          <a className="btn btn-primary col-3 mx-auto mb-4" href="/what_we_need" role="button">
            Приєднатися
          </a>
          <img className="card-img" src={Bicycle} alt="Bicycle" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
