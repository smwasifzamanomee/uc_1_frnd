import axios from "axios";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../Components/Container";
import FormInput from "../../Components/Form/FormInput";
import Button from "../../Components/Ui/Button";
import auth from "../../firebase.init";
import login from "../../images/login.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from "../../Shared/Spinner";

const Register = () => {
  const navigate = useNavigate()
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(loading) {
    <Spinner/>
  }

  if(error){
    alert(error)
  }


  const handleRegister = async (e) => {
    e.preventDefault();

    const url = "https://uc-backend.unitedchauffeur.co.uk/api/v1/signup/";
    if(password === confrimPassword) {
      const userDetails = {
        first_name,
        last_name,
        email,
        phone,
        address,
        password
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      })
      const data = await res.json();
      console.log(data);
      if(data){
        navigate('/valid-user',{state: {id:data.id}})
      }

    }
    else{
      alert('Confrim password wrong')
    }  
   
  };

  return (
    <Container>
      <div className="md:w-[1000px] mx-auto min-h-max shadow-lg border-t border-primary md:flex  justify-between gap-8 items-center ">
        <div className=" bg-primary h-full flex-1 flex flex-col justify-center items-center md:py-36">
          {/* Forgot Password */}
          <Link
            to="/login"
            className="md:w-[300px] text-light underline text-center mt-6 text-sm  block"
          >
            Have you an account?
          <Button className='w-full bg-light py-3 px-12 text-primary text-lg mt-2'>
           Log in
          </Button>
          </Link>

          <div className="mt-12 md:w-[300px]">
            <Button onClick={() => signInWithGoogle()} className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
              <FcGoogle className="text-3xl" />
              <span className="ml-4">Log in with Google</span>
            </Button>
            <Button  className="bg-light hover:bg-gray-100 flex items-center justify-center gap-4 w-full shadow py-4 border-t mb-6">
              <FaFacebookF className="text-3xl text-[#3b5998]" /> Log in with
              Facebook
            </Button>
          </div>

        </div>

        <form 
        onSubmit={handleRegister}
        className="flex-1 h-full p-8 ">
          <h3 className="text-3xl font-bold text-center">Sign Up</h3>
          {/* First Name */}
          <FormInput value={first_name} setValue={setFirstName} type="text" label={"First Name"} />
          <FormInput value={last_name} setValue={setLastName} type="text" label={"Last Name"} />
          <FormInput value={email} setValue={setEmail} type="email" label={"Email"} />
          <FormInput value={phone} setValue={setPhone} type="tel" label={"Phone"} />
          <FormInput value={address} setValue={setAddress} type="text" label={"Adress"} />
          <FormInput value={password} setValue={setPassword} type="password" label={"Password"} />
          <FormInput value={confrimPassword} setValue={setConfrimPassword} type="password" label={"Confirm Password"} />
          <Button type='submit' className={"w-[400px] bg-bg_info text-light"}>Sign Up</Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
