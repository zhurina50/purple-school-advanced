'use strict';

function getLocation() {
   return new Promise((resolve, reject) => {
       navigator.geolocation.getCurrentPosition((position) => {
           if (!position) {
                reject("error")
            }
            resolve(position)
        })
   })
} 

getLocation()
    .then(data => console.log(data.coords.latitude, data.coords.longitude))
    .catch(error => console.log(error));