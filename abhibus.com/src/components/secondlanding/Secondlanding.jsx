
import {Navbar} from '../Navbar/Navbar';
import {Secondsearch} from '../secondsearch/Secondsearch'
import {Secondtrainfilters} from '../secondpagefilters/Secondtrainfilters'
const Secondlanding = ({data})=>{

    return(
        <>
        <Navbar/>
        <Secondsearch/>
        <Secondtrainfilters data={data}/>
        </>
    )
}

export {Secondlanding}