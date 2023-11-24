import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const ViewFunctionModal = ({ openModal, handleOnClose, functionID }) => {
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
                <Dialog.Panel className="w-full h-[280px] max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-left mt-5"
                  >
                    <span className="text-2xl font-bold">
                      {' '}
                      Request ID: {functionID}
                    </span>

                    <p className="text-sm text-[#a1a2a3]">
                      Request result displayed below.
                    </p>
                  </Dialog.Title>

                  <div className="mt-8 text-start bg-[#388ee41a] p-4 italic text-[#b2b5b8bf]">
                    <span>byte result from making request</span>
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

export default ViewFunctionModal;
