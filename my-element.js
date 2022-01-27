

window.onload = function(){
  const el = document.getElementById("zip");
  el.addEventListener("keyup", sendResponse);
}

// let myFunction = () => {

//   let data = "finda=city&city=97999&lang=de_DE"
  



// }
function sendResponse() {
  var x = document.getElementById("zip").value;
  console.log('plz', x);

  let data = `finda=city&city="${x}"&lang=de_DE`
  let url = "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet?"

  axios.post(url, data)
    .then(response =>document.getElementById("city").value = response.data.rows[0].city)
    .then(response =>document.getElementById("city").value = response.data.rows[0].city)
    let allStreets = responseData?.map(item => {
        return item.city
    .catch(error => {
      console.error('There was an error!', error);
    });
}
