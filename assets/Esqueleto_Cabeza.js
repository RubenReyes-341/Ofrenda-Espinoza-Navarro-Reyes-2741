import * as THREE from "../js/three.module.js";

export default function CABEZACALAVERA({x, y, z}) {

    // Materiales
    const color_blanco = 0xe3dac9;
    const color_negro = 0x000000;
    const materialBlanco = new THREE.MeshStandardMaterial({ color: color_blanco });
    const materialNegro = new THREE.MeshStandardMaterial({ color: color_negro });

    const grupoCabeza = new THREE.Group();
    // Cráneo
    const geometriaCabeza = new THREE.SphereGeometry(5.4, 34, 39);
    const cabeza = new THREE.Mesh(geometriaCabeza, materialBlanco);
    cabeza.scale.set(1.3, 1, 1.1);
    cabeza.position.set(0, 7.4, 0);
    grupoCabeza.add(cabeza);

    // Ojos
    const geometriaOjo = new THREE.SphereGeometry(2, 32, 32);
    const ojoIzquierdo = new THREE.Mesh(geometriaOjo, materialNegro);
    ojoIzquierdo.position.set(-3, 6.5, 5);
    grupoCabeza.add(ojoIzquierdo);
    const ojoDerecho = ojoIzquierdo.clone();
    ojoDerecho.position.set(3, 6.5, 5);
    grupoCabeza.add(ojoDerecho);

    // Nariz
    const geometriaNariz = new THREE.BoxGeometry(1.2, 1, 1);
    const nariz = new THREE.Mesh(geometriaNariz, materialNegro);
    nariz.position.set(0, 4.7, 5);
    grupoCabeza.add(nariz);

    // Mandíbula
    const geometriaMandibula = new THREE.BoxGeometry(6, 5, 5);
    const mandibula = new THREE.Mesh(geometriaMandibula, materialBlanco);
    mandibula.position.set(0, 2.5, 0.9);
    grupoCabeza.add(mandibula);

    // Dientes
    const geometriaDiente = new THREE.BoxGeometry(0.5, 4, 1.3);
    const alturaDientes = 3;
    const profundidadDientes = 3;
    const posicionesDientes = [-2.0, -1.2, -0.4, 0.4, 1.2, 2.0];
    posicionesDientes.forEach(posX => {
        const diente = new THREE.Mesh(geometriaDiente, materialNegro);
        diente.position.set(posX, alturaDientes, profundidadDientes);
        grupoCabeza.add(diente);
    });

    // Línea de dientes
    const geometriaLinea = new THREE.BoxGeometry(4.8, 0.3, 1);
    const lineaDientes = new THREE.Mesh(geometriaLinea, materialBlanco);
    lineaDientes.position.set(0, 2.2, 3.4);
    grupoCabeza.add(lineaDientes);

    // Cachetes
    const geometriaCachete = new THREE.SphereGeometry(2, 32, 32);
    const cacheteIzquierdo = new THREE.Mesh(geometriaCachete, materialBlanco);
    cacheteIzquierdo.position.set(-3.3, 4, 1.4);
    grupoCabeza.add(cacheteIzquierdo);
    const cacheteDerecho = cacheteIzquierdo.clone();
    cacheteDerecho.position.set(3.3, 4, 1.4);
    grupoCabeza.add(cacheteDerecho);

    grupoCabeza.position.set(x, y, z);
    return grupoCabeza;
}