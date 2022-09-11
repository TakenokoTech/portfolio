import { LoadingManager, DefaultLoadingManager } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

type onLoad = Function;
type onProgress = (event: ProgressEvent) => void;
type onError = (event: ErrorEvent) => void;

/**
 * @author Takahiro / https://github.com/takahirox
 */

// VRM Specification: https://dwango.github.io/vrm/vrm_spec/
//
// VRM is based on glTF 2.0 and VRM extension is defined
// in top-level json.extensions.VRM
export default class VRMLoader {
    private manager: LoadingManager;
    private glTFLoader: GLTFLoader;

    constructor() {
        this.manager = DefaultLoadingManager;
        this.glTFLoader = new GLTFLoader(this.manager);
    }

    load(
        url: string,
        onLoad: onLoad,
        onProgress: onProgress = e => {
            console.log(e);
        },
        onError: onError = e => {
            console.log(e);
        }
    ) {
        var scope = this;
        this.glTFLoader.load(
            url,
            gltf => scope.parse(gltf, onLoad),
            onProgress,
            onError
        );
    }

    setCrossOrigin(value: string) {
        // this.glTFLoader.setCrossOrigin(value);
        return this;
    }

    setPath(value: string) {
        // this.glTFLoader.setPath(value);
        return this;
    }

    setResourcePath(value: string) {
        // this.glTFLoader.setResourcePath(value);
        return this;
    }

    setDRACOLoader(dracoLoader: DRACOLoader) {
        // this.glTFLoader.setDRACOLoader(dracoLoader);
        return this;
    }

    parse(gltf: any, onLoad: onLoad) {
        var gltfParser = gltf.parser;
        var gltfExtensions = gltf.userData.gltfExtensions || {};
        var vrmExtension = gltfExtensions.VRM || {};
        onLoad(gltf);
    }
}
