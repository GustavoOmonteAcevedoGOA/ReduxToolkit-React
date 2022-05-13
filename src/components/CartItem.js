import { ChevronUp, ChevronDown } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispacth = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispacth(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispacth(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispacth(removeItem(id));
              return;
            }
            dispacth(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
