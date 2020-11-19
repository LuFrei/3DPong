import * as THREE from 'three'

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


export const ball = newMesh([1, 1, 1], 0x156289);
export const paddle = newMesh([1, 1, 0.25], 0xFFFFFF);