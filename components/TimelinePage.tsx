
import React, { useState, useRef, useEffect } from 'react';
import { Mission } from '../types';
import { missions as missionData } from '../data/missions';
import MissionCard from './MissionCard';
import MissionModal from './MissionModal';

const TimelinePage: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [activeMissionIndex, setActiveMissionIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const sortedMissions = [...missionData].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const handleMissionClick = (mission: Mission, index: number) => {
    setActiveMissionIndex(index);
    // Delay setting the mission to allow animation to play
    setTimeout(() => {
      setSelectedMission(mission);
    }, 500);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
    setActiveMissionIndex(null);
  };
  
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      timeline.scrollLeft += e.deltaY;
    };
    
    timeline.addEventListener('wheel', onWheel);
    return () => timeline.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center p-4 animate-fade-in">
       <h1 className="absolute top-8 text-3xl md:text-4xl font-bold tracking-wider text-gray-300">Space Mission Timeline</h1>
       <p className="absolute top-20 text-sm md:text-md text-gray-400">Scroll or swipe to explore missions</p>
      <div
        ref={timelineRef}
        className="w-full h-full flex items-center overflow-x-auto scrollbar-hide py-20"
        style={{ perspective: '1000px' }}
      >
        <div className="flex flex-row items-center justify-start h-full px-16 md:px-32" style={{ transformStyle: 'preserve-3d' }}>
          {/* Timeline central line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-sky-500/30" style={{ transform: 'translateY(-50%)' }} />

          {sortedMissions.map((mission, index) => (
            <MissionCard
              key={mission.name}
              mission={mission}
              index={index}
              onClick={() => handleMissionClick(mission, index)}
              isActive={activeMissionIndex === index}
            />
          ))}
        </div>
      </div>
      {selectedMission && (
        <MissionModal mission={selectedMission} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TimelinePage;
