import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './ConnectButton.module.css';
import { useAccount } from 'wagmi';
import EmailModal from './modals/EmailModal';

const Navbar = ({ bgColor, text1Color, text2Color, menuColor }) => {
  const { isConnected } = useAccount();
  const [walletConnected, setWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleConnect = async () => {
    if (!isConnected) {
      try {
        await connect();
        setWalletConnected(true);
        closeNavbar();
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    }
  };

  useEffect(() => {
    if (isConnected && !localStorage.getItem('emailProvided')) {
      setShowModal(true);
      closeNavbar();
    }
  }, [isConnected]);

  return (
    <div className={`border-gray-200 border-b-[1px] mb-12 4`}>
      <div className="mx-[40px] flex justify-between align-items py-4">
        <Link href="/dashboard" passHref>
          <div
            className={`cursor-pointer text-${text1Color} font-bold text-lg`}
          >
            <span className={`text-${text2Color}`}>Open Project</span>
          </div>
        </Link>
        <ConnectButton
          className={styles.customConnectButton}
          onClick={handleConnect}
        />
      </div>
      <EmailModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default Navbar;
