import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { join } from 'path'; // Import the 'join' function from the path module

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
const port = 5000;

app.set('view engine','ejs');
app.set('views', join(__dirname, 'views'));

app.use(cors({
    origin:'http://localhost:3000',
    credentials: true,
}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/api',(req,res)=>{
    res.send("Server End");
});

app.post('/api/login', (req, res) => {
        console.log(req.body);
        const title = req.body.name;
        res.json({"message":"ok"});
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})