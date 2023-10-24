export async function getArtist(id: string) {
  const res = await fetch(
    `http://localhost:3000/api?id=${id}`,
    // `https://api.openweathermap.org/data/2.5/weather?q=${
    //   id ?? 'London'
    // }&appid=d8702d9c7628bd5e84f7192dd09d9ad5`,
    // {
    //   next: { revalidate: 10 },
    // },
  );
  return res.json();
}
