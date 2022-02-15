const express = require('express');
const fs = require('fs');

const app = express();

const password = "sex12";

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json());

app.get('/apply', (req, res) => {
    var username = atob(req.query.i);
    res.render('form', {username:username});
});

app.post('/api/post/json', (req, res) => {
    var data =JSON.parse(JSON.stringify(req.body));
    var username = data.username;
    fs.access(__dirname + '/public/data/' + username + '.json', fs.F_OK, (err) => {
        if (err) {
            fs.writeFile(__dirname + '/public/data/' + username + '.json', JSON.stringify(data), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            return
        }
    });
});

app.get('/admin/login', (req, res) => {
    res.render('login');
})

app.post('/api/adminservices/login', (req, res) => {
    const data = req.body;
    if (data.code == password){
        res.json({
            tokenCorrect: "true"
        });
    } else {
        res.json({
            tokenCorrect: "false"
        });
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});