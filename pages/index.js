import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';

const CHALLENGES = 'challenges';

const PRODUCT_PREVIEW = `/${CHALLENGES}/productPreview`;
const PROFILE_CARD = `/${CHALLENGES}/profileCard`;

export default function Home() {
  useEffect(() => {
    console.log();
  });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="p-8">
        <Link href={PRODUCT_PREVIEW}>
          <a className="link-primary">{PRODUCT_PREVIEW} </a>
        </Link>
        <Link href={PROFILE_CARD}>
          <a className="link-primary">{PROFILE_CARD} </a>
        </Link>
      </div>
    </div>
  );
}
