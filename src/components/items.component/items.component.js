import classes from './items.module.css';
import container from "../layout/container.module.css";
import { itemsData } from './items.data';
import ItemComponent from './item.component/item.component';

const ItemsComponent = ({ searchValue }) => {
  const filteredItems = itemsData.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className={container.container}>
      <h2>Featured Products</h2>
      <div className={classes.itemsGrid}>
        {filteredItems.map(item => (
          <ItemComponent
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            salePrice={item.salePrice}
            currency={item.currency}
          />
        ))}
      </div>
    </section>
  );
};

export default ItemsComponent;