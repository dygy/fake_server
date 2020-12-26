const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')
const urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(cors());
app.set("view engine","ejs");

//app.use('/examples',express.static('public'));

app.get('/auth/api/v1/Login', function (req, res) {
    console.log(req.headers)
    if (req.headers.password && req.headers.login){
        res.json({
            "message": "Login successfully by atlasdelivery.io",
            "sessionId": "e06a971e78c7456d88d2b9e5f29ef559fcf7bd20403a4a36bf9bec28b090c05a"
        })
    }
    else {
        res.status(403);
        res.send('No data');
    }
});
app.get('/auth/api/v1/User', function (req, res) {
    console.log(req.headers.auth, 'login')
    if (req.headers.auth){
        res.json({
            "id": "e06a971e-78c7-456d-88d2-b9e5f29ef559",
            "name": "atlasdelivery.io",
            "company": {
                "id": "16ba3040-856c-4d1d-858f-b57382c1f1cc",
                "name": "Atlas"
            },
            "roles": [
                "Administrator"
            ],
            "descedantCompanies": [
                {
                    "id": "364b88a9-bc87-4b38-9a36-c643000fa500"
                },
                {
                    "id": "9c3150ef-b58a-4219-8a05-c2cff234169b"
                }
            ]
        })
    }
    else {
        res.status(401);
        res.send('string');
    }
});
app.post('/auth/api/v1/Token', (req,res)=>{
    console.log(req.headers.auth, 'token')
    const date = new Date()
    date.setMinutes(date.getMinutes()+1);
    if (req.headers.auth){
        res.json({
            "token": "e06a971e78c7456d88d2b9e5f29ef55955f0eda688bb4e348129aa5de5c2fdeea971edc36aab47018553c60d1270267e",
            "expiredAt": date.toISOString()
        })
    }
    else {
        res.status(401);
        res.send('string');
    }
})

app.listen(8080);
