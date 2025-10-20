import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

    // VELADORA
    var geoVaso = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
    var matVaso = new THREE.MeshLambertMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.5       
    });
    var vaso = new THREE.Mesh(geoVaso, matVaso);
    vaso.position.set(-1, 1, 0);

    var geoCera = new THREE.CylinderGeometry(0.4, 0.4, 1.2, 32);
    var matCera = new THREE.MeshLambertMaterial({ color: 0xfff8dc });
    var cera = new THREE.Mesh(geoCera, matCera);
    cera.position.set(-1, 1, 0);
    cera.castShadow = true;

    var geoFlama = new THREE.ConeGeometry(0.15, 0.4, 16);
    var matFlama = new THREE.MeshLambertMaterial({ color: 0xffa500, emissive: 0xffd700 });
    var flama = new THREE.Mesh(geoFlama, matFlama);
    flama.position.set(-1, 1.9, 0);
    
    const luzVeladora = new THREE.PointLight(0xffd700, 1, 50);
    luzVeladora.position.set(-1, 1.9, 0);
    luzVeladora.castShadow = true;

    const VELA2 = new THREE.Group();
    VELA2.add(vaso, cera, flama, luzVeladora);
    VELA2.position.set(x, y, z);
    
    return VELA2;
}