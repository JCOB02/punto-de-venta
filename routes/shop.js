import express from 'express';
import { dirname } from 'path'
import { fileURLToPath } from 'url';
import { getVendedores, agregarVendedor, eliminarVendedor, editarVendedor } from '../controllers/vendedores.js';
import { obtenerProductos } from '../controllers/producto.js';
import {selProd, selVentas} from '../db.js';



//PRUEBA

import {conectar} from "../util/conexionsql.js";



// ------- FIN

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const routes = express.Router();



routes.get('/', (req, res) => {
    res.render('login.ejs');
});

// routes.post('/login', (req, res)=>{
//     res.redirect('/dashboard')
// })

routes.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs')
})

routes.get('/ventas', async (req, res) => {
    const ventas = await selVentas()
    res.render('ventas.ejs', {vent: ventas})
})

routes.get('/vendedores', getVendedores)

routes.get('/inventario', obtenerProductos)

routes.get('/reportes', (req, res) => {
    res.render('reportes.ejs')
})

routes.get('/cerrar_sesion', (req, res) => {
    res.redirect('/')
})


//---------------- VENDEDORES -----------------//


routes.post('/agregarVendedor', agregarVendedor)

routes.post('/editarVendedor', editarVendedor)

routes.post('/eliminarVendedor', eliminarVendedor)


//---------------- AUTH ------------------------//

routes.post('/login', async (req, res) => {
    const nombreUsuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;
    const pool = await conectar();
    const result = await pool.query`SELECT Usuario, Contraseña FROM Usuarios WHERE Usuario = ${nombreUsuario}`
    if (result.rowsAffected[0] > 0) {
        const contraseñaBd = result.recordset[0].Contraseña
        if (contraseña === contraseñaBd) {
            res.redirect('/dashboard')
        } else {
            res.redirect('/')
            console.log('Contraseña incorrecta')
        }
    } else {
        console.log("Usuario no existente")
        res.redirect('/')
    }
});

export default routes;