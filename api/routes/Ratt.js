var express = require("express");
var router = express()
var bodyParser = require("body-parser");
const { GoogleSpreadsheet }  = require("google-spreadsheet");
const creds = require('./client_secret.json');
var RattMatt = [];
var Dates = [];
var Lieu = [];
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post('/', (request, response) => {
    RattMatt = []
    RattMatt = request.body.RattMatt;
  }); 
router.get("/", async function(req, res) {
    Dates = []; Lieu = [];
    await accessSpreadsheet();
    return(res.send({Dates : Dates, Lieu : Lieu }))
});

async function accessSpreadsheet(){
    const doc = new GoogleSpreadsheet('1_ufnb5IW8n74F6RClbN2JmuHOxQ_Y-BlPH_Ub12d0A0');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[0]; 
    const rows = await sheet.getRows();
    await rows.forEach( (row) => RattMatt.forEach((element) => 
    {if (element.indexOf(row.Modules_Matieres) !== -1) {
   Dates.push(row.Date_Rattrapage);
   Lieu.push(row.Lieu);
    } }
    ) )
  }
  /* async function Compare(myRow){
        RattMatt.forEach(element => {
            if( myRow.Modules_Matieres.includes(element)) {
               console.log(myRow.Date_Rattrapage);
            }
            else (console.log(nope));
        });
   } */
  
module.exports = router;
