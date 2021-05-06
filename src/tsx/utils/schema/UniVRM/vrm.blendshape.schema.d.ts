/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface VrmBlendshape {
  blendShapeGroups?: VrmBlendshapeGroup[];
  [k: string]: any;
}
export interface VrmBlendshapeGroup {
  /**
   * Expression name
   */
  name?: string;
  /**
   * Predefined Expression name
   */
  presetName?:
    | "unknown"
    | "neutral"
    | "a"
    | "i"
    | "u"
    | "e"
    | "o"
    | "blink"
    | "joy"
    | "angry"
    | "sorrow"
    | "fun"
    | "lookup"
    | "lookdown"
    | "lookleft"
    | "lookright"
    | "blink_l"
    | "blink_r";
  /**
   * Low level blendshape references.
   */
  binds?: VrmBlendshapeBind[];
  /**
   * Material animation references.
   */
  materialValues?: VrmBlendshapeMaterialbind[];
  /**
   * 0 or 1. Do not allow an intermediate value. Value should rounded
   */
  isBinary?: boolean;
  [k: string]: any;
}
export interface VrmBlendshapeBind {
  mesh?: number;
  index?: number;
  /**
   * SkinnedMeshRenderer.SetBlendShapeWeight
   */
  weight?: number;
  [k: string]: any;
}
export interface VrmBlendshapeMaterialbind {
  materialName?: string;
  propertyName?: string;
  targetValue?: number[];
  [k: string]: any;
}