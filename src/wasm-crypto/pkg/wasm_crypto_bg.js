let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    const ret = wasm.add(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function subtract(a, b) {
    const ret = wasm.subtract(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function mul(a, b) {
    const ret = wasm.mul(a, b);
    return ret;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function div(a, b) {
    const ret = wasm.div(a, b);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export function greet() {
    wasm.greet();
}

export function __wbg_alert_d3a7c23fbca3072c(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

