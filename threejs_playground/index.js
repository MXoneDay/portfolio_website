import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";

const scene = new THREE.Scene()

const camera = new THREE.
    PerspectiveCamera(
        75, innerWidth / innerHeight,
        0.1, 1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

//Sphere
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
        5, 50, 50,
        new THREE.MeshBasicMaterial({
            color: 0xFF0000
        })
    )
)

console.log("HOI");

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

console.log(sphere);