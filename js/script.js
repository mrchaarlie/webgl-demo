const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
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

const container = document.querySelector("#canvas-container");


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth * .95 , window.innerHeight * .85);
container.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 1, 1, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xdddddd } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;





function render() {
  requestAnimationFrame( render );
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}
render();
