    import mssql from 'mssql'

    const config = {
        server: "localhost",
        database: "PuntoDeVentaRopa",
        user: 'julioob',
        password: 'falcon',
        options: {
            encrypt: true,
            trustServerCertificate: true
        },
    };

    export async function conectar() {
        try {
            return await mssql.connect(config);
        } catch (error) {
            console.log(error)
        }
    } 

    export {mssql}