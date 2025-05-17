import { Producto } from "../models/producto.js";

export const obtenerProductos = async (req, res) => {
    function traducirColor(color){
        const trad = {
            'Negro': 'black',
            'Blanco': 'white',
            'Rojo': 'red',
            'Azul': 'blue',
            'Verde': 'green',
            'Rosa': 'pink',
            'Morado': 'purple',
            'Amarillo': 'yellow',
            'Café': 'brown',
            'Gris': 'gray'
        }
        return trad[color]
    }
    const productos = await Producto.obtenerProductos()
    productos.forEach(p => {
        p.ColorCss = 'color-' + traducirColor(p.Color)
    })
    res.render('inventario.ejs', {productos: productos})
}