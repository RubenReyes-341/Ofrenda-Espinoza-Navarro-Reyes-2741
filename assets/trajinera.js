import * as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//  TRAJINERA
    const traj=jiji({x:0,y:0,z:0});
    //scene.add(traj);
    traj.rotation.y=-0.78;

//POSTES
    var poste1=new THREE.BoxGeometry(2,15,2,10);
    var materialPoste= new THREE.MeshLambertMaterial({
        color:0xe1101b, side: THREE.DoubleSide
    });
    var mesh=new THREE.Mesh(poste1,materialPoste);
    //scene.add(mesh);
    mesh.position.set(14.9,10.35,0);
    mesh.rotation.y=0.22;

    var poste2=new THREE.BoxGeometry(2,15,2,10);
    var mesh2=new THREE.Mesh(poste2,materialPoste);
    //scene.add(mesh2);
    mesh2.position.set(-14.7,10.35,0);
    mesh2.rotation.y=-0.22;

    var poste3=new THREE.BoxGeometry(2,15,2,10);
    var mesh3=new THREE.Mesh(poste3,materialPoste);
    //scene.add(mesh3);
    mesh3.position.set(-10.8,10.35,-20);
    mesh3.rotation.y=-0.22;

    var poste4=new THREE.BoxGeometry(2,15,2,10);
    var mesh4=new THREE.Mesh(poste4,materialPoste);
    //scene.add(mesh4);
    mesh4.position.set(10.8,10.35,-20);
    mesh4.rotation.y=0.22;

    var poste5=new THREE.BoxGeometry(2,2,20);
    var mesh5=new THREE.Mesh(poste5,materialPoste);
    //scene.add(mesh5);
    mesh5.position.set(12.7,10.35,-10);
    mesh5.rotation.y=0.22;

    var poste51=new THREE.BoxGeometry(2,2,20);
    var mesh51=new THREE.Mesh(poste51,materialPoste);
    //scene.add(mesh51);
    mesh51.position.set(12.7,16.8,-10);
    mesh51.rotation.y=0.22;

    var poste6=new THREE.BoxGeometry(2,2,20);
    var mesh6=new THREE.Mesh(poste6,materialPoste);
    //scene.add(mesh6);
    mesh6.position.set(-12.7,10.35,-10);
    mesh6.rotation.y=-0.19;

    var poste61=new THREE.BoxGeometry(2,2,20);
    var mesh61=new THREE.Mesh(poste61,materialPoste);
    //scene.add(mesh61);
    mesh61.position.set(-12.7,16.8,-10);
    mesh61.rotation.y=-0.19;

    var poste7=new THREE.BoxGeometry(2,7.4,2,10);
    var mesh7=new THREE.Mesh(poste7,materialPoste);
    //scene.add(mesh7);
    mesh7.position.set(-13.7,6.5,-5);
    mesh7.rotation.y=-0.22;

    var poste8=new THREE.BoxGeometry(2,7.4,2,10);
    var mesh8=new THREE.Mesh(poste8,materialPoste);
    //scene.add(mesh8);
    mesh8.position.set(13.9,6.5,-5);
    mesh8.rotation.y=0.22;

    var poste9=new THREE.BoxGeometry(2,7.4,2,10);
    var mesh9=new THREE.Mesh(poste9,materialPoste);
    //scene.add(mesh9);
    mesh9.position.set(12.1,6.5,-14);
    mesh9.rotation.y=0.22;

    var poste10=new THREE.BoxGeometry(2,7.4,2,10);
    var mesh10=new THREE.Mesh(poste10,materialPoste);
    //scene.add(mesh10);
    mesh10.position.set(-12,6.5,-14);
    mesh10.rotation.y=-0.22;
//CUPULA
    var cupula=new THREE.CylinderGeometry(16.3,11.4,25,25,11,true,0,3.14);
    var materialCup= new THREE.MeshLambertMaterial({
        color:0xfeed01, side: THREE.DoubleSide
    });
    var meshCupula=new THREE.Mesh(cupula,materialCup);
    //scene.add(meshCupula);
    meshCupula.position.set(0,17.5,-9);
    meshCupula.rotation.z=1.5708;
    meshCupula.rotation.y=1.5708;

//CUADRO CON ESTAMPADO
    var cupulaA=new THREE.PlaneGeometry(33,15);
    var textEstampado=new THREE.TextureLoader().load("./assets/estampado.jpg");
    var materialEstampado=new THREE.MeshLambertMaterial({map:textEstampado,side: THREE.DoubleSide});
    var meshCupulaA=new THREE.Mesh(cupulaA,materialEstampado);
    //scene.add(meshCupulaA);
    meshCupulaA.position.set(0,40,4);
    //meshCupulaA.rotation.z=1.5708;
    //meshCupulaA.rotation.y=1.5708;

//CUBOS DONDE IRAN LAS LETRAS
    var CUBO1=new THREE.BoxGeometry(10,16,1);
    var materialCupA=new THREE.MeshLambertMaterial({
        color:0x0297d9, side: THREE.DoubleSide
    });
    var meshCubo=new THREE.Mesh(CUBO1,materialCupA);
    //scene.add(meshCubo);
    meshCubo.position.set(-11.5,26,4);

    var CUBO2=new THREE.BoxGeometry(10,16,1);
    var meshCubo2=new THREE.Mesh(CUBO2,materialCupA);
    //scene.add(meshCubo2);
    meshCubo2.position.set(11.5,26,4);

    var CUBO3=new THREE.BoxGeometry(20,10,1);
    var meshCubo3=new THREE.Mesh(CUBO3,materialCupA);
    //scene.add(meshCubo3);
    meshCubo3.position.set(0,29,4);

//TEXTOS   
    var loader=new FontLoader();

      var font=loader.parse(fontJSON);
      var geometry1=new TextGeometry('R A M',{
        font:font,
        size:6,
        height:2,
      });
      geometry1.center();

      var material1=new THREE.MeshLambertMaterial({
        color:0x000000,
        emissive:0xB1FCCF,
        shading:THREE.FlatShading,
        
      });
        var texto=new THREE.Mesh(geometry1,material1);
        texto.position.set(0,29,5);
        texto.castShadow=true;
        //scene.add(texto);

        const trajinerafinal=new THREE.Group(traj,mesh,mesh2,mesh3,mesh4,mesh5,mesh51,mesh6,mesh61,mesh7,mesh8,mesh9,mesh10,meshCupula,meshCupulaA,meshCubo,meshCubo2,meshCubo3,texto);
            trajinerafinal.add();
            trajinerafinal.position.set(x,y,z);
        
            return trajinerafinal;
}