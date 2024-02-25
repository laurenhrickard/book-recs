function showRecs(response) {
  let recText = document.querySelector("#rec-space");
  recText.innerHTML = `${response.data.answer}`;
}

function generateRecs(event) {
  event.preventDefault();
  let prompt = `generate a book recommendation in the horror genre, please give the title, the author, and one sentence plot synopsis.`;
  let context = `you are a helpful librarian AI assistant who has knowledge of every book ever written.`;

  let apiKey = "6a3d5679t1daboe944af11da0383dbcf";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showRecs);
}

let searchForm = document.querySelector("#rec-generator-form");
searchForm.addEventListener("click", generateRecs);
