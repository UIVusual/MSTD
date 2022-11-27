// unusual 
a = document.getElementsByClassName("scorebox");
for (const property in a) {
 try{
 console.log(`${property}: ${a[property].id}`);
 point = Math.floor(Math.random() * 3);
 element = `${a[property].id}_${point}`;
 console.log(element);
 document.getElementById(element).click()
 } catch(e) {
   console.log("Skip");
 }
}
