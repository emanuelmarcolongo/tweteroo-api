import express, { json } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const currentUser = {username: "", avatar: ""};

const users = [];

const tweets = [];

app.get ("/tweets", (req, res) => {

    
    if (tweets.length > 10) {
        const latestTweets = [];
        for (let i = tweets.length-10; i < tweets.length; i++) {
            latestTweets.push(tweets[i]);

        }

        const reverseTweets = latestTweets.reverse();
        res.send(reverseTweets);
        return;
    }
   
    const reverse = tweets.reverse();
    res.send(reverse);
});


app.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;

    const newTweet = {
    username,
    avatar: currentUser.avatar,
    tweet
    }

    if (!username || !tweet) {
        res.sendStatus(400).send("Todos os campos são obrigatórios");
        return;
       }

    tweets.push(newTweet);
    res.sendStatus(201);
});


app.post('/sign-up', (req, res) => {
   const {username, avatar} = req.body;

   const newUser = {
    username,
    avatar
   }


   if (!username || !avatar) {
    res.sendStatus(400).send("Todos os campos são obrigatórios");
    return;
   }


   // Validação de nome de usuário igual (não estava nos requisitos)
//    const usuarios = users.find((obj) => obj.username === username);
//    if (usuarios) {
   
//     res.sendStatus(409).send("Usuário já existente")
//     return;
//    }
   
   currentUser.username = newUser.username;
   currentUser.avatar = newUser.avatar;
   users.push(newUser);
   res.sendStatus(200).send(console.log(currentUser));
})

app.listen(5000);