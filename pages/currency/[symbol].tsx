import { 
  type GetStaticPaths,
  type GetStaticProps
} from "next"
import { useRouter } from 'next/router'
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { type CurrencyCard } from "@/src/modules/currency";

const SymbolPage = ({ symbol }: { symbol: CurrencyCard }) => {
  const router = useRouter()

  const handleBackClick = (): void => {
    router.back()
  }
  return (
    <>
      <Head>
        <title>{symbol.name}</title>
      </Head>
      <main>
        <div className="p-8 bg-gradient-to-br from-blue-400 to-purple-300">
          <Image
            src={symbol.image}
            alt="placeholder"
            width={100}
            height={100}
            className="object-cover object-center mx-auto"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center	mb-16">
            <button
              onClick={handleBackClick}
              className="bg-transparent p-0 hover:text-slate-600 text-slate-500 font-boldrounded"
            >
              {'<'} Back 
            </button>
            <span className="text-sm text-slate-500 p-0 font-lignt ml-8">
              <Link href={"/"}>
                Home
              </Link>
              {' / '}
              <Link href={`/currency/${symbol.symbol}`}>
                Currency
              </Link>
              {' / '}
              <span>
                {symbol.name}
              </span>
            </span>
          </div>
          <div>
            <h2 className="text-3xl mb-8 font-semibold text-slate-600">{symbol.name}</h2>
            <div className="shadow-2xl p-4">
              <ul className="list-none">
                <li className="text-slate-600 mb-4">Current Price: {symbol.current_price}</li>
                <li className="text-slate-600 mb-4">All time high price: {symbol.ath}</li>
                <li className="text-slate-600 mb-4">Market Cap: {symbol.market_cap}</li>
                <li className="text-slate-600 mb-4">Market Cap Rank: {symbol.market_cap_rank}</li>
              </ul>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default SymbolPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD');
  const cards = await res.json();

  const paths = cards.map((card: CurrencyCard) => {
    return {
      params: {
        symbol: `${card.symbol}`
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD');
  const cards = await res.json();
  const slug = params!.symbol!

  const [symbol] = cards.filter((card: CurrencyCard) => card.symbol === slug)

  return {
    props: {
      symbol
    }
  };
}
