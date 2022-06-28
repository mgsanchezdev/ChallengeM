import icShipping from '../../assets/image/ic_shipping.png';
import './Price.css';

export default function Price({ price, cents, currency, shipping }) {
  return (
    <>
      <span className="containerPrice">
        <span className="currenty">{currency}</span>
        <span className="price"> {price}</span>
        <span className="">{cents}</span>
      </span>
      {shipping && (
        <img
          className="free-shiping"
          src={icShipping}
          width="24"
          height="24"
          alt="Free shipping"
        />
      )}
    </>
  );
}
