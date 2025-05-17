import express from 'express'

const routes = express.Router();


routes.use('/add-product', (req, res) =>{
    res.send('<h1>Agrega un producto</h1><form action="/product" method="POST"><input type="text" name="product"><button type="submit">Agregar</button></form>')
})

routes.use('/product', (req, res) => {
    res.send(`Producto agregado con exito: ${req.body.product}`)
})



export default routes;