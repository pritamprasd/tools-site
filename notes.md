### setup commands:
```
npm install --save-dev react-scripts typescript ts-loader webpack webpack-cli webpack-dev-server
npm install react react-dom @types/react @types/react-dom
```


http://localhost:8082/


- https://rustwasm.github.io/docs/book/game-of-life/setup.html
- https://rustwasm.github.io/wasm-pack/installer/
- 


```
I was not able to configure cloudflare build to have run `cargo build` and rust env support, 
So for now, it responsibility of dev to build wasm in local machine with `npm local-build`. And update repo with built wasm file.
```