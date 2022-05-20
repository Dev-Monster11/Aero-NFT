import React from 'react';
import Aero2 from "../../images/Aero2.png";
import nft2 from "../../images/dog1.jpg";
import nft3 from "../../images/dog2.jpg";
import nft4 from "../../images/dog3.jpg";
import nft5 from "../../images/dog4.jpg";
import nft6 from "../../images/dog5.jpg";
import nft7 from "../../images/dog6.jpg";

const Tokenomics = () => {
    return (
        <div className="container ">
            <div className="tokenomics">
                <img className="main_img" src={Aero2} alt={'main'}/>

                <h5>TOKENOMICS</h5>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center mt-5">
                        <div className="col-md-1 token_col">
                            <p>Airborne – V1 </p>
                        </div>
                        <div className="col-md-1 token_col">
                            <p>10,000 Tokens</p>
                        </div>
                        <div className="col-md-3 token_col">
                            <div className="row justify-content-center">
                                <div className="col-md-1 col-1 mr-2">
                                    <p>400:</p>
                                </div>
                                <div className="col-md-10 col-8">
                                    <p>VIP Exclusive AeroDrops + Airshow meet and greets </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 token_col">
                            <div className="row justify-content-center">
                                <div className="col-md-1 col-1 mr-2">
                                    <p>5:</p>
                                </div>
                                <div className="col-md-10 col-8 p-0">
                                    <p>A flight with Aero and the team + AeroDrops</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 token_last">
                            <div className="row justify-content-center">
                                <div className="col-md-1 col-1 mr-2">
                                    <p>9595:</p>
                                </div>
                                <div className="col-md-8 col-8 p-0">
                                    <p>AeroDrops</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="divider"/>
                    <div className="tokenomics_dsc">
                        <p>The 1st 400 minted will be VIP having the most access to flights and AeroDrops.
                            VIP tokens will be the art of Aero. </p>

                        <p className={'token_para'}> We'll be working with an attorney after the VIP tokens sell to refine this language.
                            This is no way investment advice or the guarantee of profit. All of this may be subject to change.
                        </p>
                    </div>

                    <div className="mt-5 token_images">
                        <img src={nft7} alt={'nft'} />
                        <img src={nft2} alt={'nft'} />
                        <img src={nft3} alt={'nft'} />
                        <img src={nft4} alt={'nft'} />
                        <img src={nft5} alt={'nft'} />
                        <img src={nft6} alt={'nft'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
