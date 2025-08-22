
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import TimelinePage from './components/TimelinePage';

const App: React.FC = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const enterTimeline = () => {
    setShowTimeline(true);
  };

  return (
    <div className="bg-black text-white font-mono h-screen w-full overflow-hidden">
      {showTimeline ? <TimelinePage /> : <HomePage onEnter={enterTimeline} />}
    </div>
  );
};

export default App;
