import { useState } from "react";
import useFetchCars from "../FetchCars/useFetchCars";

const CarList = () => {
  const [make, setMake] = useState("Tesla");
  const { cars, loading, error } = useFetchCars(make);

  return (
    <div className="container">
      <h2 className="my-4">Galeria de Carros</h2>

      <select onChange={(e) => setMake(e.target.value)} className="form-select mb-4">
        <option value="Tesla">Tesla</option>
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
      </select>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <div className="row">
        {cars.map((car, index) => (
          <div key={index} className="col-md-4 my-3">
            <div className="card">
              <img
                src={car.image_url}
                alt={`${car.make} ${car.model}`}
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{car.make} {car.model}</h5>
                <p className="card-text">Ano: {car.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
