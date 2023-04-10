import * as THREE from "three";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


let camera;
let cube2;
export function createAnimation(app) {
    const scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    //Set background scene
    const skyboxLoader = new THREE.CubeTextureLoader().setPath("/assets/1024/");
    const skybox = skyboxLoader.load([
        "xpos.png",
        "xneg.png",
        "ypos.png",
        "yneg.png",
        "zpos.png",
        "zneg.png",
    ]);
    scene.background = skybox;
//Create stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  sizeAttenuation: true,
  vertexColors: THREE.VertexColors,
});

const starCount = 5000;
const starPositions = new Float32Array(starCount * 3);
const starSizes = new Float32Array(starCount);

for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 1000;
    starSizes[i] = Math.random() * 0.5;
}
starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3)
);
starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

const geometry = new THREE.BoxGeometry(.5, .5, .5);
const material = new THREE.MeshBasicMaterial({
    color: 0x0095DD,
    wireframe: true,
    wireframeLinewidth: 2
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

// Function to reveal the welcome text
function revealWelcomeText() {
    const welcomeText = document.getElementById("welcome-text");
    welcomeText.style.opacity = "1";
}

// Function to hide the welcome text and show the intro box
function hideWelcomeTextAndShowIntroBox() {
    const welcomeText = document.getElementById("welcome-text");
    const introBox = document.getElementById("intro-box");

    welcomeText.style.opacity = "0";
    setTimeout(() => {
        welcomeText.style.display = "none";
        introBox.style.display = "block";
        setTimeout(() => {
            introBox.style.opacity = "1";
        }, 100);
    }, 1000);
}
const totalAnimationDuration = 8;
let animationFinished = false;
//Controls for the orbit stars movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
let initialCameraAnimationDone = false;
camera.position.z = 300;
//Creates second location for projects
const cubeGeometry2 = new THREE.BoxGeometry();
const cubeMaterial2 = new THREE.MeshBasicMaterial({ 
    color: 0x00ff00,
    wireframe: true,
    wireframeLinewidth: 2 });
cube2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
cube2.position.set(100, 0, -200); // Set the position of the second cube
scene.add(cube2);

const animateCube2 = () => {
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
};

function animate() {
    requestAnimationFrame(animate);
    if (!initialCameraAnimationDone) {
        // Zoom the camera from the initial position to the default position
        gsap.to(camera.position, {
            duration: 2,
            z: 5,
            onUpdate: () => {
                camera.updateProjectionMatrix();
            },
            onComplete: () => {
                initialCameraAnimationDone = true;
            },
        });
    }
    if (!animationFinished) {
        // Animate the x, y and z positions of the objects
        gsap.to(cube.position, { duration: 5, x: 1 });
        gsap.to(cube.position, { duration: 5, y: 1 });
        gsap.to(cube.position, { duration: 5, z: 1 });

        // Animate the x, y and z scale/size of the objects
        gsap.to(cube.scale, { duration: 8, x: 20 });
        gsap.to(cube.scale, { duration: 8, y: 20 });
        gsap.to(cube.scale, { duration: 8, z: 20 });
        // Animate the x, y and z rotation of the objects
        gsap.to(cube.rotation, { duration: 2, x: 3 });
        gsap.to(cube.rotation, { duration: 2, y: 3 });
        gsap.to(cube.rotation, { duration: 2, z: 3 });

    }
    else {
        //Rotate once scale is done
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        cube.rotation.z += 0.001;
        //Rotate stars
        stars.rotation.x += -0.001;
        stars.rotation.y += -0.001;
        stars.rotation.z += -0.001;
    }
    controls.update();
    animateCube2();
    renderer.render(scene, camera);
}

animate();
app.appendChild(renderer.domElement);
// Trigger the welcome text and intro box display
revealWelcomeText();
setTimeout(revealWelcomeText, totalAnimationDuration * 1000);
setTimeout(() => {
    hideWelcomeTextAndShowIntroBox();
}, totalAnimationDuration * 300);
setTimeout(() => {
    animationFinished = true;
}, totalAnimationDuration * 200);
}
export { camera };
export { cube2 };
export function moveCameraToPosition(x, y, z) {
    let targetPosition = new THREE.Vector3(x, y, z);
    let duration = 2;
    gsap.to(camera.position, {
      duration,
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });
  }
  //Delay function for time
export async function delayCamera(n) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(n);
}