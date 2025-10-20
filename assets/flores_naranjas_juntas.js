import * as THREE from "../js/three.module.js";

import Flores from "./flor.js"; 

export default function E01({x,y,z}){

    const florC1 = Flores({x: -15, y: -15, z: 9});
    florC1.castShadow = true; 
    florC1.receiveShadow = true; 
    florC1.scale.set(0.2, 0.2, 0.2);

    const florC2 = Flores({x: -15, y: -9.5, z: 9});
    florC2.castShadow = true; 
    florC2.receiveShadow = true; 
    florC2.scale.set(0.2, 0.2, 0.2);

    const florC3 = Flores({x: -15, y: -5, z: 6});
    florC3.castShadow = true; 
    florC3.receiveShadow = true; 
    florC3.scale.set(0.2, 0.2, 0.2); 
    florC3.rotation.x = 1.57;

    const florC4 = Flores({x: -15, y: -5, z: 0.5});
    florC4.castShadow = true; 
    florC4.receiveShadow = true; 
    florC4.scale.set(0.2, 0.2, 0.2); 
    florC4.rotation.x = 1.57;

    const florC5 = Flores({x: -15, y: -5, z: -5});
    florC5.castShadow = true; 
    florC5.receiveShadow = true; 
    florC5.scale.set(0.2, 0.2, 0.2); 
    florC5.rotation.x = 1.57;

    const floresLados = new THREE.Group();
    floresLados.add(florC1, florC2, florC3, florC4, florC5);

    const floresLadosClon = floresLados.clone();
    floresLadosClon.position.set(30, 0, 0);
    const floresLadosClon2 = floresLados.clone();
    floresLadosClon2.position.set(30, 10, -15);
    const floresLadosClon3 = floresLados.clone();
    floresLadosClon3.position.set(0, 10, -15);
    const floresLadosClon4 = floresLados.clone();
    floresLadosClon4.position.set(0, 20, -30);
    const floresLadosClon5 = floresLados.clone();
    floresLadosClon5.position.set(30, 20, -30);

    const florC6 = Flores({x: -15, y: 17, z: -36});
    florC6.castShadow = true; 
    florC6.receiveShadow = true; 
    florC6.scale.set(0.2, 0.2, 0.2);

    const florC7 = Flores({x: -15, y: 22, z: -36});
    florC7.castShadow = true; 
    florC7.receiveShadow = true; 
    florC7.scale.set(0.2, 0.2, 0.2);

    const florC8 = Flores({x: -15, y: 27, z: -36});
    florC8.castShadow = true; 
    florC8.receiveShadow = true; 
    florC8.scale.set(0.2, 0.2, 0.2);

    const grupoFloresArriba = new THREE.Group();
    grupoFloresArriba.add(florC6, florC7, florC8);
    const grupoFloresArribaClon = grupoFloresArriba.clone();
    grupoFloresArribaClon.position.set(30, 0, 0);

    const floresCompletas = new THREE.Group();
    floresCompletas.add(floresLados,floresLadosClon,floresLadosClon2,floresLadosClon3,
        floresLadosClon4,floresLadosClon5,grupoFloresArriba,grupoFloresArribaClon);

    const floresCompletasClon = floresCompletas.clone();
    floresCompletasClon.position.z = -100;
    floresCompletasClon.rotation.y = 3.14;

    const florC9 = Flores({x: -15, y: 29, z: -40}); 
    florC9.castShadow = true; 
    florC9.receiveShadow = true; 
    florC9.scale.set(0.2, 0.2, 0.2); 
    florC9.rotation.x = 1.57;

    const florC10 = Flores({x: -20, y: 29, z: -40}); 
    florC10.castShadow = true; 
    florC10.receiveShadow = true; 
    florC10.scale.set(0.2, 0.2, 0.2); 
    florC10.rotation.x = 1.57;

    const florC11 = Flores({x: -25, y: 29, z: -40}); 
    florC11.castShadow = true; 
    florC11.receiveShadow = true; 
    florC11.scale.set(0.2, 0.2, 0.2); 
    florC11.rotation.x = 1.57;

    const florC12 = Flores({x: -30, y: 29, z: -40}); 
    florC12.castShadow = true; 
    florC12.receiveShadow = true; 
    florC12.scale.set(0.2, 0.2, 0.2); 
    florC12.rotation.x = 1.57;

    const florC13 = Flores({x: -30, y: 29, z: -45}); 
    florC13.castShadow = true; 
    florC13.receiveShadow = true; 
    florC13.scale.set(0.2, 0.2, 0.2); 
    florC13.rotation.x = 1.57;

    const florC14 = Flores({x: -30, y: 29, z: -50}); 
    florC14.castShadow = true; 
    florC14.receiveShadow = true; 
    florC14.scale.set(0.2, 0.2, 0.2); 
    florC14.rotation.x = 1.57;

    const florC15 = Flores({x: -30, y: 29, z: -55}); 
    florC15.castShadow = true; 
    florC15.receiveShadow = true; 
    florC15.scale.set(0.2, 0.2, 0.2); 
    florC15.rotation.x = 1.57;

    const florC16 = Flores({x: -30, y: 29, z: -60}); 
    florC16.castShadow = true; 
    florC16.receiveShadow = true; 
    florC16.scale.set(0.2, 0.2, 0.2); 
    florC16.rotation.x = 1.57;

    const florC17 = Flores({x: -25, y: 29, z: -60}); 
    florC17.castShadow = true; 
    florC17.receiveShadow = true; 
    florC17.scale.set(0.2, 0.2, 0.2); 
    florC17.rotation.x = 1.57;

    const florC18 = Flores({x: -20, y: 29, z: -60}); 
    florC18.castShadow = true; 
    florC18.receiveShadow = true; 
    florC18.scale.set(0.2, 0.2, 0.2); 
    florC18.rotation.x = 1.57;

    const florC19 = Flores({x: -15, y: 29, z: -60}); 
    florC19.castShadow = true; 
    florC19.receiveShadow = true; 
    florC19.scale.set(0.2, 0.2, 0.2); 
    florC19.rotation.x = 1.57;

    const arcoDeFlores = new THREE.Group();
    arcoDeFlores.add(
        florC9, florC10, florC11, florC12, florC13,
        florC14, florC15, florC16, florC17, florC18, florC19
    );

    const arcoDeFloresClon = arcoDeFlores.clone();
    arcoDeFloresClon.position.set(0,0,-100);
    arcoDeFloresClon.rotation.y = 3.14;

    const floresLadosClonLateral1 = floresLados.clone();
    floresLadosClonLateral1.position.set(-64, 0, -22);
    floresLadosClonLateral1.rotation.y=-1.57;

    const floresLadosClonLateral2 = floresLadosClonLateral1.clone();
    floresLadosClonLateral2.position.set(-54, 10, -22);
    floresLadosClonLateral2.rotation.y=-1.57;
    
    const floresLadosClonLateral3 = floresLadosClonLateral2.clone(); 
    floresLadosClonLateral3.position.set(-39, 20, -22);
    floresLadosClonLateral3.rotation.y=-1.57;

    const arcoDeFloresLateral = new THREE.Group();
    arcoDeFloresLateral.add(floresLadosClonLateral1,floresLadosClonLateral2,
        floresLadosClonLateral3);
    
    const arcoDeFloresLateralClon =arcoDeFloresLateral.clone();
    arcoDeFloresLateralClon.position.set(0,0,-25);

    const arcoDeFloresLateralIzquierda = new THREE.Group();
    arcoDeFloresLateralIzquierda.add(arcoDeFloresLateralClon,arcoDeFloresLateral);

    const arcoDeFloresLateralDerecha=arcoDeFloresLateralIzquierda.clone();
    arcoDeFloresLateralDerecha.position.set(0,0,-100);
    arcoDeFloresLateralDerecha.rotation.y=3.14;
    
    const FLORESNARANJAS = new THREE.Group();
    FLORESNARANJAS.add(
        floresCompletas,
        floresCompletasClon,
        arcoDeFlores,
        arcoDeFloresClon,
        arcoDeFloresLateralIzquierda,
        arcoDeFloresLateralDerecha 
    );
    FLORESNARANJAS.position.set(x,y,z);

    return FLORESNARANJAS;
}