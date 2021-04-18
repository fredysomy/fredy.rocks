import * as THREE from "three";
function scenery() {
  var scene = new THREE.Scene()
  
  const camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0,0,10)
  const renderer=new THREE.WebGLRenderer({ alpha: true ,canvas:document.querySelector("canvas.webgl")})
  renderer.setSize(window.innerWidth,window.innerHeight)
  
  const geometry = new THREE.BoxGeometry();
  const torus=new THREE.SphereGeometry(0.5,30,30)
 

  const material = new THREE.MeshNormalMaterial( { color:"cyan" } );
  material.side = THREE.DoubleSide;
  material.shininess = 100;
 
  const grp=new THREE.Group()
  

  for(var i=0;i<=30;i++){
    const cube = new THREE.Mesh( geometry, material );
    const torusM=new THREE.Mesh(torus,material)
    torusM.position.set(
      (Math.random()-0.3)*20,
      (Math.random()-0.3)*20,
      (Math.random()-0.3)*20,

    )
    cube.position.set(
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,

    )
    grp.add(torusM,cube)


  }
  
  scene.add( grp);
  const animate = function () {
    requestAnimationFrame( animate );
    grp.rotation.x+=0.009
  grp.rotation.y+=0.009
  
 
    renderer.render( scene, camera );
  };
window.addEventListener("scroll",(e)=>{
  grp.rotation.x+=0.06
  grp.rotation.y+=0.06
  
  
})
  animate();

}
export default scenery;
