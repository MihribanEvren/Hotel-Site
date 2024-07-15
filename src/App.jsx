import { useEffect, useState } from 'react';
import './App.css';
import Background from './components/background/Background';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
  let heroData = [
    { text1: 'Discover', text2: 'your perfect escape' },
    { text1: 'Experience', text2: 'luxury and comfort' },
    { text1: 'Unwind', text2: 'in serene surroundings' },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
