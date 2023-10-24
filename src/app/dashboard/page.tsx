import { Suspense } from 'react';

export default function Dashboard() {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <main>
        <div>
          <p>dashboard</p>
        </div>
      </main>
    </Suspense>
  );
}
