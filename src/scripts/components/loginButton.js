import signIn from '../helpers/signIn';
import signInImg from '../../assets/SignIn.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<a href="#" id="google-auth"><img src="${signInImg}"></a>`;
  document.querySelector('#logButton').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
