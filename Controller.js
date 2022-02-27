import fs from 'fs';

class Controller {
  async getPriceTable(req, res) {
    try {
      fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
        if (err){
          console.log(err);
        } else {
          res.json(JSON.parse(data).table)
        }
      })
    } catch (error) {
      res.status(500).json(e)
    }  
  }
}

export default new Controller();