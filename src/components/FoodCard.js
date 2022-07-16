import "./FoodCard.scss";

export default function FoodCard({ title, description, price, imgSrc }) {
  const croppedDescription = description.replace(/^(.{50}[^\s]*).*/, "$1")

  return (
    <div className="food-card-container">
      <div className="food-card-text-container">
        <h2 className="food-card-title">{title}</h2>
        <p className="food-card-description">{croppedDescription}</p>
        <p className="food-card-price">{price}</p>
      </div>
      {imgSrc ? <img className="food-card-image" src={imgSrc} /> : null}
    </div>
  );
}
