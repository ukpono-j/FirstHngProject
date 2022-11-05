import styled from 'styled-components';
import Img1 from "./images/profile.jpg";
import Slack from "./images/slack.png";
import Github from "./images/Icon.png";
import Forward1 from "./images/_Avatar share button.png";
import Forward2 from "./images/_Avatar share button (1).png";
import { Link } from 'react-router-dom';
import Footer from './Footer';



const AppContainer = styled.div`
     background-color: #FFFFFF;

`
const NameTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 20px;
`
const ProfileBoxContainer = styled.div`
   
   & div {
    background-color: #EAECF0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-align: center;

    @media screen and (max-width: 426px){
      font-size: 13px;
    }
   }
`
const Forward = styled.div`
    right: 20%;
    top: 40px;
    cursor: pointer;

    @media screen and (max-width: 700px){
       right: 6%;
       top: 20px;
    }
`
function Home() {
    return (
        <div className="App">
            <AppContainer className='w-full min-h-full border-2'>
                <div className=' relative '>
                    <Forward className='forward_btn  absolute md:h-10 w-7 md:w-10 w-7  rounded-full'>
                        <img src={Forward1} className="md:flex hidden" alt='' />
                        <img src={Forward2} className="md:hidden flex" alt='' />
                    </Forward>
                </div>
                <div className=' flex flex-col justify-center items-center'>
                    <div className=' md:w-20 w-16 md:h-20 h-16 rounded-full md:mt-20 mt-10'>
                        <img src={Img1} alt="" className='w-full h-full object-cover rounded-full' id='profile__img' />
                    </div>
                    <div className=' mt-3 mb-3'>
                        <NameTitle> Annette Black</NameTitle>
                        <div id='slack' className='hidden' >zeek</div>
                    </div>
                </div>
                <ProfileBoxContainer className=' pt-5 pb-5 md:pl-28 pl-6 md:pr-28 pr-6 '>
                    <div className=' w-full h-16  mt-3 mb-3 rounded'>
                        <a href='https://twitter.com/0xzeek_'><button id='twitter'>Twitter Link</button></a>
                    </div>
                    <div className=' w-full h-16  mt-3 mb-3 rounded'>
                        <a href='https://training.zuri.team/'><button id='btn_zuri'>Zuri Team</button></a>
                    </div>
                    <div className='w-full h-16  mt-3 mb-3 rounded'>
                        <a href='http://books.zuri.team'><button  id='books'>Zuri Books</button></a>
                    </div>
                    <div className='w-full h-16  mt-3 mb-3 rounded'>
                        <a href='https://books.zuri.team/'><button id="book_python">Python Books</button></a>
                    </div>
                    <div className='w-full h-16  mt-3 mb-3 rounded'>
                        <a href='https://background.zuri.team' ><button id='pitch'>Background Check for Coders</button></a>
                    </div>
                    <div className='w-full h-16   mt-3 mb-3 rounded'>
                        <a href='https://books.zuri.team/design-rules'><button id='book_design'>Design Books</button></a>
                    </div>
                    <div className='w-full h-16   mt-3 mb-3 rounded'>
                        <Link to="/contact">
                            <a>
                                <button id='contact'>Contact Me</button>
                            </a>
                        </Link>
                    </div>
                </ProfileBoxContainer>
                <div className='flex flex-row justify-center items-center'>
                    <div className='border m-2'>
                        <a href=''>
                            <img src={Slack} alt='' />
                        </a>
                    </div>
                    <div className='border m-2'>
                        <a href="">
                            <img src={Github} alt='' />
                        </a>
                    </div>
                </div>
                {/* <div className=' mt-10 h-full w-full  md:pl-20 pl-5 pr-5   md:pr-20'>
                    <FooterSub className='md:flex grid items-center justify-between  h-full  md:pt-10 pt-4  pb-4 md:pb-10'>
                        <div className='mt-3'>
                            <FooterImg src={VectorLogo} alt='' />
                        </div>
                        <div className='mt-3'>HNG Internship 9 Frontend Task</div>
                        <div className='mt-3'>
                            <FooterImg src={I4G} alt="" />
                        </div>
                    </FooterSub>
                </div> */}
                <Footer/>
            </AppContainer>
        </div>
    );
}

export default Home;
