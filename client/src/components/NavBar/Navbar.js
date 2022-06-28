import { Link } from 'react-router-dom';
import FormSearch from '../FormSearch/FormSearch';
import LogoML from '../../assets/image/Logo_ML.png';
import Image from '../Image/Image';
import './navBar.css';

export default function Header() {
  return (
    <div className="containerNavbar">
      <div className="containerNavBarSearch">
        <Link className="" to="/">
          <Image
            alt="Mercado Libre Logo"
            width={53}
            height={36}
            image={LogoML}
          />
        </Link>
        <FormSearch />
      </div>
    </div>
  );
}
