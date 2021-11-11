import "./secondtrainfilters.css";
import { useState } from "react";
import { Social } from "../social/Social";
import { Footers } from "../Footer1/Footers";
import { Footertwo } from "../Footer2/Footertwo";
import { Footerthree } from "../Footer3/Footerthree";

const Secondtrainfilters = ({ data }) => {
  const [datalocal, setDataLocal] = useState([]);
  const [category, setCategory] = useState(false);
  const [depart, setDepart] = useState(false);
  const [arrival, setArrival] = useState(false);
  const [sortbydepart, setSortByDepart] = useState(false);
  const [sortbyarrival, setSortByArrival] = useState(false);
  const [sortbyduration, setSortByDuration] = useState(false);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className="trainfilter-grid-s">
        <div className="p-2 gray-background">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="white-background"
          >
            <img
              src="https://www.abhibus.com/trains/images/train-icon-red.png"
              alt="train icon"
            />
            <div style={{ paddingLeft: "55%" }}>
              {data.trains.length} trains found{" "}
            </div>
          </div>
          <div className="pt-1">
            <h5>Quota</h5>
          </div>
          <div className="filter-image-train-grid-s">
            <div>
              <img
                onClick={() => {
                        setFlag(true)
                    
                  setCategory("General");
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/general-icon.png"
                alt="general"
              />
              <div>General</div>
            </div>
            <div>
              <img
                onClick={() => {
                  setCategory("Tatkal");
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/tatkal-icon.png"
                alt="general"
              />
              <div>Tatkal</div>
            </div>
            <div>
              <img
                onClick={() => {
                    setFlag(true)
                  setCategory("Ladies");
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/ladies-icon.png"
                alt="general"
              />
              <div>Ladies</div>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="white-background mt-2"
          >
            <div>
              <h5>Filters</h5>
            </div>
            <div onClick={() =>{
                    setFlag(false)
                }} style={{ paddingLeft: "55%" }}>Clear All</div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="white-background mt-2"
          >
            <div style={{ paddingLeft: "5%" }}>
              <input type="checkbox" />
            </div>
            <div style={{ paddingLeft: "8%", marginTop: "2%" }}>
              <h5>Show Only Available</h5>
            </div>
          </div>
          <div>
            <h5>Departing at</h5>
          </div>
          {/* departure */}
          <div className="filter-image-train-grid-s">
            <div>
              <img
                onClick={() => {
                    setFlag(true)
                  
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/before-10am-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                00-06
              </div>
            </div>
            <div>
              <img
                onClick={() => {
                    setFlag(true)
                  
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/10am-5pm-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                06-12
              </div>
            </div>
            <div>
              <img
                onClick={() => {
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/5pm-11pm-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                12-18
              </div>
            </div>
            <div>
              <img
                onClick={() => {
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/after-11pm-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                18-24
              </div>
            </div>
          </div>
          <div>
            <h5>Arriving at</h5>
          </div>
          {/* departure */}
          <div className="filter-image-train-grid-s">
            <div>
              <img
                onClick={() => {
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/before-10am-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                00-06
              </div>
            </div>
            <div>
              <img
                onClick={() => {
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/10am-5pm-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                06-12
              </div>
            </div>
            <div>
              <img
                onClick={() => {
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/5pm-11pm-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                12-18
              </div>
            </div>
            <div>
              <img
                onClick={() => {
                  setFlag(true)
                }}
                className="pointer"
                style={{ width: "100%" }}
                src="https://www.abhibus.com/trains/images/after-11pm-icon.png"
                alt="general"
              />
              <div style={{ fontSize: "10px" }} className="text-center">
                18-24
              </div>
            </div>
          </div>
        </div>
        {/* below for appending list */}
        
        <div>
        <div style={{display: "flex",justifyContent: "space-between",backgroundColor:"#d3d0d0"}}>
                <div className="m-1"><strong>Sort by</strong></div>
                <div onClick={() =>{
                    setFlag(true)
                }}style={{ display: "flex"}}>
                    <div className="m-1">Departure</div>
                    <div className="m-1"><i class="fas fa-arrow-down"></i></div>
                </div>
                <div onClick={() =>{
                    setFlag(true)
                }} style={{ display: "flex"}}>
                    <div className="m-1">Arrival</div>
                    <div className="m-1"><i class="fas fa-arrow-down"></i></div>
                </div>
                <div onClick={() =>{
                    setFlag(true)
                }} style={{ display: "flex"}}>
                    <div className="m-1">Duration</div>
                    <div className="m-1"><i class="fas fa-arrow-down"></i></div>
                </div>
        </div>
          {!flag ? (
            <>
              {data.trains.map((e) => (
                <div key={e._id}>
                  <div className="train-list-grid-s">
                    {/* grid starts */}
                    <div>
                      <div className="insider-list-train-s">
                        <div>
                          <img
                            src="https://www.abhibus.com/trains/images/train-icon-red.png"
                            alt="train pic"
                          />
                        </div>
                        <div>
                          <div className="text-secondary">{e.train_number}</div>
                          <div>
                            <h5 style={{ fontSize: ".8rem" }} className="m-0">
                              {e.train_name}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: ".8rem" }}>
                        <strong>{e.departure_time}</strong>--------
                        <span className="text-secondary">{e.duration}</span>
                        -------<strong>{e.arrival_time}</strong>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="text-secondary">{e.source_station}</div>
                        <div className="text-secondary">{e.destination}</div>
                      </div>
                    </div>
                    {/* 2nd part */}
                    <div style={{ fontSize: ".7rem" }} className="innerlist-train-secondgrid-s">
                        <div>
                            <div>2S ₹{e.ticket_price.second_seating}</div>
                            <div>{e.seat_availability.second_seating}</div>
                            {(e.seat_availability.second_seating.split("-")[0]==="AVAILABLE")?<div className="pointer" style={{backgroundColor:"green"}}>Book Ticket</div>:<div className="pointer" style={{backgroundColor:"red"}}>Booking NA</div>}
                        </div>
                        <div>
                            <div>SL ₹{e.ticket_price.SL}</div>
                            <div>{e.seat_availability.sleeper}</div>
                            {(e.seat_availability.sleeper.split("-")[0]==="AVAILABLE")?<div className="pointer" style={{backgroundColor:"green"}}>Book Ticket</div>:<div className="pointer" style={{backgroundColor:"red"}}>Booking NA</div>}
                        </div>
                        <div>
                            <div>3A ₹{e.ticket_price.tird_ac}</div>
                            <div>{e.seat_availability.tird_ac}</div>
                            {(e.seat_availability.tird_ac.split("-")[0]==="AVAILABLE")?<div className="pointer" style={{backgroundColor:"green"}}>Book Ticket</div>:<div className="pointer" style={{backgroundColor:"red"}}>Booking NA</div>}
                        </div>
                        <div>
                            <div>2A ₹{e.ticket_price.second_ac}</div>
                            <div>{e.seat_availability.second_ac}</div>
                            {(e.seat_availability.second_ac.split("-")[0]==="AVAILABLE")?<div className="pointer" style={{backgroundColor:"green"}}>Book Ticket</div>:<div className="pointer" style={{backgroundColor:"red"}}>Booking not allowed</div>}
                            
                        </div>
                    </div>
                    {/* 3rd part */}
                    <div>
                        <div style={{display: "flex"}}>
                            {(e.running_days.monday)?<div className="p-1" style={{color:"black"}}>M</div>:<div className="p-1" style={{color:"#7e7a7a"}}>M</div>}
                            {(e.running_days.tuesday)?<div className="p-1" style={{color:"black"}}>T</div>:<div className="p-1" style={{color:"#7e7a7a"}}>T</div>}
                            {(e.running_days.wednesday)?<div className="p-1" style={{color:"black"}}>W</div>:<div className="p-1" style={{color:"#7e7a7a"}}>W</div>}
                            {(e.running_days.thursday)?<div className="p-1" style={{color:"black"}}>T</div>:<div className="p-1" style={{color:"#7e7a7a"}}>T</div>}
                            {(e.running_days.friday)?<div className="p-1" style={{color:"black"}}>F</div>:<div className="p-1" style={{color:"#7e7a7a"}}>F</div>}
                            {(e.running_days.saturday)?<div className="p-1" style={{color:"black"}}>S</div>:<div className="p-1" style={{color:"#7e7a7a"}}>S</div>}
                            {(e.running_days.sunday)?<div className="p-1" style={{color:"black"}}>S</div>:<div className="p-1" style={{color:"#7e7a7a"}}>S</div>}
                           
                        </div>
                        <div className="text-secondary  text-center">Running Days</div>
                        <div className="text-center"><a style={{backgroundColor:"white",color:"blue",fontSize:".8rem"}} href="s">Route Details</a></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            //   if local data activated
            <>
            sss
            </>
          )}
        </div>
      </div>
      <Social />
      <Footers />
      <Footertwo />
      <Footerthree />
    </>
  );
};

export { Secondtrainfilters };
