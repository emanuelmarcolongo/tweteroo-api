import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

const userFormat = 
{
    username: 'cachorrineo',
    avatar: "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg"
}

const tweetFormat = 
{
    username: "bobesponja",
  tweet: "eu amo o hub"
}

app.get('', (req, res) => {
    console.log(res)
});


app.post('/sign-up', (req, res) => {
   const {username, avatar} = req.body;
})

app.listen(5000);