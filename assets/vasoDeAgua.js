import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//VASO CON AGUA
var geoVaso = new THREE.CylinderGeometry(0.9, 0.7, 2, 32, 1, true);
var matVaso = new THREE.MeshLambertMaterial({
  color: 0x87cefa,transparent: true, opacity: 0.8, side: THREE.DoubleSide
});
var meshVaso = new THREE.Mesh(geoVaso, matVaso);
meshVaso.position.set(-2, 1, 0);
//scene.add(meshVaso);

// Agua interna
var geoAgua = new THREE.CylinderGeometry(0.75, 0.75, 1.3, 32);
var matAgua = new THREE.MeshLambertMaterial({ color: 0x00bfff, transparent: true, opacity: 0.6 });
var meshAgua = new THREE.Mesh(geoAgua, matAgua);
meshAgua.position.set(-2, 1.1, 0);
//scene.add(meshAgua);

const VASODEAGUA = new THREE.Group();
    VASODEAGUA.add(meshVaso,meshAgua);
    VASODEAGUA.position.set(x, y, z);
    
    return VASODEAGUA;
}