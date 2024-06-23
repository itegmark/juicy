This is a min proj to link wasm with canvas (based on next.js).

## Getting Started

First, install deps (assuming Arch Linux):

```bash
sudo pacman -S nodejs npm rust
npm install -g pnpm
cargo install wasm-pack

```

Second, compile wasm (this will place the wasm exactly where the page.tsx expects it to be, so no need to push it in webpack config (which means no need for those commented out lines in next.config.mjs)):

```bash
wasm-pack build --release --out-dir public/wasm
```

Third, run the dev server:

```bash
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

See the red square there in the web page - it's a canvas element, click on it, and a black circle appear - it was drawn by wasm.

Now go ahead and build the rest of figma, miro or whatever.

BTW, rust src for wasm is located in src folder
