import React, { useState } from 'react';

const EmailModal = ({ showModal, closeModal }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      localStorage.setItem('emailProvided', 'true');
      closeModal();
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-[400px] mx-[380px] py-8">
          <h2 className="text-xl mb-4">Please enter your email</h2>
          <p className="text-sm">
            Stay in the Loop: Enter your email to receive the latest updates
            about your functions straight to your inbox!
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full mb-4 mt-4"
              placeholder="Email address"
              required
            />
            <button
              type="submit"
              className="bg-blue-500  px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default EmailModal;
