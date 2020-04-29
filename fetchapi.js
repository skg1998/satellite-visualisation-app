console.log('About to fetch api');

//with async await function
catchRainbow();
async function catchRainbow(){
    const respose = await fetch('rainbow.jpg');
    const blob = await respose.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}


// fetch('rainbow.jpg')
// .then(response =>{
//     console.log(response);
//     return response.blob();
//  }) .then(blob =>{
//      console.log(blob);
//      document.getElementById('rainbow').src=URL.createObjectURL(blob);
//  }).catch(error=>{
//      console.log(error);
//  })