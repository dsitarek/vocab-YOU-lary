import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = (username) => {
  const domString = ` <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${username}
  </a>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" id="google-auth" href="#">Logout</a></li>
  </ul>
</li>`;
  document.querySelector('#logButton').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
