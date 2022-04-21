import React from "react";
import { Link } from "react-router-dom";

const SubHeader: React.FC = () => {
  
  return (
    
    <div className="flex justify-around border p-6 text-primary font-extrabold text-2xl mb-9">
      <Link className="hover:text-white hover:underline" to="/nft/home">
        NFT Home
      </Link>
      <Link className="hover:text-white hover:underline" to="/nft/sellDigital">
        Sell Digital Assets
      </Link>
      <Link className="hover:text-white hover:underline" to="/nft/myAssets">
        My Digital Assets
      </Link>
      <Link className="hover:text-white hover:underline" to="/nft/dashboard">
        Creator Dashboard
      </Link>
    </div>
  );
};

export default SubHeader;
