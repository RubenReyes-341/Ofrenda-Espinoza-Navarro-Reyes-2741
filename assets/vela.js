import * as THREE from "../js/three.module.js";

export default function VELA({x, y, z}) { 

    const cuerpoVela = new THREE.CylinderGeometry(0.5, 0.5, 3, 20);
    const materialVela = new THREE.MeshLambertMaterial({color: 0xFFF8E7});
    const vela = new THREE.Mesh(cuerpoVela, materialVela);
    vela.position.y = 1.5;
    vela.castShadow = true;

    const pabilo = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 10);
    const materialPabilo = new THREE.MeshLambertMaterial({color: 0x333333});
    const mecha = new THREE.Mesh(pabilo, materialPabilo);
    mecha.position.y = 3.1;

    const flama = new THREE.ConeGeometry(0.3, 0.8, 10);
    const materialFlama = new THREE.MeshBasicMaterial({color: 0xFFA500});
    const fuego = new THREE.Mesh(flama, materialFlama);
    fuego.position.y = 3.6;

    const luzVela = new THREE.PointLight(0xFFB45B,1,50);

    luzVela.position.y = 4;
    luzVela.castShadow = true;
    const VELA_COMPLETA = new THREE.Group();
    VELA_COMPLETA.add(vela, mecha, fuego, luzVela);
    
    VELA_COMPLETA.position.set(x, y, z);
    
    return VELA_COMPLETA;
}