 import axios from 'axios'
 function generateQuotes() {
   axios
     .get("https://api.api-ninjas.com/v1/quotes?category=success", {
       headers: {
         "X-Api-Key": "GkcNMR7+9hVtEGr+WZdG7g==wjbN95h32vbi9VTz",
       },
     })
     .then((res) => {
       if(res.data && res.status===200){
        console.log(res);
          document.getElementById("quote").innerHTML=res.data[0].quote
         }

     })
     .catch((error) => {
       console.error("Error:", error);
     });
 }

 
 export default generateQuotes