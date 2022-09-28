import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup, authenticateLogin } from '../../services/api';
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 40%;
  padding: 45px 35px;

  & > P,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  text-align: center;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0/ 20%);
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 12px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

 const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: bold
 `;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations"
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started"
  },
};

const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: ""
}

const loginInitialValue = {
  username: "",
  password: "",
}


const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);
  
  const handleCLose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup)
  }

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignup({ ...signup, [name]: value })
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleCLose();
    setAccount(signup.firstname)
  }

  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value })
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if(response.status === 200) {
      handleCLose();
      setAccount(response.data.data.firstname)
    } else {
      setError(true);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleCLose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ margin: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
              
              {error && <Error>Please enter valid username and password</Error>}

              <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser() }>Login</LoginButton>
              <Typography className="text-center">OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" name="firstname" onChange={(e) => onInputChange(e)} label="Enter Firstname" />
              <TextField variant="standard" name="lastname" onChange={(e) => onInputChange(e)} label="Enter Lastname" />
              <TextField variant="standard" name="username" onChange={(e) => onInputChange(e)} label="Enter username" />
              <TextField variant="standard" name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
              <TextField variant="standard" name="password" onChange={(e) => onInputChange(e)} label="Enter Password" />
              <TextField variant="standard" name="phone" onChange={(e) => onInputChange(e)} label="Enter Phone" />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
