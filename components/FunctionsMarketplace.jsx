import React from 'react';
import MarketplaceCard from './MarketplaceCard';

const functions = [
  {
    img: './ai.svg',
    title: 'AI (Artificial Intelligence)',
    description:
      ' Easily add and integrate AI into your smart contracts to efficiently give results.',
  },
  {
    img: '/insurance.svg',
    title: 'Insurance',
    description:
      'Take care of insurance  data on chain to your smart contracts with ease for more authentic data.',
  },
  {
    img: '/weather.svg',
    title: 'Weather',
    description:
      'Bring weather data on chain to your smart contracts with ease for more authentic data.',
  },
  {
    img: '/fx.svg',
    title: 'Fx Data',
    description: 'Get your foreign exchange data on chain with ease. ',
  },
  {
    img: '/financial.svg',
    title: 'Financial Data',
    description:
      'Easily add and import business financial data into your smart contracts for efficient results. ',
  },
  {
    img: '/function.svg',
    title: 'Add Custom Function',
    description:
      'Create and import custom  data into your smart contracts for efficient results. ',
  },
];

const FunctionsMarketplace = () => {
  return (
    <div className="mx-[100px] pb-20">
      <div>
        <h1 className="text-2xl font-bold">Functions Marketplace</h1>
        <p className="text-semibold">
          Explore additional services that can be brought into your smart
          contracts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {functions.map((functionItem, index) => (
          <MarketplaceCard
            key={index}
            img={functionItem.img}
            title={functionItem.title}
            description={functionItem.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FunctionsMarketplace;
