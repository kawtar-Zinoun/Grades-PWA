var express = require('express');
var router = express.Router();
var cors = require('cors');
var bodyParser = require("body-parser");
const { GoogleSpreadsheet }  = require("google-spreadsheet");
const creds = require('./client_secret.json');
router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var event ;
var user;
var state = "";
router.post('/', (request, response) => {
  
  event = request.body.event;
  user = request.body.user;
}); 
router.get('/', async function(req, res, next) {
  await accessSpreadsheet();
  res.send({ mystate: state});
});
async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('15J_m4WPqDk2XLKHpZ51Rskh7jDMuZRbHPecbY5mUzrM');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[0]; 
  const rows = await sheet.getRows();
  rows.forEach( row => {
   getMail(row);
 }) }
 async function getMail(row) {
    RattNum = event.substring(11,15);
    if (row.Email == user) {
    
     if(event.indexOf("M5") !== -1) {
      
       if(row.Moy1.indexOf(RattNum) != -1) { state = "false"  }
       else {
       state = "true";
      }}
     else if(event.indexOf("M6") !== -1) {
      
        if(row.Moy2.indexOf(RattNum) != -1) { state = "false"  }
        else {
        state = "true";
       } }
       else if(event.indexOf("M7") !== -1) {
      
        if(row.Moy3.indexOf(RattNum) != -1) { state = "false"  }
        else {
        state = "true";
       } }
       else if(event.indexOf("M8") !== -1) {
      
        if(row.Moy4.indexOf(RattNum) != -1) { state = "false"  }
        else {
        state = "true";
       } }
     }}
 
module.exports = router;
