import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){
    
// materiales
    var color_blanco = 0xe3dac9; 
    var color_negro = 0x000000;
    var materialBlanco = new THREE.MeshStandardMaterial({ color: color_blanco }); 
    var materialNegro = new THREE.MeshStandardMaterial({ color: color_negro }); 

var grupoCalavera = new THREE.Group();
//escena.add(grupoCalavera);

// Cabeza
var geometriaCabeza = new THREE.SphereGeometry(5.4, 34, 39); 
var cabeza = new THREE.Mesh(geometriaCabeza, materialBlanco);
 
cabeza.scale.set(1.2, 1.0, 1.1);
cabeza.position.set(0, 25.4, 0); 
cabeza.castShadow = true;
grupoCalavera.add(cabeza);

// OJOS
var geometriaOjo = new THREE.SphereGeometry(2, 32, 32); 

// Ojo izquierdo
var ojoIzquierdo = new THREE.Mesh(geometriaOjo, materialNegro);
ojoIzquierdo.position.set(-3, 24.5, 5); 
grupoCalavera.add(ojoIzquierdo);

// Ojo derecho 
var ojoDerecho = ojoIzquierdo.clone();
ojoDerecho.position.set(3, 24.5, 5); 
grupoCalavera.add(ojoDerecho);

// NARIZ
var geometriaNariz = new THREE.BoxGeometry(1.2, 1, 1);
var nariz = new THREE.Mesh(geometriaNariz, materialNegro);
nariz.position.set(0, 22.7, 5); 
grupoCalavera.add(nariz);

// MANDiBULA
var geometriaMandibula = new THREE.BoxGeometry(6, 5, 5);
var mandibula = new THREE.Mesh(geometriaMandibula, materialBlanco);
mandibula.position.set(0, 20.5, 0.9);
grupoCalavera.add(mandibula);

// DIENTES
// huecos negros
var geometriaDiente = new THREE.BoxGeometry(0.5, 4, 1.3);

// Diente 1
var diente1 = new THREE.Mesh(geometriaDiente, materialNegro);
diente1.position.set(-2.0, 21, 3);
grupoCalavera.add(diente1);
// Diente 2
var diente2 = new THREE.Mesh(geometriaDiente, materialNegro);
diente2.position.set(-1.2, 21, 3);
grupoCalavera.add(diente2);
// Diente 3
var diente3 = new THREE.Mesh(geometriaDiente, materialNegro);
diente3.position.set(-0.4, 21, 3);
grupoCalavera.add(diente3);
// Diente 4
var diente4 = new THREE.Mesh(geometriaDiente, materialNegro);
diente4.position.set(0.4, 21, 3);
grupoCalavera.add(diente4);
// Diente 5
var diente5 = new THREE.Mesh(geometriaDiente, materialNegro);
diente5.position.set(1.2, 21, 3);
grupoCalavera.add(diente5);
// Diente 6
var diente6 = new THREE.Mesh(geometriaDiente, materialNegro);
diente6.position.set(2.0, 21, 3);
grupoCalavera.add(diente6);

//Linea del medio de los dientes
var geometriaLinea = new THREE.BoxGeometry(4.8, 0.3, 1); 
var lineaDientes = new THREE.Mesh(geometriaLinea, materialBlanco); 
lineaDientes.position.set(0, 20.2, 3.4);
grupoCalavera.add(lineaDientes);

// CACHETES
var geometriaCachete = new THREE.SphereGeometry(2, 32, 32); 
var materialCachete = materialBlanco; 
//  izquierdo
var cacheteIzquierdo = new THREE.Mesh(geometriaCachete, materialCachete);
cacheteIzquierdo.position.set(-3.3, 22, 1.4); 
grupoCalavera.add(cacheteIzquierdo);
// derecho 
var cacheteDerecho = cacheteIzquierdo.clone();
cacheteDerecho.position.set(3.3, 22, 1.4); 
grupoCalavera.add(cacheteDerecho);


// CUELLO
var geometriaCuelloEsfera = new THREE.SphereGeometry(1.1, 32, 32); 
var cuelloEsfera = new THREE.Mesh(geometriaCuelloEsfera, materialBlanco);
cuelloEsfera.scale.set(1.2, 0.7 , 1);  
cuelloEsfera.position.set(0, 18, -3); 
grupoCalavera.add(cuelloEsfera);

var segundaEsfera = new THREE.Mesh(geometriaCuelloEsfera, materialBlanco);
segundaEsfera.scale.set(1.2, 0.7 , 1); 
segundaEsfera.position.set(0, 15 , -4); 
grupoCalavera.add(segundaEsfera);

var terceraEsfera = new THREE.Mesh(geometriaCuelloEsfera, materialBlanco);
terceraEsfera.scale.set(1.2, 0.7, 1); 
terceraEsfera.position.set(0, -9 , -4); 
grupoCalavera.add(terceraEsfera);

var cuartaEsfera = new THREE.Mesh(geometriaCuelloEsfera, materialBlanco);
cuartaEsfera.scale.set(1.2, 0.7 , 1); 
cuartaEsfera.position.set(0, -14 ,-4); 
grupoCalavera.add(cuartaEsfera);

// costillas largas
var geometriaCostillaLarga = new THREE.CylinderGeometry(1.3, 1.3, 18, 32);

// cortas
var geometriaCostillaCorta = new THREE.CylinderGeometry(1.3, 1.3, 11, 32);

// la del medio
var geometriaCostillaVertical = new THREE.CylinderGeometry(1.5, 0.5 , 15, 32);
// larga
var costilla1 = new THREE.Mesh(geometriaCostillaLarga, materialBlanco);
costilla1.rotation.z = 1.5; 
costilla1.position.set(0, 12, -4);
grupoCalavera.add(costilla1);

// larga
var costilla2 = costilla1.clone(); 
costilla2.position.set(0, 8, -4);
grupoCalavera.add(costilla2);

// larga
var costilla3 = costilla1.clone();
costilla3.position.set(0, 4, -4);
grupoCalavera.add(costilla3);

// corta
var costilla4 = new THREE.Mesh(geometriaCostillaCorta, materialBlanco);
costilla4.rotation.z = 1.5;
costilla4.position.set(0, 0, -4);
grupoCalavera.add(costilla4);

// corta
var costilla5 = costilla4.clone();
costilla5.position.set(0, -4, -4);
grupoCalavera.add(costilla5);

// vertical en medio
var costillaVertical = new THREE.Mesh(geometriaCostillaVertical, materialBlanco);
costillaVertical.position.set(0, 4, -4);
grupoCalavera.add(costillaVertical);

var geometriaHombro = new THREE.SphereGeometry(2, 32, 32); 
var geometriaAntebrazo = new THREE.CylinderGeometry(1, 1, 16   , 32); 
var geometriaBrazo = new THREE.CylinderGeometry(2.3, 1, 13 , 32); 

//BRAZO IZQUIERDO COMPLETO
// Hombro Izquierdo
var hombroIzquierdo = new THREE.Mesh(geometriaHombro, materialBlanco);
hombroIzquierdo.position.set(-12, 15, -4);
grupoCalavera.add(hombroIzquierdo);

// Antebrazo
var antebrazoIzquierdo = new THREE.Mesh(geometriaAntebrazo, materialBlanco);
antebrazoIzquierdo.position.set(-12, 3, -1);
antebrazoIzquierdo.rotation.x = -0.3   ; 
grupoCalavera.add(antebrazoIzquierdo);

// Codo
var codoIzquierdo = new THREE.Mesh(geometriaHombro, materialBlanco);
codoIzquierdo.position.set(-12, -7, 3 );
grupoCalavera.add(codoIzquierdo);

// Brazo 
var brazoIzquierdo = new THREE.Mesh(geometriaBrazo, materialBlanco);
brazoIzquierdo.position.set(-12 ,-13 ,10 );
brazoIzquierdo.rotation.x = 2.2 ; //  se rota aqui
grupoCalavera.add(brazoIzquierdo);

// BRAZO DERECHO
// Hombro Derecho
var hombroDerecho = hombroIzquierdo.clone();
hombroDerecho.position.set(12, 15 , -4);
grupoCalavera.add(hombroDerecho);

// Antebrazo Derecho
var antebrazoDerecho = antebrazoIzquierdo.clone();
antebrazoDerecho.position.set(12 , 4, -1);
grupoCalavera.add(antebrazoDerecho);

// Codo Derecho
var codoDerecho = codoIzquierdo.clone();
codoDerecho.position.set(12 , -7, 3 );
grupoCalavera.add(codoDerecho);

// Brazo Derecho
var brazoDerecho = brazoIzquierdo.clone();
brazoDerecho.position.set(12, -13, 10);
grupoCalavera.add(brazoDerecho);

var geometriaPelvis = new THREE.BoxGeometry(18, 5, 5);
var pelvis = new THREE.Mesh(geometriaPelvis, materialBlanco);
pelvis.position.set(0, -19, -4); 
grupoCalavera.add(pelvis);

var geometriaArticulacion = new THREE.SphereGeometry(1.5, 32, 32);  
var geometriaPiernaGrande = new THREE.CylinderGeometry(2, 2, 20 , 32); 
var geometriaPiernaCorta = new THREE.CylinderGeometry(2, 2, 15, 32); 

// PIERNA IZQUIERDA
var articulacionIzquierda = new THREE.Mesh(geometriaArticulacion, materialBlanco);
articulacionIzquierda.position.set(-9, -25, -4); 
grupoCalavera.add(articulacionIzquierda);

var piernaGrandeIzquierda = new THREE.Mesh(geometriaPiernaGrande, materialBlanco);
piernaGrandeIzquierda.position.set(-9, -38, -4);
grupoCalavera.add(piernaGrandeIzquierda);

var rodillaIzquierda = new THREE.Mesh(geometriaArticulacion, materialBlanco);
rodillaIzquierda.position.set(-9, -53, -4);
grupoCalavera.add(rodillaIzquierda);

var piernaCortaIzquierda = new THREE.Mesh(geometriaPiernaCorta, materialBlanco);
piernaCortaIzquierda.position.set(-9, -65, -4);
grupoCalavera.add(piernaCortaIzquierda);

// PIERNA DERECHA

var articulacionDerecha = articulacionIzquierda.clone();
articulacionDerecha.position.set(9, -25, -4);
grupoCalavera.add(articulacionDerecha);

var piernaGrandeDerecha = piernaGrandeIzquierda.clone();
piernaGrandeDerecha.position.set(9, -38, -4);
grupoCalavera.add(piernaGrandeDerecha);

var rodillaDerecha = rodillaIzquierda.clone();
rodillaDerecha.position.set(9, -53, -4);
grupoCalavera.add(rodillaDerecha);

var piernaCortaDerecha = piernaCortaIzquierda.clone();
piernaCortaDerecha.position.set(9, -65, -4);
grupoCalavera.add(piernaCortaDerecha);

var geometriaPie = new THREE.BoxGeometry(6, 4, 12); 

var pieIzquierdo = new THREE.Mesh(geometriaPie, materialBlanco);
pieIzquierdo.position.set(-9, -80, -2); 
grupoCalavera.add(pieIzquierdo);

var pieDerecho = pieIzquierdo.clone();
pieDerecho.position.set(9, -80, -2); 
grupoCalavera.add(pieDerecho);
    
const ESQUELETON=new THREE.Group();
            ESQUELETON.add(grupoCalavera);
            ESQUELETON.position.set(x,y,z);
        
            return ESQUELETON;
}