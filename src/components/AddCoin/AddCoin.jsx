import React, { useState, useContext } from "react";
import { WatchListContext } from "../../context/watchListContext";
import "./AddCoin.css";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    'bitcoin',
    'ethereum',
    'tether',
    'binancecoin',
    'usd-coin',
    'cardano',
    'solana',
    'ripple',
    'terra-luna',
    'polkadot',
    'dogecoin',
    'avalanche-2',
    'binance-usd',
    'shiba-inu',
    'terrausd',
    'matic-network',
    'wrapped-bitcoin',
    'cosmos',
    'crypto-com-chain',
    'dai',
    'litecoin',
    'chainlink',
    'near',
    'algorand',
    'tron',
    'fantom',
    'bitcoin-cash',
    'okb',
    'uniswap',
    'stellar',
    'ftx-token',
    'magic-internet-money',
    'staked-ether',
    'internet-computer',
    'hedera-hashgraph',
    'axie-infinity',
    'vechain',
    'leo-token',
    'compound-ether',
    'ethereum-classic',
    'klay-token',
    'filecoin',
    'cdai',
    'the-sandbox',
    'monero',
    'decentraland',
    'theta-token',
    'elrond-erd-2',
    'frax',
    'tezos',
    'compound-usd-coin',
    'osmosis',
    'harmony',
    'helium',
    'iota',
    'eos',
    'the-graph',
    'bittorrent-old',
    'pancakeswap-token',
    'aave',
    'theta-fuel',
    'bitcoin-cash-sv',
    'kusama',
    'arweave',
    'maker',
    'flow',
    'radix',
    'ecomi',
    'blockstack',
    'enjincoin',
    'true-usd',
    'amp-token',
    'huobi-btc',
    'huobi-token',
    'quant-network',
    'gala',
    'ecash',
    'convex-finance',
    'neo',
    'celo',
    'thorchain',
    'oasis-network',
    'kucoin-shares',
    'curve-dao-token',
    'zcash',
    'basic-attention-token',
    'celsius-degree-token',
    'paxos-standard',
    'dash',
    'nexo',
    'loopring',
    'chiliz',
    'gatechain-token',
    'kadena',
    'bitkub-coin',
    'pocket-network',
    'waves',
    'secret',
    'sushi',
    'nem',
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
