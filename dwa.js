const axios = require('axios');

const date = '2022-12-23';

/*async function myaxios(url) {
    return new Promise((resolve, reject) =>
        axios({
            method: 'get',
            url
        }).then(res => 
            resolve(res.data)
        ).catch(err => reject(err))
    )
} 
async function get(){
    const test = await myaxios('https://covid-api.com/api/regions')
    return test;
}*/

axios({
    method: 'get',
    url: 'https://covid-api.com/api/regions'
}).then(res => {
    let data = res.data.data;

    for(let country of data) {
        if(country.name == "France"){
            axios({
                method: 'get',
                url: `https://covid-api.com/api/reports?date=${date}&iso=${country.iso}`
            }).then(res => {
                let filtered = res.data.data.filter(el => el.region.province !== '')
                console.log(filtered.map( el => { 
                    return { 
                        province: el.region.province, 
                        confirmed: el.confirmed, 
                        deaths: el.deaths 
                    }} 
                ))
            })  
        }
    }
})