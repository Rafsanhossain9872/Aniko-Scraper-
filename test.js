

async function test() {
  try {
    const res = await fetch('https://api.jikan.moe/v4/anime?q=naruto&limit=2');
    console.log("Status:", res.status);
    const json = await res.json();
    console.log("Title 1:", json.data[0].title);
    console.log("MAL ID 1:", json.data[0].mal_id);
    console.log("Poster 1:", json.data[0].images.jpg.large_image_url);
    console.log("Type 1:", json.data[0].type);
    console.log("Year 1:", json.data[0].year);
  } catch (err) {
    console.error(err);
  }
}
test();
