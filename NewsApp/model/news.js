const url =
  'https://newsapi.org/v2/top-headlines?country=id&apiKey=b2756b165db84905923d652c88a44445';

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  console.log(result.articles);
  return result.articles;
}
