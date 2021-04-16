import * as THREE from "three";
export default function ThreeEntryPoint(sceneRef) {
  var scene = new THREE.Scene()
  const camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0,0,4)
  const renderer=new THREE.WebGLRenderer({antialias:true})
  renderer.setSize(window.innerWidth,window.innerHeight)
  sceneRef.appendChild(renderer.domElement)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();

}
