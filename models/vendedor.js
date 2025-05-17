import { conectar, mssql } from "../util/conexionsql.js";

export class Vendedor {
    constructor(id, nombre, usuario, contraseña, rol,){
        this.id = id;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.rol = rol;
    }


    static async agregarVendedor(nombre, usuario, contraseña, rol) {
        try {
            const pool = await conectar();
            await pool.request().input('Nombre', mssql.NVarChar(100), nombre).input('Usuario', mssql.NVarChar(50), usuario).input('Contraseña', mssql.NVarChar(255), contraseña).input('Rol', mssql.NVarChar(50), rol).execute('[dbo].[sva_UsuarioIns]')
        } catch (error) {
            console.log(error)
        }
    }


    static async editarVendedor(id, nombre, usuario, rol) {
        try {
            const pool = await conectar();
            await pool.request().input('idUsuario', mssql.Int, id).input('Nombre', mssql.NVarChar(100), nombre)
            .input('Usuario', mssql.NVarChar(50), usuario)
            .input('Rol', mssql.NVarChar(50), rol)
            .execute('[dbo].[sva_UsuarioUpd]')
        } catch (error) {
            console.log(error)
        }
    }


    static async selVendedores(){
        const mesActual = new Date().getMonth() + 1
        const añoActual = new Date().getFullYear()

        try {
            const pool = await conectar()
            const result = await pool.request().input('Mes', mssql.Int, mesActual).input('Anio', mssql.Int, añoActual).execute('[dbo].[sva_UsuarioVentasPorMesSel]')
            return (result).recordset
        } catch (error) {
            console.log(error)
        }
    }


    static async eliminarVendedor(id){
        try {
            const pool = await conectar()
            await pool.request().input('idUsuario', mssql.Int, id).execute('[dbo].[sva_UsuarioDel]')
        } catch (error) {
            console.log(error)
        }
    }
}