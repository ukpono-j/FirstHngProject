import React from 'react'
import styled from 'styled-components';
import VectorLogo from "./images/Vector1.png";
import I4G from "./images/I4G.png";

const FooterImg  = styled.img`
    width: 130px;

    @media screen and (max-width: 800px){
      width: 90px;
    }
`
const FooterSub = styled.div`
   border-top: 1px solid #EAECF0;
   font-family: "Inter", sans-serif;
   font-size: 14px;

   @media screen and (max-width: 700px){
    font-size: 12px;
   }
`
const Footer = () => {
  return (
    <div>
         <div className=' mt-10 h-full w-full  md:pl-20 pl-5 pr-5   md:pr-20'>
           <FooterSub className='md:flex grid items-center justify-between  h-full  md:pt-10 pt-4  pb-4 md:pb-10'>
           <div className='mt-3'>
            <FooterImg src={VectorLogo} alt='' />
           </div>
            <div className='mt-3'>HNG Internship 9 Frontend Task</div>
            <div className='mt-3'>
              <FooterImg src={I4G} alt="" />
            </div>
           </FooterSub>
        </div>
    </div>
  )
}

export default Footer