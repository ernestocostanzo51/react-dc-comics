import facebook from './img/footer-facebook.png'
import youtube from './img/footer-youtube.png'
import twitter from './img/footer-twitter.png'
import pinterest from './img/footer-pinterest.png'
import periscope from './img/footer-periscope.png'


export default function AppFooter(){
    return(
        <footer class="bg-body-tertiary">
            <div class="container p-5">
                <div class="row">
                    <div class="col">
                        <button class="p-2 bg-body-tertiary">SING UP NOW!</button>
                    </div>
                    <div class="col">
                        <a class="text-primary">FOLLOW US</a>
                        <button class="facebook">
                        <img src={facebook}></img>
                        </button>

                    <button class="twitter">

                        <img src={twitter}></img>

                    </button>
                    <button class="youtube">
                        <img src={youtube}></img>

                    </button>
                    <button class="pinterest">
                        <img src={pinterest}></img>

                    </button>
                    <button class="position">
                        <img src={periscope}></img>

                    </button>
                    </div>
                    
                    

                </div>
            </div>
        </footer>
    )
}