import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// FLOR DE CEMPASÚCHIL
    var flor = new THREE.TorusKnotGeometry(8,3,65,8,12,13);
    
    var materialFlor = new THREE.MeshLambertMaterial({
    color: 0xd42f1a,side: THREE.DoubleSide
    });

    var meshFlor = new THREE.Mesh(flor, materialFlor);
    //scene.add(mesh7);

    var flor2 = new THREE.TorusKnotGeometry(5,3,65,8,12,13);
    var meshFlor2 = new THREE.Mesh(flor2, materialFlor);
    meshFlor2.rotation.y=1.57;

    
    const Flores=new THREE.Group();
        Flores.add(meshFlor,meshFlor2);
        Flores.position.set(x,y,z);
    
        return Flores;
}