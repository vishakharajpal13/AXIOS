import axios from 'axios'

const instance= axios.create({ baseURL:"https://jsonplaceholder.cypress.io"}); 

instance.defaults.headers.common['Authorization']="AUTH TOKEN from Instances"


export default instance;


//this gives the flexibility to control in detail in which part of your app you want to use 
//which default setting. In this application we are using the same URL nut this instance concept is useful in apps where 
//there are more URLS so in that case we'll make instace or base url accordignly
