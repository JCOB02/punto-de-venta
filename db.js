import pkg from 'mssql';
const { NVarChar, connect } = pkg;
import db from "./util/conexion.js"
import {conectar, mssql} from "./util/conexionsql.js";


export async function selProd() {
    const result = await db.query("SELECT * FROM productos;");
    return result.rows;
}

export async function selVentas() {
    const result = await db.query("SELECT * FROM ventas;");
    return result.rows;
}

//----------------- USUARIOS -----------------//

// export async function selUsuario() {
//     try {
//         const pool = await conectar()
//         const result = await pool.request().execute('[dbo].[sva_UsuarioSel]')
//         return (result).recordset

//     } catch (error) {
//         console.log(error)
//     }
// }


export async function addUsuario(nombre, usuario, contraseña, rol) {
    try {
        const pool = await conectar();
        await pool.request().input('Nombre', mssql.NVarChar(100), nombre).input('Usuario', mssql.NVarChar(50), usuario).input('Contraseña', mssql.NVarChar(255), contraseña).input('Rol', mssql.NVarChar(50), rol).execute('[dbo].[sva_UsuarioIns]')
    } catch (error) {
        console.log(error)
    }
}


export async function editUsuario(idUsuario, nombre, usuario, rol) {
    try {
        const pool = await conectar();
        await pool.request().input('idUsuario', mssql.Int, idUsuario).input('Nombre', mssql.NVarChar(100), nombre).input('Usuario', mssql.NVarChar(255), usuario).input('Rol', mssql.NVarChar(50), rol).execute('[dbo].[sva_UsuarioUpd]');    
    } catch (error) {
        console.log(error)
    }
}


export async function delUsuario(idUsuario) {
    try {
        const pool = await conectar();
        await pool.request().input('idUsuario', mssql.Int, idUsuario).execute('[dbo].[sva_UsuarioDel]')
    } catch (error) {
        console.log(error)
    }
}


//----------------- AUTH -----------------//



export async function autenticacion() {
    const usuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;
    console.log(usuario);
    console.log(contraseña);
}   