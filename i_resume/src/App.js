import * as THREE from 'three'
import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";
import  { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(0, 0, 10);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", (event) => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

let controls = new OrbitControls(camera, renderer.domElement);

let light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.setScalar(1);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.9));

let g = new THREE.OctahedronGeometry(5);
setOctahedron(g);
let tl = new THREE.TextureLoader();
let m = [
  "uv_grid_opengl.jpg",
  "758px-Canestra_di_frutta_(Caravaggio).jpg",
  "brick_diffuse.jpg",
  "crate.gif",
  "colors.png",
  "hardwood2_diffuse.jpg",
  "sprite2.png",
  "water.jpg"
].map((tex) => {
  let path = "https://threejs.org/examples/textures/";
  return new THREE.MeshLambertMaterial({ map: tl.load(path + tex) });
});
let o = new THREE.Mesh(g, m);
scene.add(o);

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
});

function setOctahedron(g) {
  let pos = g.attributes.position;
  let faces = pos.count / 3;
  let groupStart = 0;
  for (let i = 0; i < faces; i++) {
    g.addGroup(groupStart, 3, i);
    groupStart += 3;
  }
  let uvs = [];
  uvs.push(0.5,1,0.06698729810778059,0.25,0.9330127018922194,0.25);
  uvs.push(0.06698729810778059,0.75,0.5,0,0.9330127018922194,0.75);
  uvs.push(0.5,0,0.9330127018922194,0.75,0.06698729810778059,0.75);
  uvs.push(0.9330127018922194,0.25,0.5,1,0.06698729810778059,0.25);
  uvs.push(0.5,1,0.06698729810778059,0.25,0.9330127018922194,0.25);
  uvs.push(0.06698729810778059,0.75,0.5,0,0.9330127018922194,0.75);
  uvs.push(0.5,0,0.9330127018922194,0.75,0.06698729810778059,0.75);
  uvs.push(0.9330127018922194,0.25,0.5,1,0.06698729810778059,0.25);
  g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
}

function MyOctahedron() {
  return;
}

export default MyOctahedron;