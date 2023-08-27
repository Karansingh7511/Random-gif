
import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gradient-bg items-center overflow-x-hidden">
      <h1 className="bg-white rounded-lg p-4 text-center mt-8 text-4xl font-bold shadow-md">
        RANDOM GIFs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-8 mt-8 p-4">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;

