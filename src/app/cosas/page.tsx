import { getArtist } from '@/services/city';

export default async function Cosas() {
  const data = await getArtist('Lima');
  return (
    <main>
      <div>
        <p>cosas</p>
        <p>{JSON.stringify(data)}</p>
      </div>
    </main>
  );
}
