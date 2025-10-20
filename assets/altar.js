import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//-----ALTAR----
//NIVEL 1
var altar =new THREE.BoxGeometry(290,20,230);
var matAltar=new THREE.MeshLambertMaterial({
    color:0x0d294e, side: THREE.
    DoubleSide
});
var meshAltar = new THREE.Mesh(altar,matAltar);
//scene.add(meshAltar);

//NIVEL 2
var altar2 =new THREE.BoxGeometry(245,20,170);
var matAltarN=new THREE.MeshLambertMaterial({
    color:0x000340, side: THREE.DoubleSide
});
var meshAltar2 = new THREE.Mesh(altar2,matAltarN);
//scene.add(meshAltar2);
meshAltar2.position.set(0,20,0);

//NIVEL 3
var altar3 =new THREE.BoxGeometry(185,20,110);
var meshAltar3 = new THREE.Mesh(altar3,matAltar);
//scene.add(meshAltar3);
meshAltar3.position.set(0,40,0);

//NIVEL 4
var altar4 =new THREE.BoxGeometry(130,30,50);
var meshAltar4 = new THREE.Mesh(altar4,matAltarN);
//scene.add(meshAltar4);
meshAltar4.position.set(0,65,0);

const alt=new THREE.Group();
    alt.add(meshAltar,meshAltar2,meshAltar3,meshAltar4);
    alt.position.set(x,y,z);

    return alt;
}