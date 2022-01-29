// window.onload = function(){
//   const el = document.getElementById("zip");
//   el.addEventListener("keyup", sendResponse);
// }

function sendResponse() {
  var x = document.getElementById("zip").value;
  console.log("plz", x);

  let data = `finda=city&city="${x}"&lang=de_DE`;
  let data2 = `finda=streets&plz_plz="${x}"&lang=de_DE`;

  let url =
    "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet?nocache=1643465311213";

  axios
    .all([axios.post(url, data), axios.post(url, data2)])

    .then(
      axios.spread((veri1, veri2) => {
        document.getElementById("city").value = veri1.data.rows[0].city;
        gonder(veri2.data.rows);
      })
    )
    //   // .then(response => document.getElementById("street").value = response.data.rows.map(item => {return item.street}))
    //   // .then(response => allStreets = response.data.rows.map(item => {return item.street}))

    .catch((error) => {
      console.error("There was an error!", error);
    });
  // axios.get('https://breakingbadapi.com/api/characters')
  //   .then((res) => gonder(res.data))
}

function gonder(x) {
  allStreets = x.map((item) => item.street);

  var mySelect = document.getElementById("street");

  function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }
 
 // using the function:
 removeOptions(mySelect);
  //Create and append the options
  for (var i = 0; i < allStreets.length; i++) {
    var option = document.createElement("option");
    option.value = allStreets[i];
    option.text = allStreets[i];
    mySelect.appendChild(option);
  }
}


// **********************
// document.getElementById("info").onclick = function() {formatJson()};


function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // // for multi-selects, we need special handling
  // formJSON.snacks = data.getAll('snacks');
  
  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);