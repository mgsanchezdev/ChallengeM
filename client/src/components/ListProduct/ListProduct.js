/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
import CardProduct from '../CardProduct/CardProduct';
import { MAX_SHOW_PRODUCT } from '../consts/consts';
import Lupa from '../../assets/image/lupa.png';
import Image from '../Image/Image';
import './listProduct.css';

export default function ListProduct({ products }) {
  if (products.length === 0) {
    return (
      <div className="containerError">
        <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
        <Image width={200} height={200} alt="Logo lupa" image={Lupa} />
      </div>
    );
  }

  return (
    <div className="containerListProducto">
      {products.map((product, i) => {
        if (i < MAX_SHOW_PRODUCT)
          return <CardProduct key={i} properties={product} />;
      })}
    </div>
  );
}
