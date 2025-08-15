'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

const ThreeJSScene = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let camera, scene, renderer, group;
        let particles, pointCloud, linesMesh;
        const particlesData = [];
        const maxParticleCount = 1000;
        let particleCount = 500;
        const r = 800;
        const rHalf = r / 2;

        const effectController = {
            showDots: true,
            showLines: true,
            minDistance: 150,
            limitConnections: false,
            maxConnections: 20,
            particleCount: 500,
        };

        const init = () => {
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
            camera.position.z = 1750;

            scene = new THREE.Scene();
            group = new THREE.Group();
            scene.add(group);

            const helper = new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(r, r, r)));
            helper.material.color.setHex(0x474747);
            helper.material.transparent = true;
            group.add(helper);

            const segments = maxParticleCount * maxParticleCount;
            const positions = new Float32Array(segments * 3);
            const colors = new Float32Array(segments * 3);

            const pMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 3,
                transparent: true,
            });

            particles = new THREE.BufferGeometry();
            const particlePositions = new Float32Array(maxParticleCount * 3);

            for (let i = 0; i < maxParticleCount; i++) {
                const x = Math.random() * r - r / 2;
                const y = Math.random() * r - r / 2;
                const z = Math.random() * r - r / 2;

                particlePositions[i * 3] = x;
                particlePositions[i * 3 + 1] = y;
                particlePositions[i * 3 + 2] = z;

                particlesData.push({
                    velocity: new THREE.Vector3(
                        -1 + Math.random() * 2,
                        -1 + Math.random() * 2,
                        -1 + Math.random() * 2
                    ),
                    numConnections: 0,
                });
            }

            particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));
            pointCloud = new THREE.Points(particles, pMaterial);
            group.add(pointCloud);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.minDistance = 1000;
            controls.maxDistance = 3000;

            animate();
        };

        const animate = () => {
            requestAnimationFrame(animate);
            group.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        init();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeJSScene;
