import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 5000;

// this is for the public folder on path /
app.use(express.static('public'));

// this is for images folder on path images
app.use('/images',express.static('images'));


app.get('/',(req, res)=>
    res.json(data)
);

app.get('/item/:id', (req, res) => {
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    res.send(data[user]);
});

app.post('/newItem' ,(req, res)=>
    res.send(`a post request /newItem on PORT ${PORT}`)
);

app.put('/item' ,(req, res)=>
    res.send(`a put request /item on PORT ${PORT}`)
);

app.delete('/item' ,(req, res)=>
    res.send(`a delete request /item on PORT ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on PORT ${PORT}`);
});