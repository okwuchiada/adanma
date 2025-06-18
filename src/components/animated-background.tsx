"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    };

    updateTheme();

    // Listen for theme changes (optional enhancement)
    window.addEventListener("storage", updateTheme);

    return () => {
      window.removeEventListener("storage", updateTheme);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = 30;
    const maxDistance = 200;

    const getParticleColor = () => {
      return currentTheme === "dark"
        ? "rgba(59, 130, 246, 0.5)"
        : "rgba(59, 130, 246, 0.3)";
    };

    const getLineColor = () => {
      return currentTheme === "dark"
        ? "rgba(59, 130, 246, 0.2)"
        : "rgba(59, 130, 246, 0.1)";
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.directionX = (Math.random() - 0.5) * 0.5;
        this.directionY = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 3 + 1;
        this.color = getParticleColor();
      }

      update() {
        if (this.x > width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            if (!ctx) return;
            ctx.strokeStyle = getLineColor();
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.color = getParticleColor(); // update color dynamically!
        particle.draw();
      });

      connect();
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentTheme]); // re-run animation when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-40"
      aria-hidden="true"
    />
  );
}
