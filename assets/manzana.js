import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){


//------ MANZANA----------
    var manzana = new THREE.SphereGeometry(15,32,17);
    var materialMan = new THREE.MeshLambertMaterial({
    color:0xc40619,side: THREE.DoubleSide
    });

    var meshMan = new THREE.Mesh(manzana, materialMan);
    //scene.add(meshMan);
    var ramita=new THREE.CylinderGeometry(1,1,18,25,25);
    var materialRam = new THREE.MeshLambertMaterial({
    color: 0xc06641,side: THREE.DoubleSide
    });

    var meshRam = new THREE.Mesh(ramita, materialRam);
    //scene.add(meshRam);
    meshRam.position.set(0,12,0);

    const Manzanita=new THREE.Group();
    Manzanita.add(meshMan,meshRam);
    //scene.add(Manzanita);

    const Manzanita2 = Manzanita.clone();
    Manzanita2.position.set(30, 0, 0);
    //scene.add(Manzanita2);

    const Manzanita3 = Manzanita.clone();
    Manzanita3.position.set(15, 0, -26);
    //scene.add(Manzanita3);

    const Manzanita4 = Manzanita.clone();
    Manzanita4.position.set(15, 18, -9);
    //scene.add(Manzanita4);

    const MANZANITAS=new THREE.Group();
    MANZANITAS.add(meshMan,meshRam,Manzanita,Manzanita2,Manzanita3,Manzanita4);
    MANZANITAS.position.set(x,y,z);

    return MANZANITAS;
}