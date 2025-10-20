import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// CAÑA
var geoCana = new THREE.CylinderGeometry(0.15, 0.15, 4, 16);
var matCana = new THREE.MeshLambertMaterial({ color: 0xc0a060 });
var meshCana = new THREE.Mesh(geoCana, matCana);
meshCana.rotation.z = 3.1416;
meshCana.position.set(9, 2, 0);
//scene.add(meshCana);

// Nudos de la caña
  var geoNudo = new THREE.TorusGeometry(0.16, 0.02, 8, 16);
  var matNudo = new THREE.MeshLambertMaterial({ color: 0x8b6f30 });
  var nudo = new THREE.Mesh(geoNudo, matNudo);
  nudo.rotation.x = 80;
  nudo.position.set(9,2, 0);
  //scene.add(nudo);

    var geoNudo = new THREE.TorusGeometry(0.16, 0.02, 8, 16);
  var matNudo = new THREE.MeshLambertMaterial({ color: 0x8b6f30 });
  var nudo2 = new THREE.Mesh(geoNudo, matNudo);
  nudo2.rotation.x = 80;
  nudo2.position.set(9,3, 0);
  //scene.add(nudo2);

   var geoNudo = new THREE.TorusGeometry(0.16, 0.02, 8, 16);
  var matNudo = new THREE.MeshLambertMaterial({ color: 0x8b6f30 });
  var nudo3 = new THREE.Mesh(geoNudo, matNudo);
  nudo3.rotation.x = 80;
  nudo3.position.set(9,1, 0);
  //scene.add(nudo3);

  const CAÑA = new THREE.Group();
      CAÑA.add(meshCana,nudo,nudo2,nudo3);
      CAÑA.position.set(x, y, z);
      
      return CAÑA;
}