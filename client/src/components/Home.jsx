

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">bienvenido a Sincodigos</h1>
        <p className="lead"> ehh  ezta son las peliculas disponibles en cartelra  </p>
        <hr className="my-4" />
        
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">cine </h5>
              <p className="card-text"> permite a el mostrar su cartelera funcione s, horarios   y precios</p>
              <a href="#!" className="btn btn-primary">ve cartelera</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">usuarios</h5>
              <p className="card-text">permite a  los usuarios realizar reservas y ver cartelera </p>
              <a href="#!" className="btn btn-primary"> ve reservas</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">dashboard</h5>
              <p className="card-text">le permite a alos cien ve las estadisticas como que dia se ve mas que horario se ve mas que idioma se ve mas o que edades se ve mas</p>
              <a href="#!" className="btn btn-primary">ve el dashboard</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
