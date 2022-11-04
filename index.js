import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());



app.get('/receitas', (req, res) => {
    console.log(res)
});


app.post('/receitas', (req, res) => {
    console.log(res)
})

app.listen(5000);