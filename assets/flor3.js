import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// FLOR DE CEMPASÚCHIL
    var flor3 = new THREE.TorusKnotGeometry(8,3,165,12,12,11);
    
    var materialFlor3 = new THREE.MeshLambertMaterial({
    color: 0xd42f1a,side: THREE.DoubleSide
    });

    var meshFlor3 = new THREE.Mesh(flor3, materialFlor3);
    //scene.add(mesh7);

    const FLOR3=new THREE.Group();
        FLOR3.add(meshFlor3);
        FLOR3.position.set(x,y,z);
    
        return FLOR3;
}