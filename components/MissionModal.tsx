
import React from 'react';
import { Mission } from '../types';
import { NasaLogo, IsroLogo, SpacexLogo } from './icons';

interface MissionModalProps {
  mission: Mission;
  onClose: () => void;
}

const AgencyLogo: React.FC<{ agency: Mission['agency'] }> = ({ agency }) => {
  switch (agency) {
    case 'NASA':
      return <NasaLogo className="w-24 h-auto" />;
    case 'ISRO':
      return <IsroLogo className="w-24 h-auto" />;
    case 'SpaceX':
      return <SpacexLogo className="w-24 h-auto" />;
    default:
      return null;
  }
};

const getOutcomeColor = (outcome: Mission['outcome']) => {
  switch (outcome) {
    case 'Success': return 'text-green-400';
    case 'Failure': return 'text-red-400';
    case 'Ongoing': return 'text-blue-400';
    case 'Partial Success': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
}

const MissionModal: React.FC<MissionModalProps> = ({ mission, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-black/50 border border-gray-800 rounded-lg shadow-2xl shadow-sky-900/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={mission.image}
          alt={mission.name}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-sky-400">{mission.name}</h2>
              <p className="text-md text-gray-400 mt-1">{mission.date}</p>
            </div>
            <AgencyLogo agency={mission.agency} />
          </div>
          <p className={`mt-4 font-bold ${getOutcomeColor(mission.outcome)}`}>
            Outcome: {mission.outcome}
          </p>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed flex-grow">
            {mission.description}
          </p>
          <button
            onClick={onClose}
            className="mt-6 self-end px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionModal;
