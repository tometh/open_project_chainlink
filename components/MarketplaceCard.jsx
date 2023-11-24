import { useState } from 'react';
import MarketplaceModal from './modals/MarketplaceModal';

const MarketplaceCard = ({ img, title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 shadow-2xl py-16 rounded-2xl flex flex-col justify-between">
      <div className='ml-4'>
        <img src={img} alt="functions" />
        <h1 className="text-[#388EE4] font-bold mt-4">{title}</h1>
        <div className="description-container h-18 overflow-hidden mt-4">
          <p>{description}</p>
        </div>
      </div>
      <button
        className="mt-8 uppercase text-[#388EE4] font-bold self-start"
        onClick={openModal}
      >
        Register
      </button>
      <MarketplaceModal
        openModal={showModal}
        handleOnClose={closeModal}
        selectedFunction={title}
      />
    </div>
  );
};

export default MarketplaceCard;
