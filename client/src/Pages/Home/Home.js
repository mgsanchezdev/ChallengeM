import React from 'react';
import LogoHome from '../../assets/image/Logo_ML.png';
import './home.css';

export function Home() {
  return (
    <div className="containerHome">
      <img src={LogoHome} alt="Logo principal Meli" />
    </div>
  );
}
