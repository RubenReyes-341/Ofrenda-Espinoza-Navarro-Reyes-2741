import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // COPAL

    var copal = new THREE.Group();
    //escena.add(copal);
    var materialCopal = new THREE.MeshStandardMaterial({color: 0x100b00 });

    // Base 
    var geometriaBase = new THREE.CylinderGeometry(2, 5, 2, 36); 
    var base = new THREE.Mesh(geometriaBase, materialCopal);
    base.position.set(0, 1, 0); 
    copal.add(base);

    //  Tallo 
    var geometriaTallo = new THREE.CylinderGeometry(2, 3, 6, 32);
    var tallo = new THREE.Mesh(geometriaTallo, materialCopal);
    tallo.position.set(0, 4, 0); 
    copal.add(tallo);

    // detalles de en medio
    var geometriaAnillo = new THREE.TorusGeometry(2.5, 0.4, 16, 100); 
    // Anillo 1
    var anillo1 = new THREE.Mesh(geometriaAnillo, materialCopal);
    anillo1.position.set(0, 7, 0); 
    anillo1.rotation.x = 1.57; 
    copal.add(anillo1);

    // Anillo 2
    var anillo2 = new THREE.Mesh(geometriaAnillo, materialCopal);
    anillo2.position.set(0, 3, 0); 
    anillo2.rotation.x = 1.57; 
    copal.add(anillo2);

    // Copa
    var geometriaCopa = new THREE.CylinderGeometry(7, 3, 5, 32); 
    var copa = new THREE.Mesh(geometriaCopa, materialCopal);
    copa.position.set(0, 10, 0); 
    copal.add(copa);

    // Borde de arriba de la copa
    var geometriaBorde = new THREE.TorusGeometry(7, 0.4, 16, 105);
    var bordeCopa = new THREE.Mesh(geometriaBorde, materialCopal);
    bordeCopa.position.set(0, 12.6 , 0); 
    bordeCopa.rotation.x = 1.57; 
    copal.add(bordeCopa);


    // Cristal de la piedra del copal
    var blanco = 0xffcce2; 
    var materialBlanco = new THREE.MeshStandardMaterial({color: blanco});
    var geometriaCristal = new THREE.TetrahedronGeometry(5, 0); 
    var cristal = new THREE.Mesh(geometriaCristal, materialBlanco); 
    cristal.position.set(0, 12, 0); 
    copal.add(cristal);

            const COPAL=new THREE.Group();
            COPAL.add(copal);
            COPAL.position.set(x,y,z);
        
            return COPAL;
}