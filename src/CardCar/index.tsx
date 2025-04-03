interface CarProps {
  image: string;
  name: string;
  price: string;
}

function CardCar ({ image, name, price }:CarProps) {
  return (
    <div className=" card shadow-sm">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button className="btn btn-primary">Saiba mais</button>
      </div>
    </div>
  );
}

export default CardCar;
