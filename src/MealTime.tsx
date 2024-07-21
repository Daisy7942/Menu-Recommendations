import React, { useState, useEffect } from 'react';

const getCurrentMeal = (): string => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours >= 5 && hours < 10) return '아침';
  if (hours === 10 && minutes >= 1 || hours > 10 && hours < 11) return '아점';
  if (hours === 11 && minutes >= 31 || hours > 11 && hours < 15) return '점심';
  if (hours === 15 && minutes >= 1 || hours > 15 && hours < 21) return '저녁';
  return '야식';
};

const MealTime: React.FC = () => {
  const [meal, setMeal] = useState<string>(getCurrentMeal());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMeal(getCurrentMeal());
    }, 60000); // 매 분마다 업데이트

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='justify-center items-center pt-80'>
      <div className="relative flex items-center justify-center">
        <div className="flex-grow border-t border-black" style={{ maxWidth: '100px' }}></div>
        <span className="px-4">전국민의 고민</span><br/>
        <div className="flex-grow border-t border-black" style={{ maxWidth: '100px' }}></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-purple-700">
          {meal}메뉴 고민될땐? 
        </div>
      </div>
    </div>
    
  
  );
};

export default MealTime;
