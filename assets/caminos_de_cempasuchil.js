import * as THREE from "../js/three.module.js";
import FLOR2 from "./flor2.js";

export default function E01({x,y,z}){

//CAMINO DE CEMAPASUCHIL (FRENTE Y ATRAS)
    const caminodeflores = FLOR2({x: 0, y: -6.9, z: 0});
    caminodeflores.castShadow = true;
    caminodeflores.receiveShadow = true;

    const caminodeflores11 = FLOR2({x: 0, y: -14.3, z: 7.6});
    caminodeflores11.castShadow = true;
    caminodeflores11.receiveShadow = true;
    caminodeflores11.rotation.x = 1.57;

    const caminodeflores2 = FLOR2({x: 0, y: 3.3, z: -15});
    caminodeflores2.castShadow = true;
    caminodeflores2.receiveShadow = true;

    const caminodeflores21 = FLOR2({x: 0, y: -4, z: -7.4});
    caminodeflores21.castShadow = true;
    caminodeflores21.receiveShadow = true;
    caminodeflores21.rotation.x = 1.57;

    const caminodeflores3 = FLOR2({x: 0, y: 13.2, z: -30});
    caminodeflores3.castShadow = true;
    caminodeflores3.receiveShadow = true;

    const caminodeflores31 = FLOR2({x: 0, y: 5.7, z: -22.4});
    caminodeflores31.castShadow = true;
    caminodeflores31.receiveShadow = true;
    caminodeflores31.rotation.x = 1.57;

    const caminodeflores41 = FLOR2({x: 0, y: 20.5, z: -37.4});
    caminodeflores41.castShadow = true;
    caminodeflores41.receiveShadow = true;
    caminodeflores41.rotation.x = 1.57;

    const floresEscalon = new THREE.Group();
    floresEscalon.add(caminodeflores,caminodeflores11,caminodeflores2,
    caminodeflores21,caminodeflores3,caminodeflores31,caminodeflores41);

    // scene.add(floresEscalon);

    const floresEscalonClon = floresEscalon.clone();
    floresEscalonClon.rotation.y=3.14;
    floresEscalonClon.position.set(0,0,-100);
    // scene.add(floresEscalonClon);

    const caminodeflores4 = FLOR2({x:0,y:28.1,z:-50});
    caminodeflores4.castShadow = true;
    caminodeflores4.receiveShadow = true;
    caminodeflores4.scale.set(2.16,1,1.7);
    // scene.add(caminodeflores4);

//CAMINO DE CEMAPASUCHIL (LATERALES)
    const caminodeflores5 = FLOR2({x: 0, y: -6.8, z: -50});
    caminodeflores5.castShadow = true;
    caminodeflores5.receiveShadow = true;
    caminodeflores5.scale.set(.83, 1, 1);

    const caminodeflores51 = FLOR2({x: 0, y: -4, z: -57.5});
    caminodeflores51.castShadow = true;
    caminodeflores51.receiveShadow = true;
    caminodeflores51.scale.set(.83, 1, 1);
    caminodeflores51.rotation.x = 1.57;

    const caminoEnL = new THREE.Group();
    caminoEnL.add(caminodeflores5, caminodeflores51);
    caminoEnL.position.set(-119, 0, -50);
    caminoEnL.rotation.y = -1.57;

    const caminoEnL_Clon = caminoEnL.clone();
    caminoEnL_Clon.position.set(-103.8, 10, -50);

    const caminoEnL_Clon2 = caminoEnL.clone();
    caminoEnL_Clon2.position.set(-89, 20, -50);

    const caminodeflores52 = FLOR2({x: -32.7, y: 20.5, z: -50});
    caminodeflores52.castShadow = true;
    caminodeflores52.receiveShadow = true;
    caminodeflores52.rotation.x = 1.57;
    caminodeflores52.rotation.z = 1.57;
    caminodeflores52.scale.set(.83, 1, 1);

    const caminoLateralCompleto = new THREE.Group();
    caminoLateralCompleto.add(caminoEnL,caminoEnL_Clon,caminoEnL_Clon2,caminodeflores52);
    // scene.add(caminoLateralCompleto);

    const caminoLateralCompleto_Clon = caminoLateralCompleto.clone();
    caminoLateralCompleto_Clon.rotation.y=3.14;
    caminoLateralCompleto_Clon.position.set(.3,0,-100);
    // scene.add(caminoLateralCompleto_Clon);

const CAMINOSDESEMPA = new THREE.Group();
    CAMINOSDESEMPA.add(
        floresEscalon,
        floresEscalonClon,
        caminodeflores4,
        caminoLateralCompleto,
        caminoLateralCompleto_Clon
    );
    CAMINOSDESEMPA.position.set(x,y,z);

    return CAMINOSDESEMPA;
}