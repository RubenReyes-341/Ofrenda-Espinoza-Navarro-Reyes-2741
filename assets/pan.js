import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// PAN DE MUERTO
// BASE DE PAN DE MUERTO
    var basePan=new  THREE.SphereGeometry(6,32,32,0,6.2832,0,1.5708);
    var materialPan= new THREE.MeshLambertMaterial({
        color:0xD49F5F, side: THREE.DoubleSide
    });
    var meshBasePan=new THREE.Mesh(basePan,materialPan);
    //scene.add(mesh1);

//TAPA
    var baseTapa = new THREE.CircleGeometry(6, 32);
    var materialTapa = new THREE.MeshLambertMaterial({
        color: 0xD49F5F,
        side: THREE.DoubleSide
    });
    var tapa = new THREE.Mesh(baseTapa, materialTapa);
    tapa.rotation.x = 1.5708;
    //scene.add(tapa);

// "HUESITOS DEL PAN" (HUESO SUPERIOR)
    var bolaSuperiorPan=new  THREE.SphereGeometry(2,32,32,0,6.2832,0,1.5708);
    var materialPan2= new THREE.MeshLambertMaterial({
        color:0xBA9363, side: THREE.DoubleSide
    });
    var meshBolaSuperior=new THREE.Mesh(bolaSuperiorPan,materialPan2);
    //scene.add(mesh2);
    meshBolaSuperior.position.set(0,5,0);

// "HUESITOS DEL PAN" (HUESOS LATERALES)
    var Huesito1=new THREE.TorusGeometry(2,1,20,19);
    var meshHuesito1=new THREE.Mesh(Huesito1,materialPan2);
    //scene.add(mesh3);
    meshHuesito1.position.set(3,2.2,0);

    var Huesito2=new THREE.TorusGeometry(2,1,20,19);
    var meshHuesito2=new THREE.Mesh(Huesito2,materialPan2);
    //scene.add(mesh4);
    meshHuesito2.position.set(-3,2.2,0);

    var Huesito3=new THREE.TorusGeometry(2,1,20,19);
    var meshHuesito3=new THREE.Mesh(Huesito3,materialPan2);
    //scene.add(mesh5);
    meshHuesito3.position.set(0,2.2,3);
    meshHuesito3.rotation.y=1.5708;

    var Huesito4=new THREE.TorusGeometry(2,1,20,19);
    var meshHuesito4=new THREE.Mesh(Huesito4,materialPan2);
    //scene.add(mesh6);
    meshHuesito4.position.set(0,2.2,-3);
    meshHuesito4.rotation.y=1.5708;

    const Pan=new THREE.Group();
    Pan.add(meshBasePan,tapa,meshBolaSuperior,meshHuesito1,meshHuesito2,meshHuesito3,meshHuesito4);
    Pan.position.set(x,y,z);

    return Pan;
}