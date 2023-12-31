import React from 'react';
import Image from 'next/image';
import { preloader } from '@public/images';

function Preloader() {
  return (
    <div className="preloader">
      <Image
        className="preloader__image"
        src={preloader}
        height="200"
        width="200"
        alt="Preloader"
      />
    </div>
  );
}

export default Preloader;
