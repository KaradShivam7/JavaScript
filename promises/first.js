const myPromise = new Promise((resolve, reject) => {
  let age = 21;

  if (age>18) {
    resolve("eligible for voat!");
  } else {
    reject("not eligible");
  }
});


myPromise
  .then(result => {
    console.log(result); // "It worked!"
  })
  .catch(error => {
    console.error(error);
  });
