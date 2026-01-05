// Three.js 3D Scene
let scene, camera, renderer, objects = [];
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function initThreeScene() {
    const container = document.getElementById('three-container');
    if (!container) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = null; // Transparent background
    scene.fog = null;

    // Camera
    camera = new THREE.PerspectiveCamera(
        50,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 15;

    // Renderer
    const existingCanvas = container.querySelector('canvas');
    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        canvas: existingCanvas || undefined
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Add canvas if it doesn't exist
    if (!existingCanvas) {
        container.appendChild(renderer.domElement);
    }

    // Check if dark mode
    const isDark = document.documentElement.classList.contains('dark');
    updateColors(isDark);

    // Create 3D objects
    createObjects();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x2b7cee, 1, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x60a5fa, 0.8, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Mouse interaction
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    // Watch for dark mode changes
    const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('dark');
        updateColors(isDark);
    });
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });

    animate();
}

function createObjects() {
    // Clear existing objects
    objects.forEach(obj => scene.remove(obj));
    objects = [];

    const isDark = document.documentElement.classList.contains('dark');
    const primaryColor = isDark ? 0x2b7cee : 0x3b82f6;
    const accentColor = isDark ? 0x60a5fa : 0x60a5fa;

    // Create multiple geometric shapes
    const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.OctahedronGeometry(1.5, 0),
        new THREE.TetrahedronGeometry(1.5, 0),
        new THREE.IcosahedronGeometry(1.2, 0),
        new THREE.TorusGeometry(1, 0.3, 8, 16),
    ];

    geometries.forEach((geometry, index) => {
        const material = new THREE.MeshStandardMaterial({
            color: index % 2 === 0 ? primaryColor : accentColor,
            metalness: 0.7,
            roughness: 0.3,
            emissive: index % 2 === 0 ? primaryColor : accentColor,
            emissiveIntensity: 0.2,
        });

        const mesh = new THREE.Mesh(geometry, material);
        
        // Position objects in a circle
        const angle = (index / geometries.length) * Math.PI * 2;
        mesh.position.x = Math.cos(angle) * 4;
        mesh.position.y = Math.sin(angle) * 2;
        mesh.position.z = (index - 2) * 2;
        
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        mesh.userData = {
            originalX: mesh.position.x,
            originalY: mesh.position.y,
            originalZ: mesh.position.z,
            rotationSpeedX: (Math.random() - 0.5) * 0.02,
            rotationSpeedY: (Math.random() - 0.5) * 0.02,
            rotationSpeedZ: (Math.random() - 0.5) * 0.02,
        };

        scene.add(mesh);
        objects.push(mesh);
    });

    // Add wireframe spheres for depth
    for (let i = 0; i < 8; i++) {
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshBasicMaterial({
            color: primaryColor,
            wireframe: true,
            opacity: 0.3,
            transparent: true,
        });
        const sphere = new THREE.Mesh(geometry, material);
        
        const angle = (i / 8) * Math.PI * 2;
        sphere.position.x = Math.cos(angle) * 6;
        sphere.position.y = Math.sin(angle) * 3;
        sphere.position.z = (Math.random() - 0.5) * 10;
        
        sphere.userData = {
            originalX: sphere.position.x,
            originalY: sphere.position.y,
            rotationSpeed: (Math.random() - 0.5) * 0.01,
        };

        scene.add(sphere);
        objects.push(sphere);
    }
}

function updateColors(isDark) {
    const primaryColor = isDark ? 0x2b7cee : 0x3b82f6;
    const accentColor = isDark ? 0x60a5fa : 0x60a5fa;
    
    if (scene) {
        scene.background = null; // Keep transparent
    }

    objects.forEach((obj, index) => {
        if (obj.material) {
            if (obj.material.emissive !== undefined) {
                obj.material.color.setHex(index % 2 === 0 ? primaryColor : accentColor);
                obj.material.emissive.setHex(index % 2 === 0 ? primaryColor : accentColor);
            } else {
                obj.material.color.setHex(primaryColor);
            }
        }
    });
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.01;
    mouseY = (event.clientY - windowHalfY) * 0.01;
}

function onWindowResize() {
    const container = document.getElementById('three-container');
    if (!container || !camera || !renderer) return;

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (!camera || !renderer || !scene) return;

    // Rotate camera based on mouse
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    // Animate objects
    objects.forEach((obj, index) => {
        if (obj.userData.rotationSpeedX !== undefined) {
            obj.rotation.x += obj.userData.rotationSpeedX;
            obj.rotation.y += obj.userData.rotationSpeedY;
            obj.rotation.z += obj.userData.rotationSpeedZ;
        } else if (obj.userData.rotationSpeed !== undefined) {
            obj.rotation.x += obj.userData.rotationSpeed;
            obj.rotation.y += obj.userData.rotationSpeed;
        }

        // Float animation
        const time = Date.now() * 0.001;
        if (obj.userData.originalY !== undefined) {
            obj.position.y = obj.userData.originalY + Math.sin(time + index) * 0.5;
        }
    });

    renderer.render(scene, camera);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for Three.js to load
        if (typeof THREE !== 'undefined') {
            initThreeScene();
        } else {
            window.addEventListener('load', initThreeScene);
        }
    });
} else {
    if (typeof THREE !== 'undefined') {
        initThreeScene();
    } else {
        window.addEventListener('load', initThreeScene);
    }
}

