import express from 'express';
import fs from 'fs';
import { scrape } from './scrape.js';
import router from './router.js';


const PORT = 5001;
const link ='https://www.dns-shop.ru/product/973cca7a15ceed20/61-smartfon-apple-iphone-13-256-gb-belyj/'

const app = express();

app.use(express.json())
app.use('/api', router)

async function startApp(){
  try {
    setInterval( async() => {
      console.log('start parse')
      const value = await scrape(link)
      fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
          let obj = JSON.parse(data); 
          obj.table.push(value);
          fs.writeFile('data.json', JSON.stringify(obj), function(err) {
            if (err) throw err;
            console.log('update table');
            console.log(value)
          }
          );
        }
      })
    }, 86400000)
    app.listen(PORT ,() => console.log(`server started on port - ${PORT}`) )
  } catch (e) {
    console.log(e)
  }
}

startApp()