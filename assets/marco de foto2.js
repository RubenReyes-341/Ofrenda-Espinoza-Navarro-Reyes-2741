import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// CUADRO PARA FOTO

//  MARCO
    var marco= new THREE.BoxGeometry(8,10,3);
    
    var materialMarco = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,side: THREE.DoubleSide
    });

    var meshMarco = new THREE.Mesh(marco, materialMarco);
    //scene.add(mesh8);
    meshMarco.position.set(-11,3,0);

//  "FOTO"
    var foto=new THREE.PlaneGeometry(6,8);
    var textFoto=new THREE.TextureLoader().load("./assets/cornelio.jpg");
    var materialFoto=new THREE.MeshLambertMaterial({map:textFoto,side: THREE.DoubleSide});
    var meshFoto=new THREE.Mesh(foto,materialFoto);
    meshFoto.position.set(-11,3,1.6);
    //scene.add(mesh9);

    const MarcoFoto=new THREE.Group();
            MarcoFoto.add(meshMarco,meshFoto);
            MarcoFoto.position.set(x,y,z);
        
            return MarcoFoto;
}