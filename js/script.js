
// Canvas
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const scene = new THREE.Scene();
const container = document.querySelector("#canvas-container");

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth * .95 , window.innerHeight * .85);
container.appendChild( renderer.domElement );


// Camera
const VIEW_ANGLE = 70;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 1000;
const camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  WIDTH / HEIGHT,
  NEAR,
  FAR
);
camera.position.y = -40;
camera.position.z = 100;




// Cube
const geometry = new THREE.BoxGeometry( 40, 40, 40 );
const material = new THREE.MeshLambertMaterial( { color: 0xdddddd } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = -100;
cube.position.z = -250;
cube.rotation.x = .3;
// cube.rotation.y = 10;





// Sphere
const RADIUS = 25;
const SEGMENTS = 32;
const RINGS = 32;

const sphereMaterial =
  new THREE.MeshLambertMaterial(
    {
      color: 0xffdddd
    });
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(
    RADIUS,
    SEGMENTS,
    RINGS),

  sphereMaterial);

sphere.position.x = 100;
sphere.position.y = 0;
sphere.position.z = -250;
scene.add(sphere);


// Light Source
const lightSource = new THREE.Mesh(
  new THREE.SphereGeometry(
    2,
    8,
    8),
  new THREE.MeshBasicMaterial( { color: 0xdddddd } ));
scene.add(lightSource);

const pointLight =
  new THREE.PointLight(0xFFFFFF);

scene.add(pointLight);

const PI = Math.PI;
const lightPeriod = 320;
const lightXAmplitude = 300;
const lightYAmplitude = 150;
const lightZAmplitude = 150;
const lightZOffset = -250;

let lightXPos;
let lightYPos;
let lightZPos;

const sinConst = PI / (lightPeriod / 2);
pointLight.position.x = lightXPos;
pointLight.position.y = lightYPos;
pointLight.position.z = lightZPos;
lightSource.position.x = lightXPos;
lightSource.position.y = lightYPos;
lightSource.position.z = lightZPos;


let t = 0;

function render() {
  t += 1;
  lightXPos = Math.sin(sinConst * t + ( PI * 15/8 )) * lightXAmplitude;
  lightYPos = Math.sin(sinConst * t + ( PI * 15/8 )) * lightYAmplitude;
  lightZPos = Math.sin(sinConst * t + ( PI * 1/2 )) * lightZAmplitude + lightZOffset;

  requestAnimationFrame( render );

  cube.rotation.y -= 0.002;
  pointLight.position.x = lightXPos;
  lightSource.position.x = lightXPos;
  pointLight.position.y = lightYPos;
  lightSource.position.y = lightYPos;
  pointLight.position.z = lightZPos;
  lightSource.position.z = lightZPos;

  renderer.render( scene, camera );
}

render();

