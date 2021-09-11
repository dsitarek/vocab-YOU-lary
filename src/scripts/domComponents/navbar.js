import logo from '../../assets/logo.png';

const renderNavbar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="navLogo"><img src="${logo}"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="homeLink">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="addTerm">Add a term</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="community">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="flashCards">My Flash Cards</a>
            </li>
          </ul>
          <div class="nav-item" id="logButton">
            </div>
          <form id="searchForm" class="d-flex">
            <input id="searchBar" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>`;

  document.getElementById('navContainer').innerHTML = domString;
};

export default renderNavbar;
