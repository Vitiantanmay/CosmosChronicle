
import React from 'react';
import { Mission } from '../types';
import { RocketIcon } from './icons/RocketIcon';

interface MissionCardProps {
  mission: Mission;
  index: number;
  onClick: () => void;
  isActive: boolean;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission, index, onClick, isActive }) => {
  const isUp = index % 2 === 0;
  const year = new Date(mission.date).getFullYear();

  return (
    <div
      className="relative flex flex-col items-center justify-center mx-16 md:mx-24 group cursor-pointer"
      onClick={onClick}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className={`absolute w-56 text-center ${isUp ? 'bottom-20' : 'top-20'}`}>
        <p className="text-lg font-bold text-gray-200 group-hover:text-sky-400 transition-colors duration-300">
          {mission.name}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {year}
        </p>
      </div>

      {/* Connection Line */}
      <div
        className={`absolute w-0.5 h-12 bg-sky-500/50 group-hover:bg-sky-400 transition-colors duration-300
                    ${isUp ? 'bottom-8' : 'top-8'}`}
      />
      
      {/* Rocket and Smoke */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className={`absolute bottom-0 w-full flex justify-center ${isActive ? 'animate-smoke' : 'opacity-0'}`}>
          <div className="w-2 h-2 bg-white rounded-full opacity-70" />
          <div className="w-3 h-3 bg-white rounded-full opacity-50 ml-1" />
          <div className="w-2 h-2 bg-white rounded-full opacity-70 ml-1" />
        </div>
        <div className={`transform transition-transform duration-300 group-hover:scale-125 ${isActive ? 'animate-rocket-launch' : ''}`}>
          <RocketIcon className="w-8 h-8 text-gray-400 group-hover:text-sky-400 group-hover:drop-shadow-[0_0_8px_theme(colors.sky.500)] transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
