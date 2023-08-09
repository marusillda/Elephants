import {useRef, useEffect, useMemo, useCallback} from 'react';
import {useResize} from '../../hooks/useResize.js';

export default function Rain() {
  const canvas = useRef();
  const canvasContext = useRef();
  const {width, height} = useResize();

  function randomNum(max, min) {
    return Math.floor(Math.random() * max) + min;
  }

  function RainDrops(x, y, endy, velocity, opacity) {

    this.x = x;
    this.y = y;
    this.endy = endy;
    this.velocity = velocity;
    this.opacity = opacity;

    this.draw = function () {
      canvasContext.current.beginPath();
      canvasContext.current.moveTo(this.x, this.y);
      canvasContext.current.lineTo(this.x, this.y - this.endy);
      canvasContext.current.lineWidth = 1;
      canvasContext.current.strokeStyle = "rgba(255, 255, 255, " + this.opacity + ")";
      canvasContext.current.stroke();
    }

    this.update = function () {
      let rainEnd = height + 100;
      if (this.y >= rainEnd) {
        this.y = this.endy - 100;
      } else {
        this.y = this.y + this.velocity;
      }
      this.draw();
    }
  }

  function createRainArray() {
    if (width===0) return [];

    const drops = [];
    for (let i = 0; i < 140; i++) {
      const rainXLocation = Math.floor(Math.random() * width) + 1;
      const rainYLocation = Math.random() * -500;
      const randomRainHeight = randomNum(10, 2);
      const randomSpeed = randomNum(20, .2);
      const randomOpacity = Math.random() * .55;
      drops.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
    }
    return drops;
  }

  const rainArray = useMemo(createRainArray, [width]);

  const animateRain = useCallback(() => {
    requestAnimationFrame(animateRain);
    canvasContext.current.clearRect(0, 0, width, height);

    for (let i = 0; i < rainArray.length; i++) {
      rainArray[i].update();
    }
  }, [rainArray, width, height]);

  useEffect(() => {
    if (width > 0 && height > 0) {
      canvas.current.width = width;
      canvas.current.height = height;
    }
  }, [width, height]);

  useEffect(() => {
    canvasContext.current = canvas.current.getContext('2d');
    animateRain();
  }, [animateRain]);

  return (
    <canvas ref={canvas}></canvas>
  );
}

