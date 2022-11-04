import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const user = [];

const users = [];

const tweets = [{
    username: "bobesponja",
  tweet: "eu amo o hub"
}, {
    username: "bobesponja",
  tweet: "eu amo o hub"
}, {
    username: "bobesponja",
  tweet: "eu amo o hub"
}];

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

app.get('/tweets', (req, res) => {
    res.send(tweets)
});


app.post('/sign-up', (req, res) => {
   const {username, avatar} = req.body;

   const newUser = {
    username,
    avatar
   }


   if (!username || !avatar) {
    res.sendStatus(400).send("Preencha todos os campos");
    return;
   }

   const usuarios = users.find((obj) => obj.username === username);
   if (usuarios) {
   
    res.sendStatus(409).send("Usuário já existente")
    return;
   }
   
   users.push(newUser);
   res.sendStatus(200);
})

app.listen(5000);