import React from 'react';
import { Oval } from 'react-loader-spinner';
import './loading.css';

function Loading() {
  return (
    <div className="loader-wrapper ">
      <Oval
        type="Puff"
        color="#ffe600"
        height={100}
        width={100}
        strokeWidth={5}
        secondaryColor="#ffe600"
      />
    </div>
  );
}

export default Loading;
