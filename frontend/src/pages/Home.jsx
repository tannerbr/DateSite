import { useEffect, useState } from 'react';
import '../components/Home.css';
import '../components/Navbar.css';

const headshots = [
  'model1.JPG',
  'surfing.JPG',
  'model3.JPG',
  'guitar4.JPG',
  'model4.JPG',
  'guitar2.JPG',
  'model5.JPG',
  'model6.JPG',
  'model7.JPG',
  'model8.JPG',
  'model9.JPG',
  'model10.JPG',
  'model11.JPG',
  'model12.JPG',
];

const introSequence = [
  'Dating in Provo not as fun as you thought?',
  'Sick of games?',
  'Want to laugh till it hurts?',
  'Get to know Tanner...',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [introIndex, setIntroIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showFinalIntro, setShowFinalIntro] = useState(false);
  const [startCarousel, setStartCarousel] = useState(false); // new state to delay carousel start

  // Intro text sequence
  useEffect(() => {
    if (introIndex >= introSequence.length) {
      setFade(false);
      // small delay before showing images
      setTimeout(() => {
        setShowFinalIntro(true);
        setStartCarousel(true); // start carousel after delay
      }, 800); // 0.8s delay for natural transition
      return;
    }

    setFade(true);
    const visibleTimer = setTimeout(() => {
      setFade(false);
      const nextTimer = setTimeout(() => {
        setIntroIndex((prev) => prev + 1);
      }, 500); // fade-out duration
      return () => clearTimeout(nextTimer);
    }, 2000); // visible duration

    return () => clearTimeout(visibleTimer);
  }, [introIndex]);

  // Rotate headshots continuously after intro
  useEffect(() => {
    if (!startCarousel) return;

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % headshots.length);
    }, 4000);

    return () => clearInterval(imageInterval);
  }, [startCarousel]);

  return (
    <section className="home">
      <div className="intro">
        {introIndex < introSequence.length && (
          <h1 className={fade ? 'fade-in' : 'fade-out'}>
            {introSequence[introIndex]}
          </h1>
        )}
        {showFinalIntro && (
          <p className="fade-in">Meet Tanner Briggs, he's not too nice....he's just not toxic</p>
        )}
      </div>

      {startCarousel && (
        <div className="carousel fade-in">
          {headshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Headshot ${index + 1}`}
              className={`fade ${index === currentImage ? 'visible' : ''}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
