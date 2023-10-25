import { Button } from '@/components/atoms';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
          <Link href="/dashboard">dashboard</Link>
          <br />
          <Button label="cosas 2" />
        </div>
      </div>
    </main>
  );
}
