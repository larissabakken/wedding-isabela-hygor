import { useState, useEffect } from 'react';

export default function Counting() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-08T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        className="bg-hero-flower bg-left-bottom bg-cover bg-no-repeat rounded-md"
        key={interval}>
        <div className="bg-black bg-opacity-20 flex flex-col items-center justify-center text-gray-50 w-[120px] h-[120px]">
          <span className="text-4xl font-semibold">{timeLeft[interval]}</span>
          <span className="text-xl font-semibold">
            {interval.charAt(0).toUpperCase() + interval.slice(1)}
          </span>
        </div>
      </div>,
    );
  });

  return (
    <div className="bg-hero-countdown bg-cover bg-center">
      <div className="bg-gray-800 bg-opacity-40 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl title px-2">Isabela & Hygor</h1>
        <p className="text-lg my-2 text-gray-50 px-2 text-center">
          Estamos nos casando, 14 de Setembro às 16 horas{' '}
        </p>
        <div className="flex md:space-x-4 space-x-2">
          {timerComponents.length ? timerComponents : <span>Times up!</span>}
        </div>
      </div>
    </div>
  );
}
