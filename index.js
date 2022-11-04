import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const currentUser = [];

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

app.get ("/tweets", (req, res) => {

    res.send(tweets);
});


app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;

    const newTweet = {
    username,
    tweet
    }

    if (!username || !tweet) {
        res.sendStatus(400).send("Preencha todos os campos");
        return;
       }

    tweets.push(newTweet);
    res.sendStatus(200).send("OK")
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
   
   currentUser.push(newUser);
   users.push(newUser);
   res.sendStatus(200).send("OK");
})

app.listen(5000);