var wrapper = document.getElementById('glWrapper');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, wrapper.clientWidth/ wrapper.clientHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( wrapper.clientWidth,wrapper.clientHeight);
wrapper.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
	renderer.render( scene, camera );
}

render();
