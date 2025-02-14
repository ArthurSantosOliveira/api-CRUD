const express = require('express');
const app = express();
const cors = require('cors');

const Routes = require('./routes/Routes');


// habilitando o CORS para o frontend (localhost:4200)
app.use(cors({
    origin: 'http://localhost:4200',
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/', Routes);

app.listen(PORT, () => {
    console.log(`Servidor explodindo na porta ${PORT}`);
});
