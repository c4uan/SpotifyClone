import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

// eslint-disable-next-line react/prop-types
const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //   console.log(items);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link className="item-list__link" to={path}>
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          // eslint-disable-next-line react/prop-types
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
