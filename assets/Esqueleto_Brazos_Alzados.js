import * as THREE from "../js/three.module.js";

export default function CALAVERACUERPO({x, y, z}) {

    // Materiales
    const color_blanco = 0xe3dac9;
    const materialBlanco = new THREE.MeshStandardMaterial({ color: color_blanco });

    const grupoCalavera = new THREE.Group();

    const geometriaCuelloEsfera = new THREE.SphereGeometry(1.1, 32, 32);
    const cuelloEsferaBase = new THREE.Mesh(geometriaCuelloEsfera, materialBlanco);
    cuelloEsferaBase.scale.set(1.2, 0.7, 1);
    const esfera1 = cuelloEsferaBase.clone();
    esfera1.position.set(0, 18, -3);
    grupoCalavera.add(esfera1);
    const esfera2 = cuelloEsferaBase.clone();
    esfera2.position.set(0, 15, -4);
    grupoCalavera.add(esfera2);
    const esfera3 = cuelloEsferaBase.clone();
    esfera3.position.set(0, -9, -4);
    grupoCalavera.add(esfera3);
    const esfera4 = cuelloEsferaBase.clone();
    esfera4.position.set(0, -14, -4);
    grupoCalavera.add(esfera4);

    // Costillas
    const geometriaCostillaLarga = new THREE.CylinderGeometry(1.3, 1.3, 18, 32);
    const geometriaCostillaCorta = new THREE.CylinderGeometry(1.3, 1.3, 11, 32);
    const geometriaCostillaVertical = new THREE.CylinderGeometry(1.5, 0.5, 15, 32);

    const costilla1 = new THREE.Mesh(geometriaCostillaLarga, materialBlanco);
    costilla1.rotation.z = 1.5;
    costilla1.position.set(0, 12, -4);
    grupoCalavera.add(costilla1);

    const costilla2 = new THREE.Mesh(geometriaCostillaLarga, materialBlanco);
    costilla2.rotation.z = 1.5;
    costilla2.position.set(0, 8, -4);
    grupoCalavera.add(costilla2);
    
    const costilla3 = new THREE.Mesh(geometriaCostillaLarga, materialBlanco);
    costilla3.rotation.z = 1.5;
    costilla3.position.set(0, 4, -4);
    grupoCalavera.add(costilla3);

    const costilla4 = new THREE.Mesh(geometriaCostillaCorta, materialBlanco);
    costilla4.rotation.z = 1.5;
    costilla4.position.set(0, 0, -4);
    grupoCalavera.add(costilla4);

    const costilla5 = new THREE.Mesh(geometriaCostillaCorta, materialBlanco);
    costilla5.rotation.z = 1.5;
    costilla5.position.set(0, -4, -4);
    grupoCalavera.add(costilla5);

    const costillaVertical = new THREE.Mesh(geometriaCostillaVertical, materialBlanco);
    costillaVertical.position.set(0, 4, -4);
    grupoCalavera.add(costillaVertical);

    const geometriaPelvis = new THREE.BoxGeometry(18, 5, 5);
    const pelvis = new THREE.Mesh(geometriaPelvis, materialBlanco);
    pelvis.position.set(0, -19, -4);
    grupoCalavera.add(pelvis);

    const geometriaHombro = new THREE.SphereGeometry(2, 32, 32);
    const geometriaAntebrazo = new THREE.CylinderGeometry(1, 1, 17, 32);
    const geometriaBrazo = new THREE.CylinderGeometry(2.3, 1, 13, 32);

    // Brazo Izquierdo
    const hombroIzquierdo = new THREE.Mesh(geometriaHombro, materialBlanco);
    hombroIzquierdo.position.set(-12, 14, 1);
    grupoCalavera.add(hombroIzquierdo);
    const antebrazoIzquierdo = new THREE.Mesh(geometriaAntebrazo, materialBlanco);
    antebrazoIzquierdo.position.set(-16, 26, 1);
    antebrazoIzquierdo.rotation.z = 0.3;
    grupoCalavera.add(antebrazoIzquierdo);
    const codoIzquierdo = new THREE.Mesh(geometriaHombro, materialBlanco);
    codoIzquierdo.position.set(-19, 37, 1);
    grupoCalavera.add(codoIzquierdo);
    const brazoIzquierdo = new THREE.Mesh(geometriaBrazo, materialBlanco);
    brazoIzquierdo.position.set(-21, 46, -1);
    brazoIzquierdo.rotation.z = 0.2;
    grupoCalavera.add(brazoIzquierdo);

    // Brazo Derecho
    const hombroDerecho = hombroIzquierdo.clone();
    hombroDerecho.position.set(12, 14, 1);
    grupoCalavera.add(hombroDerecho);
    const antebrazoDerecho = antebrazoIzquierdo.clone();
    antebrazoDerecho.position.set(16, 26, -1);
    antebrazoDerecho.rotation.z = -0.3;
    grupoCalavera.add(antebrazoDerecho);
    const codoDerecho = codoIzquierdo.clone();
    codoDerecho.position.set(19, 37, -1);
    grupoCalavera.add(codoDerecho);
    const brazoDerecho = brazoIzquierdo.clone();
    brazoDerecho.position.set(21, 46, 1);
    brazoDerecho.rotation.z = -0.2;
    grupoCalavera.add(brazoDerecho);

    const geometriaArticulacion = new THREE.SphereGeometry(1.5, 32, 32);
    const geometriaPiernaGrande = new THREE.CylinderGeometry(2, 2, 20, 32);
    const geometriaPiernaCorta = new THREE.CylinderGeometry(2, 2, 15, 32);
    const geometriaPie = new THREE.BoxGeometry(6, 4, 12);

    // PIERNA IZQUIERDA
    const articulacionIzquierda = new THREE.Mesh(geometriaArticulacion, materialBlanco);
    articulacionIzquierda.position.set(-9, -25, -4); 
    grupoCalavera.add(articulacionIzquierda);

    const piernaGrandeIzquierda = new THREE.Mesh(geometriaPiernaGrande, materialBlanco);
    piernaGrandeIzquierda.position.set(-9, -38, -4);
    grupoCalavera.add(piernaGrandeIzquierda);

    const rodillaIzquierda = new THREE.Mesh(geometriaArticulacion, materialBlanco);
    rodillaIzquierda.position.set(-9, -53, -4);
    grupoCalavera.add(rodillaIzquierda);

    const piernaCortaIzquierda = new THREE.Mesh(geometriaPiernaCorta, materialBlanco);
    piernaCortaIzquierda.position.set(-9, -65, -4);
    grupoCalavera.add(piernaCortaIzquierda);

    const pieIzquierdo = new THREE.Mesh(geometriaPie, materialBlanco);
    pieIzquierdo.position.set(-9, -80, -2); 
    grupoCalavera.add(pieIzquierdo);

    // PIERNA DERECHA
    const articulacionDerecha = new THREE.Mesh(geometriaArticulacion, materialBlanco);
    articulacionDerecha.position.set(9, -25, -4);
    grupoCalavera.add(articulacionDerecha);

    const piernaGrandeDerecha = new THREE.Mesh(geometriaPiernaGrande, materialBlanco);
    piernaGrandeDerecha.position.set(9, -38, -4);
    grupoCalavera.add(piernaGrandeDerecha);

    const rodillaDerecha = new THREE.Mesh(geometriaArticulacion, materialBlanco);
    rodillaDerecha.position.set(9, -53, -4);
    grupoCalavera.add(rodillaDerecha);

    const piernaCortaDerecha = new THREE.Mesh(geometriaPiernaCorta, materialBlanco);
    piernaCortaDerecha.position.set(9, -65, -4);
    grupoCalavera.add(piernaCortaDerecha);

    const pieDerecho = new THREE.Mesh(geometriaPie, materialBlanco);
    pieDerecho.position.set(9, -80, -2);
    grupoCalavera.add(pieDerecho);

    grupoCalavera.position.set(x, y, z);
    return grupoCalavera;
}