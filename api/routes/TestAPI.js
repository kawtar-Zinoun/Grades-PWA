var express = require("express");
var router = express()
var bodyParser = require("body-parser");
const { GoogleSpreadsheet }  = require("google-spreadsheet");
const creds = require('./client_secret.json');
var row_id = 0;
var modules = [];
var notesGenerales = [];
var notesModule1 = [];
var notesModule2 = [];
var notesModule3= [];
var notesModule4 = [];
var email = '';
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post('/', (request, response) => {
  email = request.body.email;
 
}); 
router.get("/", async function(req, res) {
 notesGenerales = []; notesModule1 = []; notesModule2 = []; notesModule3= []; notesModule4 = [];
  await accessSpreadsheet();
  return (res.send({NotesGenerales : notesGenerales, NotesModule1: notesModule1, notesModule2: notesModule2
  , notesModule3: notesModule3, notesModule4: notesModule4 })); 
   
});

async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet('15J_m4WPqDk2XLKHpZ51Rskh7jDMuZRbHPecbY5mUzrM');
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo(); 
  const sheet = doc.sheetsByIndex[0]; 
  const rows = await sheet.getRows();
  rows.forEach( row => {

   getMail(row)
  })
  
  ModuleNames(sheet)
  
}

 async function getMail(mails){
  if (mails.Email == email) {
    //console.log('User Found');
    row_id = mails.rowNumber;
    notesGenerales.push(mails.Moy_One, mails.Moy_Two, mails.Moy_three, mails.Moy_four);
    notesModule1.push(mails.moy_one_mat1,mails.moy_one_mat2,mails.moy_one_mat3);
    notesModule2.push(mails.Moy_two_mat1,mails.Moy_two_mat2,mails.Moy_two_mat3,mails.Moy_two_mat4);
    notesModule3.push(mails.Moy_three_1,mails.Moy_three_2,mails.Moy_three_3,mails.Moy_three_4
      ,mails.Moy_three_5,mails.Moy_three_6);
    notesModule4.push(mails.Moy_four_1,mails.Moy_four_2,mails.Moy_four_3);
  };
}
async function ModuleNames(sheet){
  await sheet.loadCells(); 
const matiere = sheet.getCellByA1("H6").value;
const matiere2 = sheet.getCellByA1("J6").value;
const matiere3 = sheet.getCellByA1("M6").value;
const matiere4 = sheet.getCellByA1("O6").value;
const matiere5 = sheet.getCellByA1("S6").value;
const matiere6 = sheet.getCellByA1("U6").value;
const matiere7 = sheet.getCellByA1("W6").value;
const matiere8 = sheet.getCellByA1("AA6").value;
const matiere9 = sheet.getCellByA1("AB6").value;
modules.push(matiere, matiere2, matiere3, matiere4, matiere5, matiere6, matiere7,matiere8, matiere9);

}


module.exports = router;