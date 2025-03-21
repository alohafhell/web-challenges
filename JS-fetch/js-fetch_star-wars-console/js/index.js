console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log("Full data object:", data);
  console.log(data.results[0].name);
  console.log(data.results[3].eye_color);
  console.log("R2-D2's eye color:", data.results[3].eye_color);
}
fetchData();
