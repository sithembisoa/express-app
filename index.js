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

app.post('/newItem' ,(req, res)=>
    res.send(`a post request /newItem on PORT ${PORT}`)
);

app.put('/newItem:itemID' ,(req, res)=>
    res.send(`a put request /newItem:itemID on PORT ${PORT}`)
);

app.delete('/newItem:itemID' ,(req, res)=>
    res.send(`a delete request /newItem:itemID on PORT ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on PORT ${PORT}`);
});