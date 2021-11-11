import "./searchbar.css";
import { useState } from "react";
const Searchbar = () => {
  const [opener, setOpener] = useState(1);
  const [sourceTrain,setSourceTrain] = useState("");
  const [destTrain,setDestTrain] = useState("");
  const [trainJourneyDate,setTrainJourneyDate] = useState("");
  const handleSource =(e)=>{
      setSourceTrain(e.target.value)
  }
  const handleDeparture=(e)=>{
    setDestTrain(e.target.value)
  }
  const handleTrainJourneyDate=(e)=>{
    setTrainJourneyDate(e.target.value)
  }

  return (
    <>
      <div className="searchbar-container">
        <div className="col text-center pt-5">
          <h1 className="bookIRCTC ">Book IRCTC Train Tickets</h1>
          <div className="allLists allLists-grid">
            <a href="#target1" className="focus">
              Bus
            </a>
            <a href="#target1" className="focus">
              Trains
            </a>
            <a href="#focus2" className="focus">
              Hotels
            </a>
            <a href="#focus3" className="focus">
              Rentals
            </a>
          </div>
        </div>
        {/* searcbox top */}
        <div className="searchbox-container  mt-4">
          <span className="searchbox-top">
            <input
              onClick={() => {
                setOpener(1);
              }}
              type="radio"
              name="trains"
              checked={opener === 1}
            />
            <label className="radios">Book Tickets</label>
            <input
              onClick={() => {
                setOpener(2);
              }}
              type="radio"
              name="trains"
            />
            <label className="radios">Check PNR</label>
            <input
              onClick={() => {
                setOpener(3);
              }}
              type="radio"
              name="trains"
            />
            <label> Train Info</label>
          </span>
          <div className="main-searchbox">
            {opener === 1 ? (
              <div className="book-tickets">
                <div className="firststbox-s">
                  <div className="mt-3">
                    <img
                      src="https://static.abhibus.com/assets/img/pointer-1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="enter-sourcefirst-s">Enter Source</div>
                    <div>
                      <input
                        style={{ height: "30px",border:"none"}}
                        className="remove-border-s"
                        type="text"
                        value={sourceTrain}
                        onChange={handleSource}
                      />
                    </div>
                  </div>
                </div>
                {/* 2nd starts */}
                <div className="firststbox-s">
                  <div className="mt-3">
                    <img
                      src="https://static.abhibus.com/assets/img/pointer-2.png"
                      alt="pic"
                    />
                  </div>
                  <div>
                    <div className="enter-sourcefirst-s">Enter Destination</div>
                    <div>
                      <input
                        style={{ height: "30px",border:"none" }}
                        className="remove-border-s"
                        type="text"
                        value={destTrain}
                        onChange={handleDeparture}
                      />
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div className="firststbox-s">
                    <div className="mt-3"><img src="https://static.abhibus.com/assets/img/date.png" alt="pic" /></div>
                  <div className="mt-3">
                    <input style={{ height: "30px",border:"none" }}
                        className="remove-border-s" type="date"
                        value={trainJourneyDate}
                        onChange={handleTrainJourneyDate}
                         /></div>
                </div>
                <div>
                  {" "}
                  <button className ="searchTrainsfirst-s">Search Trains</button>
                </div>
              </div>
            ) : // below will be pnr
            opener === 2 ? (
                <div className="pnr-enquiry-s">
                    <div className="pnrfirst">
                        <div className="text-center h6 m-0">PNR Status</div>
                        <div className="text-center" style={{fontSize: "12px"}}>Know the current status of your ticket through PNR search</div>
                    </div>
                    <div><input className="m-auto p-4" style={{width: "100%", height: "55px",border:"none"}} type="text" placeholder="Enter 10 digit PNR here" /></div>
                    <div><button className="searchTrainsfirst-s" style={{width: "100%", height: "100%"}}>Search</button></div>
                </div>
            ) : (
                <div className="pnr-enquiry-s">
                <div className="pnrfirst">
                    <div className="text-center h6 m-0">Train Info</div>
                    <div className="text-center" style={{fontSize: "12px"}}>Know the coach position, Running status and all info about a train</div>
                </div>
                <div><input className="m-auto p-4" style={{width: "100%", height: "55px",border:"none"}} type="text" placeholder="Enter Train number" /></div>
                <div><button className="searchTrainsfirst-s" style={{width: "100%", height: "100%"}}>Search</button></div>
            </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Searchbar };
