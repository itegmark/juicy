use wasm_bindgen::prelude::*;

// cargo install wasm-pack
// wasm-pack build --release --out-dir public/wasm

#[wasm_bindgen]
pub fn draw_circle(ctx: web_sys::CanvasRenderingContext2d, x: f64, y: f64) {
    ctx.begin_path();
    ctx.arc(x, y, 50.0, 0.0, 2.0 * std::f64::consts::PI)
        .unwrap();
    ctx.stroke();
}
