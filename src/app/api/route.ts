export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      id ?? 'London'
    }&appid=d8702d9c7628bd5e84f7192dd09d9ad5`,
    {
      next: { revalidate: 10 },
    },
  );
  const data = await res.json();

  return Response.json({ data });
}
