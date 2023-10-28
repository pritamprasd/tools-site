import React, { useEffect } from 'react'
import './CryptoGen.css';
import '../../App.css';


export default function CryptoGen() {
    useEffect(() => {
        const loadWasm = async () => {  
            try {
                const wasm = await import('../../wasm-crypto/pkg/wasm_crypto').catch(e => console.error(e));
                const result = wasm.add(5, 3);
                console.log('Result of addition: ', result);
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
