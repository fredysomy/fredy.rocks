import * as THREE from "three";
function scenery() {
  var scene = new THREE.Scene()
  
  const camera=new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0,0,20)
  const renderer=new THREE.WebGLRenderer({ alpha: true ,canvas:document.querySelector("canvas.webgl")})
  renderer.setSize(window.innerWidth,window.innerHeight)
  
  const geometry = new THREE.BoxGeometry();
  const torus=new THREE.SphereGeometry(0.5,30,30)
  const directionalLight = new THREE.DirectionalLight( "white", 1 );
scene.add( directionalLight );
 
  const material = new THREE.MeshLambertMaterial({
    color:"rgb(255,239,0)",
    emissive: 0xff75,
    emissiveIntensity: 1,
    side: THREE.DoubleSide
});
  material.side = THREE.DoubleSide;
  material.shininess = 100;

   
  const material1 = new THREE.MeshLambertMaterial({
    color:"#FF00D5",
    emissive: 0xff75,
    emissiveIntensity: 1,
    side: THREE.DoubleSide
});
  material1.side = THREE.DoubleSide;
  material1.shininess = 100;
 
  const grp=new THREE.Group()
  

  for(var i=0;i<=10;i++){
    //const cube = new THREE.Mesh( geometry, material );
    const torusM=new THREE.Mesh(torus,material)
    torusM.position.set(
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,

    )
    //cube.position.set(
     // (Math.random()-0.5)*20,
     // (Math.random()-0.5)*20,
    //  (Math.random()-0.5)*20,

    
    grp.add(torusM)


  }
  for(var j=0;j<=10;j++){
    //const cube = new THREE.Mesh( geometry, material );
    const torusM=new THREE.Mesh(torus,material1)
    torusM.position.set(
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,
      (Math.random()-0.5)*20,

    )
    //cube.position.set(
     // (Math.random()-0.5)*20,
     // (Math.random()-0.5)*20,
    //  (Math.random()-0.5)*20,

    
    grp.add(torusM)


  }
  
  scene.add( grp);
  const animate = function () {
    requestAnimationFrame( animate );
    grp.rotation.x+=0.009
  grp.rotation.y+=0.009
  
 
    renderer.render( scene, camera );
  };
window.addEventListener("scroll",(e)=>{
  grp.rotation.x+=0.07
  grp.rotation.y+=0.07
  
  
})
  animate();

}
export default scenery;
