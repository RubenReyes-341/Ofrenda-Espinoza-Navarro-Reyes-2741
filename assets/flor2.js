import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){
    
//CAMINO DE CEMAPASUCHIL
    var Camino=new THREE.PlaneGeometry(30,15);
    var textCamino=new THREE.TextureLoader().load("./assets/cempachuchil.jpg");
    textCamino.rotation=3.1416;
    textCamino.center.set(0.5, 0.5);
    var materialCamino=new THREE.MeshLambertMaterial({map:textCamino,side: THREE.DoubleSide});
    var meshCamino=new THREE.Mesh(Camino,materialCamino);
    meshCamino.position.set(0,0,0);
    meshCamino.rotation.x=1.5708;
    //scene.add(meshCamino);
    meshCamino.castShadow = true;
    meshCamino.receiveShadow = true;

    const FLOR2=new THREE.Group();
            FLOR2.add(meshCamino);
            FLOR2.position.set(x,y,z);
        
            return FLOR2;
}