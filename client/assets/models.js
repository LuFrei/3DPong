import * as THREE from 'three'

//! I can totally make this drier
export function newMesh (dimensions, color){
  const geo = new THREE.BoxGeometry(...dimensions);
  const mat = new THREE.MeshPhongMaterial({
    color: color,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    flatShading: true
  });

  return new THREE.Mesh( geo, mat );
}


const ball = newMesh([1, 1, 1], 0x156289);
const paddle = newMesh([1, 1, 0.25], 0xFFFFFF);

export default {
  ball, 
  paddle
}