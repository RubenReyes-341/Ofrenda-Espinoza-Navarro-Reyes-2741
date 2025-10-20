import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//cruz con flor 
var geoCruzVertical = new THREE.BoxGeometry(0.5, 4, 0.5);
var matCruz = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });
var barraVertical = new THREE.Mesh(geoCruzVertical, matCruz);
barraVertical.position.set(0, 2, 0);
//scene.add(barraVertical);

var geoCruzHorizontal = new THREE.BoxGeometry(2, 0.5, 0.5);
var barraHorizontal = new THREE.Mesh(geoCruzHorizontal, matCruz);
barraHorizontal.position.set(0, 3, 0);
//scene.add(barraHorizontal);

const CRUZ=new THREE.Group();
    CRUZ.add(barraHorizontal,barraVertical);
    CRUZ.position.set(x,y,z);

    return CRUZ;
}