import classes from "./item.module.css";

const ItemComponent = ({ image, title, price, salePrice, currency }) => {
  const isSale = salePrice !== null;

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        {isSale && <span className={classes.sale}>SALE</span>}
        <img src={image} alt={title} />
      </div>

      <h3 className={classes.title}>{title}</h3>

      <div className={classes.price}>
        {isSale ? (
          <>
            <span className={classes.salePrice}>
              {currency}{salePrice}
            </span>
            <span className={classes.oldPrice}>
              {currency}{price}
            </span>
          </>
        ) : (
          <span>
            {currency}{price}
          </span>
        )}
      </div>
    </div>
  );
};

export default ItemComponent;