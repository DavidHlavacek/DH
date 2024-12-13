
import { useEffect, useRef } from 'react';
import './index.scss';

const StarBackground = () => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const isMovingRef = useRef(false);
    const movingTimeoutRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            starsRef.current = Array.from({ length: 150 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                parallaxFactor: Math.random() * 0.5 + 0.5
            }));
        };

        const drawStar = (x, y, size, rotation) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (i * 4 * Math.PI) / 5;
                const dx = Math.cos(angle) * size;
                const dy = Math.sin(angle) * size;
                i === 0 ? ctx.moveTo(dx, dy) : ctx.lineTo(dx, dy);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            starsRef.current.forEach(star => {
                if (isMovingRef.current) {
                    // Mouse moving behavior - parallax effect
                    const dx = mouseRef.current.x - canvas.width / 2;
                    const dy = mouseRef.current.y - canvas.height / 2;
                    star.x -= dx * 0.002 * star.parallaxFactor;
                    star.y -= dy * 0.002 * star.parallaxFactor;
                } else {
                    // Idle behavior - gentle movement and mouse attraction
                    const dx = mouseRef.current.x - star.x;
                    const dy = mouseRef.current.y - star.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 200) {
                        // Orbit around mouse when close
                        const angle = Math.atan2(dy, dx);
                        star.x += Math.cos(angle) * (distance * 0.001);
                        star.y += Math.sin(angle) * (distance * 0.001);
                    } else {
                        // Random movement when far
                        star.x += star.speedX;
                        star.y += star.speedY;
                    }
                }

                // Rotation
                star.rotation += star.rotationSpeed;

                // Screen wrapping
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                drawStar(star.x, star.y, star.size, star.rotation);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            isMovingRef.current = true;
            
            if (movingTimeoutRef.current) {
                clearTimeout(movingTimeoutRef.current);
            }
            
            movingTimeoutRef.current = setTimeout(() => {
                isMovingRef.current = false;
            }, 100);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        
        resizeCanvas();
        createStars();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="star-background" />;
};

export default StarBackground;