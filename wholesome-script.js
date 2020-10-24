document.getElementById("jokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://icanhazdadjoke.com/";
  console.log("in jokeSubmit");

  fetch(url, {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      console.log("first then");
      return response.json();
    }).then(function(json) {
      console.log("success");
      let results = "";
      results += "<p>" + json.joke + "</p>";

      document.getElementById("jokeResult").innerHTML = results;
    });
});
