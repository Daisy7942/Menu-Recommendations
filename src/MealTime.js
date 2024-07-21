import React, { useState, useEffect } from 'react';

const getCurrentMeal = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours >= 5 && hours < 10) return '아침';
  if (hours === 10 && minutes >= 1 || hours > 10 && hours < 11) return '아점';
  if (hours === 11 && minutes >= 31 || hours > 11 && hours < 15) return '점심';
  if (hours === 15 && minutes >= 1 || hours > 15 && hours < 21) return '저녁';
  return '야식';
};

const MealTime = () => {
  const [meal, setMeal] = useState(getCurrentMeal());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMeal(getCurrentMeal());
    }, 60000); // 매 분마다 업데이트

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-4xl font-bold text-gray-800">
      {meal} 고민될땐? 
      </div>
    </div>
  );
};

export default MealTime;
