import Head from 'next/head';
import Link from 'next/link';

const CHALLENGES = 'challenges';

const PRODUCT_PREVIEW = `/${CHALLENGES}/productPreview`;
const PROFILE_CARD = `/${CHALLENGES}/profileCard`;
const PRODUCT_PAGE = `/${CHALLENGES}/productPage`;
const SUNNY_SIDE_AGENCY = `/${CHALLENGES}/sunnySideAgency`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="p-8 flex flex-col">
        <Link href={PRODUCT_PREVIEW}>
          <a className="link-primary">{PRODUCT_PREVIEW} </a>
        </Link>
        <Link href={PROFILE_CARD}>
          <a className="link-primary">{PROFILE_CARD} </a>
        </Link>
        <Link href={PRODUCT_PAGE}>
          <a className="link-primary">{PRODUCT_PAGE} </a>
        </Link>
        <Link href={SUNNY_SIDE_AGENCY}>
          <a className="link-primary">{SUNNY_SIDE_AGENCY} </a>
        </Link>
      </div>
    </div>
  );
}
