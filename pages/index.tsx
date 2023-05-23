import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { type CurrencyCard } from "@/src/modules/currency";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
  const { data } = useQuery({
    queryKey: ['currency'],
    queryFn: () =>
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD').then(
        (res) => res.json(),
      ),
  })

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data?.slice(0, 45).map((card: CurrencyCard) => (
              <div key={card.id} className="flex p-6 shadow-xl flex-col rounded-lg bg-gradient-to-br from-blue-100 to-purple-200">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800">{card.name}</h2>
                    <Image
                      src={card.image}
                      alt="placeholder"
                      width={35}
                      height={35}
                    />
                  </div>
                  <ul className="list-none">
                    <li className="text-slate-600	">Current Price: {card.current_price}</li>
                    <li className="text-slate-600	">24h High: {card.high_24h}</li>
                    <li className="text-slate-600	">24h Low: {card.low_24h}</li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Link href={`/currency/${card.symbol}`}>
                    <button className="bg-transparent	p-0 hover:text-slate-600 text-slate-500 font-boldrounded">
                      More {'>'}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD');
//   const cards = await res.json();
//   return {
//     props: {
//       cards
//     }
//   }
// }
