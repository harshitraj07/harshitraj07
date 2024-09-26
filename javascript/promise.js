

function myFunc() {
  return new Promise((resolve, reject) => {
    let msg= "hi i'm ghost"
    if (msg==0) {
      resolve("Msg Found");
      // return "its true"
    } else {
      return reject("Msg Not Found");
    }
  });
}
// myFunc()
//   .then((data) => console.log(data))
//   .catch((e) => {
//     console.log(e.msg);
//   });
 myFunc().then((data) =>console.log(data)).catch((error) => console.log(error)).finally(()=> console.log("its done"))
 
