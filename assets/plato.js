import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){


    // materiales

    var platoMole = new THREE.Group();
    //escena.add(platoMole);

    // Colores
    var colorBarro = 0x8b4513;  // Color del plato
    var colorCafe = 0x361b07;    // Mole
    var colorBlanco = 0xf5eac8;  // Blanco para el hueso
    var colorNaranja = 0x8b2d13; // Carne

    // Materiales
    var materialPlato = new THREE.MeshStandardMaterial({ color: colorBarro });
    var materialMole = new THREE.MeshStandardMaterial({ color: colorCafe });
    var materialHueso = new THREE.MeshStandardMaterial({ color: colorBlanco });
    var materialCarne = new THREE.MeshStandardMaterial({ color: colorNaranja });

    // Plato
    var geometriaPlato = new THREE.CylinderGeometry(12 , 9, 6, 32); 
    var plato = new THREE.Mesh(geometriaPlato, materialPlato);
    plato.position.set(0, 2, 0); 
    platoMole.add(plato);

    // Mole 
    var geometriaMole = new THREE.CylinderGeometry(10, 7, 5, 32);
    var mole = new THREE.Mesh(geometriaMole, materialMole);
    mole.position.set(0, 2.9, 0); 
    platoMole.add(mole);

    // Pieza de Pollo
    var piezaPollo = new THREE.Group();
    platoMole.add(piezaPollo); 

    // Tallo del hueso 
    var geometriaHueso = new THREE.CylinderGeometry(0.9, 0.9, 12, 32);
    var hueso = new THREE.Mesh(geometriaHueso, materialHueso);
    hueso.rotation.x  = 1.57;
    hueso.position.set(0, 5, 0);
    piezaPollo.add(hueso);
 
    var geometriaExtremoHueso = new THREE.SphereGeometry(1, 32, 32);
    var circulo1 = new THREE.Mesh(geometriaExtremoHueso, materialHueso);
    circulo1.position.set(-1, 5, 6); 
    piezaPollo.add(circulo1);

    var circulo2 = new THREE.Mesh(geometriaExtremoHueso, materialHueso);
    circulo2.position.set(1, 5, 6); 
    piezaPollo.add(circulo2);
    
    // Carne
    var geometriaCarne = new THREE.SphereGeometry(5, 32 , 32);
    var carne = new THREE.Mesh(geometriaCarne, materialCarne);
    carne.scale.set(0.7, 0.4  , 1); 
    carne.position.set(0 , 6, -3); 
    piezaPollo.add(carne);
     
    const MOLE=new THREE.Group();
        MOLE.add(platoMole);
        MOLE.position.set(x,y,z);
    
        return MOLE;
}