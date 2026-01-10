import React from 'react';

const HeroImage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 667"
    className={props.className}
    {...props}
  >
    <rect width="1000" height="667" fill="#fce7f3" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Arial"
      fontSize="60"
      fontWeight="bold"
      fill="#db2777"
    >
      Sempre na Moda
    </text>
    <text
      x="50%"
      y="60%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Arial"
      fontSize="30"
      fill="#be185d"
    >
      Imagem de Exemplo
    </text>
  </svg>
);

export default HeroImage;
