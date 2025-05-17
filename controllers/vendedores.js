import { Vendedor } from '../models/vendedor.js';


export const getVendedores = async (req, res) => {
    const vendedores = await Vendedor.selVendedores()
    res.render('vendedores.ejs', {vendedores: vendedores})
}


export const agregarVendedor = async (req, res) => {
    const nombre = req.body.nombreVendedor;
    const usuario = req.body.usuarioVendedor;
    const rol = req.body.rolVendedor;
    const contraseña = req.body.contraseñaVendedor;
    await Vendedor.agregarVendedor(nombre, usuario, contraseña, rol)
    res.redirect('/vendedores')
}


export const editarVendedor = async (req, res) => {
    const id = req.body.usuarioId;
    const nombre = req.body.nombreVendedor;
    const nombreUsuario = req.body.usuarioVendedor;
    const rol = req.body.rolVendedor;
    await Vendedor.editarVendedor(id, nombre, nombreUsuario, rol)
    res.redirect('/vendedores')
}


export const eliminarVendedor = async (req, res) => {
    const usuarioId = req.body.usuarioId;
    await Vendedor.eliminarVendedor(usuarioId)
    res.redirect('/vendedores')
}