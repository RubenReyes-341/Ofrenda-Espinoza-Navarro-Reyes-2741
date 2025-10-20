import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//  TRAJINERA

//GROSORES
    var grosor=new THREE.PlaneGeometry(2,23);
    var matGrosor=new THREE.MeshLambertMaterial({
        color:0xfcc000,side: THREE.DoubleSide
    });
    var meshGrosor=new THREE.Mesh(grosor,matGrosor);
    //scene.add(meshGrosor);
    meshGrosor.rotation.x=1.5708;
    meshGrosor.position.set(-15.6,2.75,-15.8);
    meshGrosor.rotation.z=0.7854;

    var grosor2=new THREE.PlaneGeometry(2,29);
    var meshGrosor2=new THREE.Mesh(grosor2,matGrosor);
    //scene.add(meshGrosor2);
    meshGrosor2.rotation.x=1.5708;
    meshGrosor2.position.set(6.2,2.75,18.8);
    meshGrosor2.rotation.z=1.64;

    var grosor3=new THREE.PlaneGeometry(2,29);
    var meshGrosor3=new THREE.Mesh(grosor3,matGrosor);
    //scene.add(meshGrosor3);
    meshGrosor3.rotation.x=1.5708;
    meshGrosor3.position.set(18.75,2.75,5.6);
    meshGrosor3.rotation.z=3.069;

    var grosor4=new THREE.PlaneGeometry(2,32.1);
    var meshGrosor4=new THREE.Mesh(grosor4,matGrosor);
    //scene.add(meshGrosor4);
    meshGrosor4.rotation.x=1.5708;
    meshGrosor4.position.set(-14.5,2.75,4.2);
    meshGrosor4.rotation.z=-0.59;

    var grosor5=new THREE.PlaneGeometry(2,32.1);
    var meshGrosor5=new THREE.Mesh(grosor5,matGrosor);
    //scene.add(meshGrosor5);
    meshGrosor5.rotation.x=1.5708;
    meshGrosor5.position.set(4.5,2.75,-14.6);
    meshGrosor5.rotation.z=-0.98;
//BASE JIJI
    var base = new THREE.CylinderGeometry(9.36,9.36,.5,5,5);
    var materialamarillitojiji=new THREE.MeshLambertMaterial({
        color:0xfcc000,side: THREE.DoubleSide
    });
    var meshBaseM=new THREE.Mesh(base,materialamarillitojiji);
    meshBaseM.position.set(0,-2.4,0);
    meshBaseM.rotation.y=0.7854;
    meshBaseM.scale.set(1.1,1.1,1.7);
    //scene.add(meshBaseM);

//INTERIOR TRAJINERA
    var trajinera = new THREE.CylinderGeometry(16.74,9.36,5,5,5,true);
    var materialnaranjitajiji=new THREE.MeshLambertMaterial({
        color:0xf28401,side: THREE.DoubleSide
    });
    var meshT=new THREE.Mesh(trajinera,materialnaranjitajiji);
    //scene.add(meshT);
    meshT.position.set(0,0,0);
    meshT.rotation.y=0.7854;
    meshT.scale.set(1,1,1.6);

//EXTERIOR TRAJINERA
    var trajinera2 = new THREE.CylinderGeometry(16.74,9.36,5,5,5,true);
    var materialazulitojiji=new THREE.MeshLambertMaterial({
        color:0x0c4469,side: THREE.DoubleSide
    });
    var meshT2=new THREE.Mesh(trajinera2,materialazulitojiji);
    //scene.add(meshT2);
    meshT2.position.set(0,0,0);
    meshT2.rotation.y=0.7854;
    meshT2.scale.set(1.1,1.1,1.7);

    const BaseTrajinera=new THREE.Group();
    BaseTrajinera.add(meshBaseM,meshGrosor,meshGrosor2,meshGrosor3,meshGrosor4,meshGrosor5,meshT,meshT2);
    BaseTrajinera.position.set(x,y,z);

    return BaseTrajinera;
}