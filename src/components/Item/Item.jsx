/*Componente intermediario */
import "./Item.css";
export const Item = ({
  name,
  author,
  price,
  category,
  description,
  imageUrl,
  children,
}) => {
  return (
    <div className="item-card">
      <article>
        <img src={imageUrl} alt={name} className="item-image" />
        <div className="item-content">
          <h2 className="item-title">{name}</h2>
          {author && <p className="item-author">{author}</p>}
          <p className="item-category">{category}</p>
          <p className="item-description">{description}</p>
          <p className="item-price">${price}</p>
          {children}
        </div>
      </article>
    </div>
  );
};
