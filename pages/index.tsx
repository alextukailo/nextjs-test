import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useCurrency } from "@/src/hooks/useCurrency";


const Home: NextPage = () => {
  const currency = useCurrency()

  return (
    <>
      <Head>
        <title>CoinGecko Market Pairs (USD)</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container-secondary">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Market Pairs (USD)
            </h1>
            <p className="text-xl text-center text-gray-600">
              The following is a list of crypto currencies with information
              related to the USD trading pair.
            </p>
          </div>
        </div>
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currency?.slice(0, 45).map((card) => (
              <div key={card.id} className="card-wrapper">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h2 className="card-heading">{card.name}</h2>
                    <Image
                      src={card.image}
                      alt="placeholder"
                      width={35}
                      height={35}
                    />
                  </div>
                  <ul className="list-none">
                    <li className="card-text">Current Price: {card.current_price}</li>
                    <li className="card-text">24h High: {card.high_24h}</li>
                    <li className="card-text">24h Low: {card.low_24h}</li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Link href={`/currency/${card.symbol}`}>
                    <button className="card-button">
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
