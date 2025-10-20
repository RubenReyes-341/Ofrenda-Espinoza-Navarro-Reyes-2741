import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// Naranja
var geoNaranja = new THREE.SphereGeometry(0.6, 32, 32);
var matNaranja = new THREE.MeshLambertMaterial({ color: 0xffa500 });
var meshNaranja = new THREE.Mesh(geoNaranja, matNaranja);
meshNaranja.position.set(3.8, 1, 0);
//scene.add(meshNaranja);

const NARANJA = new THREE.Group();
    NARANJA.add(meshNaranja);
    NARANJA.position.set(x, y, z);
    
    return NARANJA;
}