import {Navbar} from '../Navbar/Navbar';
import {Searchbar} from '../searchbar/Searchbar';
import {Links} from '../importantlinks/Links';
import {Easypay} from '../easypayments/Easypay';
import {Howtobooktrain} from '../howtobook/Howtobooktrain';
import {Booktrainwith} from '../booktrainwithabhibus/Booktrainwith';
import {Howtobooktraintickets} from '../howtobooktraintickets/Howtobooktraintickets';
import {Frequentlytrains} from '../faqs/Frequentlytrains';
import {Social} from '../social/Social'
import {Footers} from '../Footer1/Footers';
import {Footertwo} from '../Footer2/Footertwo'

const Landing =() =>{
    return(
        <>
        <Navbar/>
        <Searchbar/>
        <Links/>
         <Easypay/>
         <Howtobooktrain/>
         <Booktrainwith/>
         <Howtobooktraintickets/>
         <Frequentlytrains/>
         <Social/>
         <Footers/>
         <Footertwo/>
         </>
    )
}
export {Landing}