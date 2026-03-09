import dcLogo from './img/dc-logo.png'
import digital from './img/buy-comics-digital-comics.png'
import merch from './img/buy-comics-merchandise.png'
import shopLoc from './img/buy-comics-shop-locator.png'
import pVisa from './img/buy-dc-power-visa.svg'
export default function AppHeader(){
    return(
        <header>
          <div class="container">
            <div class="row">
              <div class="col">
                <img src={dcLogo} alt="logo"></img>
              </div>
              <div class="col ">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row m-3 p-3">
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">CHARACTERS</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#comicsSection">COMICS</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">MOVIES</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">TV</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">GAMES</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">COLLECTIBLES</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">VIDEOS</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">FANS</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">NEWS</a>
        </li>
        <li class="nav-item m-3 p-1">
          <a class="nav-link" href="#">SHOP</a>
        </li>
        </ul>
              </div>
            </div>
          </div>

              
          <div class="container bg-dark">
            <div class="row">
                <div class="col p-5 m-1">
                    <h2 class="text-light">__CONTENT GOES HERE__</h2>
                </div>
            </div>
          </div>
          <div class="container bg-primary p-3 d-flex justify-content-evenly">
            <div class="row">
                <div class="col">
                    <img src={digital}></img>
                </div>
                <div class="col">
                     <img src={merch}></img>
                </div>
                <div class="col">
                     <img src={shopLoc} ></img>
                </div>
                <div class="col">
                     <img src={pVisa}></img>
                </div>
                <div class="col">
                   
                </div>
            </div>
          </div>
        </header>
    )
}