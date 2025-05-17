import express from 'express'
import bodyParser from 'body-parser';
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';

const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});