import React from 'react';
import Edit from '@/components/Edit';
import Navbar from '@/components/Navbar';

const EditFuction = () => {
  return (
    <div className=" h-full">
      <div className="bg-white">
        <Navbar textColor="#388EE4" />
      </div>
      <div>
        <div className="h-screen">
          <Edit />
        </div>
      </div>
    </div>
  );
};

export default EditFuction;
