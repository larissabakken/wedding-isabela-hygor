import { useState, useEffect } from 'react';

export default function About() {
  // eslint-disable-next-line react/prop-types
  const Quote = ({ text, author }) => {
    return (
      <div className="bg-white bg-opacity-50 w-screen p-6">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-2xl italic text-gray-800 mb-4">"{text}"</p>
        <div className="text-right">
          <span className="text-gray-600 text-xl">- {author}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-hero-about bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="bg-section-about bg-center bg-cover">
        <div className="bg-white bg-opacity-25 w-screen flex items-center justify-between flex-col p-6">
          <h2 className="subtitle text-4xl">Isabela & Hygor</h2>
          <p className="subtitle italic text-2xl my-2">Com a benção de Deus e de seus pais</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 subtitle italic">
            <ul>
              <li>Élida da Silva</li>
              <li>Gilmas Rodrigues Guimarães</li>
            </ul>
            <ul>
              <li>Helena Maria Guimarães</li>
              <li>José Alcino Alves Ferreira</li>
            </ul>
          </div>
          <p className="subtitle italic text-2xl pt-4">Convidam para seu casamento</p>
          <p className="subtitle italic text-2xl">Sábado, 14 de Setembro de 2024 às 16 horas</p>
          <button className="m-2">Mapa do Local</button>
          <p className="subtitle italic text-lg">Espaço Joseville</p>
          <p className="subtitle italic text-lg">Rodovia MG 431 - Km 26 , S/n - Pará de Minas </p>
        </div>
      </div>
      <div className="flex justify-center items-end min-h-screen">
        <Quote
          text="Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. para onde fores, irei. Onde tu repousares, repousarei. Teu Deus será o meu Deus.Teu caminho o meu será."
          author="Rute 1:16-17"
        />
      </div>
    </div>
  );
}
