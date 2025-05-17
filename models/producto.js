import { conectar, mssql } from "../util/conexionsql.js";

export class Producto {
    constructor(id, nombre, categoriaId, precio, descripcion) {
        this.id = id,
        this.nombre = nombre,
        this.id = categoriaId,
        this.categoriaId = precio,
        this.descripcion = descripcion
    }


    static async agregarProducto(nombre, categoriaId,){
        return
    }

    
    static async obtenerProductos(){
        try {
            const pool = await conectar();
            const result = await pool.request().execute('[dbo].[sp_ObtenerInventarioDetallado]')
            return result.recordset
        } catch (error) {
            console.log(error)
        }
    }



}