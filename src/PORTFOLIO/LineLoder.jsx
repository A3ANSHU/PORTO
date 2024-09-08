import React from 'react';

// Keyframes for animation
const keyframes = `
@keyframes move {
  0% {
    transform: translateY(0vh);
  }
  50% {
    height: 100%;
    transform: translateY(-70vh);
  }
  90% {
    height: 50%;
  }
  100% {
    height: 10%;
    transform: translateY(-110vh);
  }
}`;

// Common styles for lines
const lineStyle = {
  width: '100%',
  height: '50px',
  position: 'absolute',
  animation: 'move 1.2s ease-in-out',
};

// Generate styles for each line with different delays and colors
const getLineStyle = (backgroundColor, delay) => ({
  ...lineStyle,
  backgroundColor,
  animationDelay: delay,
});

const LineLoader = () => {
  return (
    <>
      <style>{keyframes}</style>
      <div style={{
        display: 'flex',
        position: 'fixed',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        margin: '0 auto',
        transform: 'translateY(100vh)',
      }}>
        <div style={getLineStyle('#333', '0s')}></div>
        <div style={getLineStyle('orange', '0.2s')}></div>
        <div style={getLineStyle('#333', '0.4s')}></div>
        <div style={getLineStyle('orange', '0.6s')}></div>
        <div style={getLineStyle('#333', '0.8s')}></div>
      </div>
    </>
  );
};

export default LineLoader;
