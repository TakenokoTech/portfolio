import * as React from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import WebVRM from "../utils/vrm/WebVRM";
import GLTFLoader from "three-gltf-loader";
import { Vector3, Quaternion } from "three";
// import WebVRM from "ts-vrm/src/ts-vrm/vrm/WebVRM";
import "./PandaVRM.scss";

export interface PandaVRMProps {}
export interface PandaVRMState {}

export default class PandaVRM extends React.Component<
    PandaVRMProps,
    PandaVRMState
> {
    public scene = new THREE.Scene();
    public camera: THREE.Camera;
    public avatar: WebVRM;
    public renderer: THREE.WebGLRenderer;
    public controls: OrbitControls;

    private time: number = 0;
    private clock = new THREE.Clock();
    private width = 0;
    private height = 0;
    private animation: VrmAnimation[] = [];
    private avaterBones: { [key: string]: THREE.Bone } = {};
    private objList: THREE.Object3D[] = [];

    constructor(props: PandaVRMProps) {
        super(props);
    }

    componentDidMount() {
        this.width = document.getElementById("panda").clientWidth;
        this.height = document.getElementById("panda").clientHeight;
        this.camera = this.createCamera();
        this.controls = this.createControls();
        this.renderer = this.createRenderer();
        this.avatar = new WebVRM("panda.vrm", this.onLoad.bind(this));
        document.getElementById("panda").appendChild(this.renderer.domElement);
        this.addScene();
        this.requestAnimationFrame();
        this.loadAnime();
    }

    render() {
        return <div id="panda" className="view" ref="box" />;
    }

    requestAnimationFrame() {
        this.time += 1; //this.clock.getDelta();
        requestAnimationFrame(this.requestAnimationFrame.bind(this));
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
        for (let ani of this.animation) {
            let name = this.avatar.humanoidBone[ani.name] || "";
            name = name.replace(".", "");
            const bone = this.avaterBones[name];
            const key = ani.keys[this.time % (ani.keys.length - 1)];
            if (!bone || !key) continue;
            this.avaterBones[name].quaternion.set(
                -key.rot[0],
                -key.rot[1],
                key.rot[2],
                key.rot[3]
            );
        }
    }

    addScene() {
        this.scene.add(this.createDictLight(new Vector3(-128, 256, -128)));
        this.objList.forEach(element => this.scene.add(element));
    }

    createDictLight(
        position: Vector3 = new Vector3(0, 256, -256)
    ): THREE.Light | THREE.Object3D {
        const FIELD_SIZE = position.y;
        const directionalLight = new THREE.DirectionalLight(0xaaaaaa, 1.6);
        directionalLight.name = "Directional Light";
        directionalLight.position.set(position.x, position.y, position.z);
        directionalLight.shadow.camera.near = 0; //0.5;
        directionalLight.shadow.camera.top = FIELD_SIZE;
        directionalLight.shadow.camera.bottom = FIELD_SIZE * -1;
        directionalLight.shadow.camera.left = FIELD_SIZE;
        directionalLight.shadow.camera.right = FIELD_SIZE * -1;
        directionalLight.shadow.mapSize.width = 4096;
        directionalLight.shadow.mapSize.height = 4096;
        directionalLight.castShadow = true;
        return directionalLight;
    }

    createCamera(): THREE.PerspectiveCamera {
        const camera = new THREE.PerspectiveCamera(
            45,
            this.width / this.height,
            0.25,
            50000
        );
        camera.position.set(-60, 60, -200);
        return camera;
    }

    createControls(): OrbitControls {
        const controls = new OrbitControls(this.camera, this.refs.box);
        controls.target.set(0, 75, 0);
        controls.enableKeys = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.update();
        return controls;
    }

    createRenderer(): THREE.WebGLRenderer {
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(this.width, this.height);
        // renderer.setClearColor(0xaacccc, 1);
        // renderer.setPixelRatio(1);
        // renderer.gammaOutput = true;
        renderer.shadowMap.enabled = true;
        return renderer;
    }

    onLoad() {
        this.avatar.scene.traverse((object: any) => {
            if (object.isBone) this.avaterBones[object.name] = object;
        });
        this.avatar.scene.scale.x = 200;
        this.avatar.scene.scale.y = 200;
        this.avatar.scene.scale.z = 200;
        this.scene.add(this.avatar.scene);
    }

    loadAnime() {
        fetch("anime.json")
            .then((response: Response) => response.json())
            .then(json => {
                console.log(json);
                this.animation = json.vrmAnimation;
            });
    }
}

export interface Key {
    pos: number[];
    rot: number[];
    scl: number[];
    time: number;
}

export interface VrmAnimation {
    name: string;
    keys: Key[];
}

export interface RootObject {
    vrmAnimation: VrmAnimation[];
}
