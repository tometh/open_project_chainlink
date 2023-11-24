import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const MarketplaceModal = ({ openModal, handleOnClose, selectedFunction }) => {
  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleOnClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Register {selectedFunction} Function
                  </Dialog.Title>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className=" bg-white text-[#388EE4] focus:ring-1 focus:outline-none focus:ring-[#388EE4] font-medium rounded-sm text-sm px-4 py-2 hover:opacity-70"
                    >
                      <a href="/register-functions">Without Automation</a>
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className=" bg-[#388EE4] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-4 py-3 hover:opacity-70"
                    >
                      <a href="/register-functions-automation">
                        With Automation
                      </a>
                    </button>
                    &nbsp;&nbsp;
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MarketplaceModal;
