import React, { useEffect } from 'react'
import './CryptoGen.css';
import '../../App.css';
import rust_wasm_init, { add , greet} from '../../wasm-crypto/pkg/wasm_crypto'


export default function CryptoGen() {
    useEffect(() => {
        const loadWasm = async () => {
            try {
                const path_to_wasm = "/wasm_crypto_bg.wasm";
                await rust_wasm_init(path_to_wasm);
                const result = add(5, 3);
                alert('Result of addition: '+ result);
            } catch (error) {
                console.error('Error loading WebAssembly:', error);
            }
        }
        loadWasm();
    }, []);
    return (
        <div>

        </div>
    )
}
