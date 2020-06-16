import * as fs from 'fs';

var filename = "output.txt";
var text = "なんか適当な文章";


try {
  fs.writeFileSync(filename, text);
  console.log("Save txt file -> "+filename);
}catch(e){
  console.log(e);
}
