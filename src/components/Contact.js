import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const Contact_Container = styled.div`
    /* border: 1px solid  green; */
    font-family: "Inter";
    min-height: 100%;
    width: 100%;
    padding: 110px 30px 50px 30px;

    & h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #101828;

    @media screen and (max-width: 800px){
    font-size: 34px;
    }
    }
 
    & p{
     font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    padding-top: 10px;
    color: #475467;

    @media screen and (max-width: 640px){
        font-size: 15px;;
    }
    }
   & button{
    width: 100%;
    border-radius: 8px;
    background: #1570EF;
    border: 1px solid #1570EF;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;

    @media screen and (max-width: 600px){
        font-size: 14px;
    }
   }
    & input{
        padding-left: 10px;
        background: #ffffff;
    }
    & input::placeholder{
        font-size: 14px;
    }

    & textarea{
        border-radius: 8px;
        margin: 6px 0px;
        width: 100%;
        height: 200px;
        border: 1px solid #D0D5DD; 
       box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
       /* outline: none; */
        font-size: 15px;
        color: #101828 !important;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        padding: 10px;

        @media screen and (max-width: 700px){
            font-size: 14px;
        }
    }

    & textarea::placeholder{
        color: #667085;
    }
     & h5{
        color: #344054;
        font-family: 'Inter';
       font-style: normal;
       font-weight: 500;
       font-size: 14px;
       line-height: 20px;
     }
    @media screen and (max-width: 800px){
    /* padding: 40px 13px ; */
    padding: 50px 13px 10px 13px;
    }
`
const Contact_Area = styled.div`
      /* height: 616px; */
       max-width: 740px;
       margin: auto;
`

const Contact_Title = styled.div`

 `
const Contact_1 = styled.div`

& input{
        border: 1px solid  gray;
        width: 100% ;
        height: 44px;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        margin: 6px 0px;
        background: #ffffff;
        outline: none;
        
    }
`
const EmailArea = styled.div`
   
   & input{
    border: 1px solid  gray;
        width: 100% ;
        height: 44px;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        margin:6px 0px ;
        outline: none;
   }
`
const CheckTxt = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;

   @media screen and (max-width: 630px){
    font-size: 13px;
   }
`
const ErrorMessage = styled.div`
   color: #F83F23;
   /* padding-left: 10px; */
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   padding-bottom: 10px;
`

const Contact = () => {
    // ============ 
    const yupValidation = Yup.object().shape({
        name: Yup.string()
            .required('Please enter a message.')
            .min(4, 'Add minimum 4 characters'),
        email: Yup.string().required('Email id is mendatory').email(),
    })
    const formOptions = { resolver: yupResolver(yupValidation) }
    const { register, handleSubmit,  formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
        console.log(JSON.stringify(data, null, 4))
        return false
    }

    //  const Checkbox = styled.input`
    //   border-radius: 10px !important;
    // `
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Contact_Container>
                    <Contact_Area className=''>
                        {/* ============ TITLE AREA ========== */}
                        <Contact_Title className='md:p-2 p-1'>
                            <h1>Contact Me</h1>
                            <p>Hi there, contact me to ask me about anything you have in mind.</p>
                        </Contact_Title>
                        {/* ============= Name Area ========== */}
                        <div className='md:flex grid mt-4'>
                            <Contact_1 className='w-full md:p-0 p-1 md:ml-2 md:mr-2 ml-0 mr-0 mt-2 mb-2'>
                                <h5>First Name</h5>
                                <input type="text" placeholder="Enter your first name" id='first_name' />
                            </Contact_1>
                            <Contact_1 className='w-full md:p-0 p-1 md:ml-2 md:mr-2 ml-0 mr-0 mt-2 mb-2'>
                                <h5>Last Name</h5>
                                <input type="text" placeholder="Enter your last name" id='last_name' />
                            </Contact_1>
                        </div>
                        {/* ============== THE EMAIL AREA ============= */}
                        <EmailArea className='md:p-2 p-1'>
                            <h5>Email</h5>
                            <input type="email" placeholder='yourname@email.com' className='border w-full' id='email' />
                        </EmailArea>
                        <div className='md:p-2 p-1'>
                            <h5>Message</h5>
                            {/*==========   this is the Textarea ========== */}
                            <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message' className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                {...register('name')}
                            />
                            {/* ===== Error Message area ========== */}
                            <ErrorMessage className="invalid">{errors.name?.message}</ErrorMessage>
                        </div>

                        {/* ========= Ckeckbox Area ========== */}
                        <div className='flex md:items-center items-start md:p-2 p-1'>
                            <input type="checkbox" className='w-4 h-4 rounded-lg' />
                            <CheckTxt className='pl-2'>
                                <span>  You agree to providing your data to <span>{"name"}</span> who may contact you.</span>
                            </CheckTxt>
                        </div>
                        {/* ======== Submit  Button ========== */}
                        <div className='md:p-2 p-1'>
                            <button type="submit" className='border md:h-12 h-10 mt-4 mb-4' id='btn__submit' >Send Message</button>
                        </div>
                    </Contact_Area>

                </Contact_Container>
            </form>
            <Footer />
        </div>
    )
}

export default Contact