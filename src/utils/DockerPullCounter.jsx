import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';

const DockerPullCounter = () => {
  const [pullCount, setPullCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(1);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const TARGET_PULLS = 15000;

  // this makes the animation only happen when the community impact section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // triggers the animation when the section is visible and the pull count is not null
          if (pullCount !== null) {
            animateProgress();
          }
        }
      },
      // this means the animation will trigger when 20% of the section is visible
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, pullCount]);

  useEffect(() => {
    const fetchPullCount = async () => {
      try {
        const response = await fetch('https://dockerhub-api-manjilasingh-manjilas-projects.vercel.app/api/docker');
        const data = await response.json();
        setPullCount(data.pull_count);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching pull count:', err);
        setError('Failed to fetch pull count');
        setLoading(false);
      }
    };

    fetchPullCount();
    const interval = setInterval(fetchPullCount, 300000);
    return () => clearInterval(interval);
  }, []);

  const animateProgress = () => {
    const targetProgress = Math.min((pullCount / TARGET_PULLS) * 100, 100);
    let currentProgress = 0;
    const duration = 2000;
    const steps = 50;
    const increment = targetProgress / steps;
    const stepDuration = duration / steps;
    const countIncrement = pullCount / steps;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetProgress) {
        currentProgress = targetProgress;
        clearInterval(timer);
        
        // Once the current count matches the docker pull count, show the confetti
        setShowConfetti(true);
        setConfettiOpacity(1);
        
        // Start fade out after 3 seconds
        setTimeout(() => {
          setConfettiOpacity(0);
          // AFTER the 3 seconds of fade out this runs to remove the confetti
          setTimeout(() => setShowConfetti(false), 500);
        }, 3000);
      }
      setAnimatedProgress(currentProgress);
      // This is waht gets displayed above "total pulls"
      setAnimatedCount(Math.floor((currentProgress / targetProgress) * pullCount));
    }, stepDuration);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return null;
  }

  return (
    <div ref={containerRef}>
      {showConfetti && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            pointerEvents: 'none', 
            zIndex: 9999,
            opacity: confettiOpacity,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={450}
            recycle={false}
            gravity={0.2}
            initialVelocityY={5}
            colors={['#FFD700', '#FFA500', '#FF69B4', '#00CED1', '#7B68EE']}
          />
        </div>
      )}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <i className="fab fa-docker text-primary text-3xl"></i>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Docker Pulls</h4>
              <p className="text-gray-500">awiciroh/ciroh-ngen-image</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{animatedCount.toLocaleString()}</div>
            <div className="text-gray-500">total pulls</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Progress to {TARGET_PULLS.toLocaleString()} pulls</span>
          </div>
          <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
            <div 
              style={{ width: `${animatedProgress}%` }}
              className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockerPullCounter; 