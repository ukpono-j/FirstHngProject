import './App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img1 from "./components/images/profile__img.png"
import Slack from "./components/images/slack.png"
import Github from "./components/images/Icon.png"
import VectorLogo from "./components/images/Vector1.png"
import I4G from "./components/images/I4G.png"

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
    font-size: 16px;
    font-weight: 500;
    text-align: center;

    @media screen and (max-width: 426px){
      font-size: 13px;
    }
   }
`
const FooterSub = styled.div`
   border-top: 1px solid #EAECF0;
   font-family: "Inter", sans-serif;
   font-size: 14px;
`
function App() {
  return (
    <div className="App">
      <AppContainer className='w-full min-h-full border-2'>
        <div className=' flex flex-col justify-center items-center'>
          <div className=' w-24 h-24 rounded-full mt-20'>
            <img src={Img1} alt="" className='w-full h-full object-cover' />
          </div>
          <div className=' mt-3 mb-3'>
            <NameTitle> Annette Black</NameTitle>
          </div>
        </div>

        <ProfileBoxContainer className=' pt-5 pb-5 md:pl-28 pl-6 md:pr-28 pr-6 '>
          <div className=' w-full md:h-16 h-12 mt-3 mb-3 rounded'>
            <a href='https://twitter.com/0xzeek_'>Twitter Link</a>
          </div>
          <div className=' w-full md:h-16 h-12 mt-3 mb-3 rounded'>
            <a href='https://training.zuri.team/' id='btn_zuri'>Zuri Team</a>
          </div>
          <div className='w-full md:h-16 h-12 mt-3 mb-3 rounded'>
            <a href='http://books.zuri.team' id='books'>Zuri Books</a>
          </div>
          <div className='w-full md:h-16 h-12 mt-3 mb-3 rounded'>
            <a href='https://books.zuri.team/' id="book_python" >Python Books</a>
          </div>
          <div className='w-full md:h-16 h-12 mt-3 mb-3 rounded'>
            <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
          </div>
          <div className='w-full md:h-16 h-12  mt-3 mb-3 rounded'>
            <a href='https://books.zuri.team/design-rules' id='book_design'>Design Books</a>
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
        <div className=' mt-14 h-full w-full  md:pl-20 md:pr-20'>
           <FooterSub className='flex items-center justify-between  h-full  pt-10 pb-10'>
           <div className=''>
            <img src={VectorLogo} alt='' />
           </div>
            <div className=''>HNG Internship 9 Frontend Task</div>
            <div className=''>
              <img src={I4G} alt="" />
            </div>
           </FooterSub>
        </div>
      </AppContainer>
    </div>
  );
}

export default App;
