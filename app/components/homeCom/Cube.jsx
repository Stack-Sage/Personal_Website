'use client'
import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cube-container hover:brightness-125 hover:contrast-125 hover:invert hue-rotate-180 transition-transform duration-500 ease-out hover:duration-500 ">
        <div className="cube">
          <div className="face front "><span>JavaScript</span></div>
          <div className="face back">React JS</div>
          <div className="face right">Next JS</div>
          <div className="face left">Tailwind CSS</div>
          <div className="face top">Node JS</div>
          <div className="face bottom">Python</div>
        </div>
      
        {/* Tooltips */}
        <div className="tooltip tooltip-front">JavaScript</div>
        <div className="tooltip tooltip-back">React JS</div>
        <div className="tooltip tooltip-right">Next JS</div>
        <div className="tooltip tooltip-left">Tailwind CSS</div>
        <div className="tooltip tooltip-top">Node JS</div>
        <div className="tooltip tooltip-bottom">Python</div>
      </div>
    </StyledWrapper>
  );
}

const gap = 90;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  .cube-container {
    position: relative;
    width: 200px;
    height: 200px;
    perspective: 800px;
    margin: 50px auto;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate 8s infinite linear;
    z-index: 2;
  }

  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    line-height: 200px;
    background: rgba(0,0,0,0.6);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    backdrop-filter: blur(3px);
  }

  .front { transform: translateZ(100px); }
  .back { transform: rotateY(180deg) translateZ(100px); }
  .right { transform: rotateY(90deg) translateZ(100px); }
  .left { transform: rotateY(-90deg) translateZ(100px); }
  .top { transform: rotateX(90deg) translateZ(100px); }
  .bottom { transform: rotateX(-90deg) translateZ(100px); }

  /* Tooltip styles */
  .tooltip {
    position: absolute;
    padding: 6px 12px;
    border-radius: 50px;
    color: black;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px) scale(0.9);
    transition: opacity 0.6s ease, transform 0.6s ease;
    
  }

  /* Line connecting tooltip to cube */
  .tooltip::before {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, rgba(0,255,255,0.7), rgba(0,140,255,0.7));
   
  }

  /* Cool gradients for dark bg */
  .tooltip-front { background: linear-gradient(135deg, #00f0ff, #0066ff); }
  .tooltip-back { background: linear-gradient(135deg, #00ffaa, #007755); }
  .tooltip-right { background: linear-gradient(135deg, #ff00cc, #6600ff); }
  .tooltip-left { background: linear-gradient(135deg, #ffae00, #ff005e); }
  .tooltip-top { background: linear-gradient(135deg, #a8ff00, #00ff88); }
  .tooltip-bottom { background: linear-gradient(135deg, #ff4444, #ff0080); }

  /* Positioning + lines */
  .tooltip-front {
    top: 50%;
    left: calc(100% + ${gap}px);
    transform: translateY(-50%);
  }
  .tooltip-front::before {
    top: 50%;
    left: -${gap}px;
    width: ${gap}px;
    height: 2px;
    transform: translateY(-50%);
  }

  .tooltip-back {
    top: 50%;
    right: calc(100% + ${gap}px);
    transform: translateY(-50%);
  }
  .tooltip-back::before {
    top: 50%;
    right: -${gap}px;
    width: ${gap}px;
    height: 2px;
    transform: translateY(-50%);
  }

  .tooltip-right {
    top: 0%;
    left: calc(100% + ${gap}px);
  }
  .tooltip-right::before {
    top: 50%;
    left: -${gap}px;
    width: ${gap}px;
    height: 2px;
  }

  .tooltip-left {
    bottom: 0%;
    right: calc(100% + ${gap}px);
  }
  .tooltip-left::before {
    top: 50%;
    right: -${gap}px;
    width: ${gap}px;
    height: 2px;
  }

  .tooltip-top {
    bottom: calc(100% + ${gap}px);
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltip-top::before {
    bottom: -${gap}px;
    left: 50%;
    width: 2px;
    height: ${gap}px;
    transform: translateX(-50%);
  }

  .tooltip-bottom {
    top: calc(100% + ${gap}px);
    left: 50%;
    transform: translateX(-50%);
  }
  .tooltip-bottom::before {
    top: -${gap}px;
    left: 50%;
    width: 2px;
    height: ${gap}px;
    transform: translateX(-50%);
  }

  /* Hover: show tooltips with animation */
  .cube-container:hover .tooltip {
    opacity: 1;
    transform: translateY(0) scale(1);
    animation: fadePop 0.8s ease forwards, glowPulse 1.5s infinite ease-in-out;
  }

  @keyframes fadePop {
    0% { opacity: 0; transform: translateY(10px) scale(0.9); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 15px rgba(0,255,255,0.4); }
    50% { box-shadow: 0 0 50px rgba(0,255,255,0.9); }
  }

  @keyframes rotate {
    0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
  }
`;

export default Card;
