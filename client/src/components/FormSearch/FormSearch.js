import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Image from '../Image/Image';
import Button from '../Button/Button';
import Input from '../Input/Input';
import icSearch from '../../assets/image/ic_Search.png';
import './formSearch.css';

export default function FormSearch() {
  const [searchData, setSearchData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchData !== '') navigate(`/items?search=${decodeURI(searchData)}`);
    else navigate('/');
  };

  return (
    <form className="containerAllFormSearch" onSubmit={handleSubmit}>
      <div className="containerFormSearch">
        <Input
          type="text"
          name="search"
          placeholder="   Buscar productos, marcas y más…"
          onChange={(e) => setSearchData(e.target.value)}
          value={searchData}
        />
        <Button type="submit" className="containerBtn">
          <Image alt="Buscar icono" width={18} height={18} image={icSearch} />
        </Button>
      </div>
    </form>
  );
}
