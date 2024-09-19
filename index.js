const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/submit', (req, res) => {
    const { title, description, color } = req.query;  
    // if (title, description, color) {
    //     return res.status(400).json({ error: ' required' });
    // }
console.log(title);

    res.json({ title  ,description ,color});
});

app.post('/submit', (req, res) => {
    const { title, description, color } = req.body;
  
    if (!title || !description) {
        return res.status(400).json({ error: ' required' });
    }

    res.json({ title, description, color });
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/delete', (req, res) => {
    const { color } = req.body;  
    if (!color) {
        return res.status(400).json({ error: ' delete a user' });
    }

    
    res.json({ message: `deleted successfully` });
});

app.listen(port, () => {
    console.log(`running`);
});
