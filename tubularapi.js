csvdataapi();

async function csvdataapi(){
    const response = await fetch('ZonAnn.Ts+dSST.csv');     //fecth the csv data
    const data = await response.text();                     // convert data in text format
    console.log(data);                                      //display data on console

    const table = data.split('\n').splice(1);             //splict in new line and work of splice is remove 0 index in array
    table.forEach(row=>{                                  //for loop on table
        const cols =  row.split(',');                     //break in new line whenever comma occur
        const year = cols[0];                              //in year store the vale of 0 index in col
        const temp = cols[1];                            //in temp store the value of 1 index in cols which is a temperature
        console.log(year,'-',temp);                     // show the value of year and temperature
    });
}


// fetch('ZonAnn.Ts+dSST.csv').then(response=>{
//     console.log(response);
//     return response.text();
// })