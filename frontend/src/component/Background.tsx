import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 60;

    // === THREE JS SETUP ===
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2, // left
      (frustumSize * aspect) / 2,  // right
      frustumSize / 2,             // top
      frustumSize / -2,            // bottom
      0.1,                         // near
      1000                         // far
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.set(0, 0, 30);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    // Geometry and materials
    const geometry = new THREE.SphereGeometry(0.15, 24, 24);
    const material = new THREE.MeshBasicMaterial({ color: 0xcdd0d4 });
    const ballmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ball = new THREE.Mesh(geometry, ballmaterial);
    ball.scale.set(20, 20, 20);
    ball.visible = false;
    ball.position.set(1000, 1000, 1000);
    scene.add(ball);

    // Lights
    const light = new THREE.PointLight(0xffffff);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    light.position.set(20, 20, 20);
    scene.add(light, ambientLight);

    // Points
    const points: { mesh: THREE.Mesh; originalPos: THREE.Vector3 }[] = [];

    function addPoint(x: number, y: number, z: number) {
      const star = new THREE.Mesh(geometry, material);
      star.position.set(x, y, z);
      (star as any).userData.isPoint = true;
      scene.add(star);
      points.push({
        mesh: star,
        originalPos: new THREE.Vector3(x, y, z),
      });
    }

    function clearPoints() {
      for (let i = scene.children.length - 1; i >= 0; i--) {
        const obj = scene.children[i];
        if ((obj as any).userData.isPoint) {
          scene.remove(obj);
        }
      }
      points.length = 0;
    }

    function addPoints() {
      clearPoints();
      const zDepth = 0;
      const spacing = 4;
      // Use orthographic camera bounds for visible area
      const visibleWidth = camera.right - camera.left;
      const visibleHeight = camera.top - camera.bottom;
      const cols = Math.floor(visibleWidth / spacing);
      const rows = Math.floor(visibleHeight / spacing);
      const xOffset = (cols - 1) * spacing / 2;
      const yOffset = (rows - 1) * spacing / 2;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing - xOffset;
          const y = i * spacing - yOffset;
          addPoint(x, y, zDepth);
        }
      }
    }

    addPoints();

    // Handle resize
    function handleResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      const aspect = window.innerWidth / window.innerHeight;
      camera.left = (frustumSize * aspect) / -2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      addPoints();
    }
    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastMouseMoveTime = Date.now();
    const mouseIdleThreshold = 200;

    function onMouseMove(e: MouseEvent) {
      lastMouseMoveTime = Date.now();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      if (intersectionPoint) {
        ball.position.set(intersectionPoint.x, intersectionPoint.y, 0);
      }
    }
    document.addEventListener("mousemove", onMouseMove);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      const ballPos = ball.position;
      const now = Date.now();
      const isMouseMoving = now - lastMouseMoveTime < mouseIdleThreshold;

      for (const point of points) {
        const { mesh, originalPos } = point;
        if (isMouseMoving) {
          const dist = mesh.position.distanceTo(ballPos);
          const threshold = 5;
          const pushStrength = 0.4;
          if (dist < threshold) {
            const pushDir = mesh.position.clone().sub(ballPos).normalize();
            const targetPos = mesh.position.clone().add(pushDir.multiplyScalar(pushStrength));
            mesh.position.lerp(targetPos, 0.3);
          } else {
            mesh.position.lerp(originalPos, 0.02);
          }
        } else {
          mesh.position.lerp(originalPos, 0.01);
        }
      }
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      clearPoints();
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default Background;