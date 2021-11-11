import './secondtrainfilters.css';
import {useState} from 'react';
import {Social} from '../social/Social'
import {Footers} from '../Footer1/Footers';
import {Footertwo} from '../Footer2/Footertwo'
import { Footerthree } from '../Footer3/Footerthree';

const Secondtrainfilters =() =>{
    const [data,setData] = useState([]);
    const [category,setCategory] = useState(false);
    const [depart,setDepart] = useState(false);
    const [arrival,setArrival] = useState(false);
    const [sortbydepart,setSortByDepart] = useState(false);
    const [sortbyarrival,setSortByArrival] = useState(false);
    const [sortbyduration,setSortByDuration] = useState(false);

    return(
        <>
        <div className="trainfilter-grid-s">
                <div className="p-2 gray-background">
                    <div style={{display: 'flex',alignItems: 'center'}} className="white-background">
                        <img src="https://www.abhibus.com/trains/images/train-icon-red.png" alt="train icon" />
                        <div style={{paddingLeft:"55%"}}>6 trains found  </div>
                    </div>
                    <div className="pt-1"><h5>Quota</h5></div>
                    <div className="filter-image-train-grid-s">
                        <div ><img onClick={()=>{
                            setCategory("General")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/general-icon.png" alt="general" />
                        <div>General</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Tatkal")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/tatkal-icon.png" alt="general" />
                        <div>Tatkal</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Ladies")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/ladies-icon.png" alt="general" />
                        <div>Ladies</div>
                        </div>
                    </div>
                    <div style={{display: 'flex',alignItems: 'center'}} className="white-background mt-2">
                        <div ><h5>Filters</h5></div>
                        <div style={{paddingLeft:"55%"}}>Clear All</div>
                    </div>
                    <div style={{display: 'flex',alignItems: 'center'}} className="white-background mt-2">
                        <div style={{paddingLeft: '5%'}} ><input type="checkbox" /></div>
                        <div style={{paddingLeft:"8%",marginTop:'2%'}}><h5>Show Only Available</h5></div>
                    </div>
                    <div><h5>Departing at</h5></div>
                    {/* departure */}
                    <div className="filter-image-train-grid-s">
                        <div ><img onClick={()=>{
                            setCategory("General")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/before-10am-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">00-06</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Tatkal")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/10am-5pm-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">06-12</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Ladies")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/5pm-11pm-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">12-18</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Ladies")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/after-11pm-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">18-24</div>
                        </div>
                    </div>
                    <div><h5>Arriving at</h5></div>
                    {/* departure */}
                    <div className="filter-image-train-grid-s">
                        <div ><img onClick={()=>{
                            setCategory("General")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/before-10am-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">00-06</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Tatkal")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/10am-5pm-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">06-12</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Ladies")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/5pm-11pm-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">12-18</div>
                        </div>
                        <div><img onClick={()=>{
                            setCategory("Ladies")
                        }} className="pointer" style={{width:"100%"}} src="https://www.abhibus.com/trains/images/after-11pm-icon.png" alt="general" />
                        <div style={{fontSize:"10px"}} className="text-center">18-24</div>
                        </div>
                    </div>
                    
                </div>
                {/* below for appending list */}
                <div>
                    <div></div>
                </div>
        </div>
        <Social/>
        <Footers/>
        <Footertwo/>
        <Footerthree/>
        </>
    )
}

export {Secondtrainfilters}