//CREATE A MAP AND TILES WITH LEAFLET.JS
const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = ' &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
const tileUrl ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(mymap);

//MAKING A MARKER AND ICON
var issicon = L.icon({
    iconUrl:'iconiss.png',
    iconSize:[50,32],
    iconAnchor:[25,16],
    // popupAnchar:[-3,-76],
    // shadowUrl:'',
    // shadowSize:[68,95],
    // shadowAnchor:[22,94]
})
const marker = L.marker([0,0],{icon:issicon}).addTo(mymap);

const json_URL = 'https://api.wheretheiss.at/v1/satellites/25544';    //store the url in json_URL varible
let firstTime = true;
async function viewJsonData(){                                        // create a async function
    const response = await fetch(json_URL);                          // fetch the url and store in response varible
    const data =await response.json();                                //convert the response in json data and store it in data variable
    console.log(data.latitude);                                      // show latitude of data
    console.log(data.longitude);                                     // show longitude of data
    document.getElementById('lat').textContent=data.latitude.toFixed(2);         //selecte the element by id and show data latitude
    document.getElementById('lon').textContent = data.longitude.toFixed(2);      // select the element y id and show data longitude
    marker.setLatLng([data.latitude,data.longitude]);
    if(firstTime){
        mymap.setView([data.latitude,data.longitude],2);
        firstTime=false;
    }

    document.getElementById('lat').appendChild=data.latitude.toFixed(2) ;
    document.getElementById('lon').appendChild = data.longitude.toFixed(2);
    
}
viewJsonData();                                                      // call the function

setInterval(viewJsonData,1000);
