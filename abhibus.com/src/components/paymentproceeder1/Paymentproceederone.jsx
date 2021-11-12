import './trainpaymentone.css';
import { useEffect,useState } from 'react';

const Paymentproceederone =() =>{

    const[user,setUser] = useState("Sumit");
    const[userFlag,setUserFlag] = useState(false);

    return(
        <>
        <div className="train-payment-one-s-main">
                <div className="pt-4 pb-4">
                    <h4>Passenger Details</h4>
                </div>
                <div className="train-payment-one-s-main-grid">
                        <div>
                            {/* 1st box */}
                            {!userFlag?
                            <div className="p-3 border">
                                <div ><strong>IRCTC Account Details</strong></div>
                                <div className="insider-grid-trainpayone-s pt-1">
                                        <div className="text-center"><img className="text-center" src="https://www.abhibus.com/trains/images/irctc-logo.png" alt="ixigo" />
                                        <div style={{fontSize:".7rem"}} className="text-secondary text-center">VERIFIED</div></div>
                                        <div className="pt-1">
                                            <div style={{fontSize:".8rem"}} className="text-secondary">IRCTC User Name</div>
                                            <div style={{display: "flex"}}><h5 className="m-0">{user}</h5>
                                            {/* editor of IRCTC */}
                                            <img onClick={()=>{
                                                setUserFlag(!userFlag)
                                            }} className="mx-3 pointer" src="https://www.abhibus.com/trains/images/edit-icon.png" alt="edit" />
                                            </div>
                                            <div><span className="text-secondary">IRCTC password will be asked after payment for successful booking |</span> <span className="pointer">Forgot password?</span> <span className="text-secondary">|</span> <span className="pointer">Reset</span></div>
                                        </div>
                                </div>
                            </div>
                            :    <div className="p-3">
                            <div className="h6"><strong>IRCTC Account Details</strong></div>
                            <div className="text-secondary" style={{fontSize:".8rem"}}>*You will be redirected to IRCTC page after payment to enter IRCTC user id and password to complete booking<br/>Please ensure you remember IRCTC user ID and Password</div>
                            <div className="irctc-register-verify-s">
                                <div className="pt-4 pb-4"  >
                                    <div style={{display: "flex"}}>
                                    <div><input style={{height:"2rem",width:"17rem"}} type="text" placeholder="IRCTC USER ID" />
                                    </div>
                                    {/* have to use on this button match data */}
                                    <div ><button className="btn btn-danger mx-1">Verify</button></div>
                                    <div ><button className="btn btn-danger">Cancel</button></div>
                                    </div>
                                    <div className="text-secondary pt-2 pb-2"style={{fontSize:".7rem"}}>IRCTC password will be asked after payment for successful booking.</div>
                                    <div className="pt-2" style={{display:"flex",justifyContent:"space-between",fontSize:".9rem"}}>
                                        <div>Forgot IRCTC UserID?</div>
                                        <div>|</div>
                                        <div>Reset IRCTC Password</div>
                                    </div>
                                </div>
                                <div>
                                <div className="h6 text-center pt-5"><strong>Have you not registered with IRCTC ?</strong></div>
                                <div className="text-center"><button className="btn btn-danger">Create IRCTC User ID</button></div>
                                </div>
                               
                            </div>
                           
                        </div>
                            }
                            {/* 2nd box below */}
                            <div className="border pt-2 mt-3">
                               
                                <div className="p-3 pt-2"><strong>Enter Passanger Details</strong></div>
                                {/* list will be here */}
                                <div className="p-3 pt-2">List Appen here</div>
                                <div className="px-3 payment-train-input-s">
                                    <div><input style={{height:"1.8rem"}} type="text" placeholder="Full Name" className="form-control border" /></div>
                                    <div className="mx-3"><input style={{height:"1.8rem"}} type="number" placeholder="age" className="form-control border" /></div>
                                    
                                    <div>
                                    <select style={{height:"1.8rem",width:"8rem"}} name="" id="">
                                        <option value="Select">Select Gender</option>
                                        <option value="male">MALE</option>
                                        <option value="female">FEMALE</option>
                                        <option value="trans">TRANSGENDER</option>
                                    </select>
                                    </div>
                                    <div className="mx-3"><select style={{height:"1.8rem",width:"9.8rem"}} name="" id="">
                                        <option value="">No Birth Preference</option>
                                        <option value="LB">Lower Birth</option>
                                        <option value="UB">Upper Birth</option>
                                        <option value="SLB">Side Lower Birth</option>
                                        <option value="SUB">Side Upper Birth</option>
                                    </select></div>
                                    <div className="mx-3"><select style={{height:"1.8rem",width:"8rem"}} name="" id="">
                                        <option value="">Country</option>
                                        <option value="India">India</option>
                                    </select></div>
                                    <div className="mx-4"><button className="btn btn-success">Add</button></div>
                                </div>
                            </div>
                            {/* 3rd box below */}
                            <div className="border pt-2 px-3 mt-3">
                                <div><strong>Contact Information</strong><span className="text-secondary"> -  we will send ticket and other info on this</span></div>
                                <div className="pt-3" style={{display: "flex"}}>
                                    <input className="border"  style={{height:"1.8rem",width:"15rem"}} type="text" placeholder="Enter your Email Id" />
                                    <input className="mx-3" style={{height:"1.8rem",width:"15rem"}} type="number" placeholder="Enter your Mobile" />
                                </div>
                            </div>
                            {/* third last box */}
                            <div className="border pt-2 px-3 mt-3">
                            <div><strong>Passenger Destination Address</strong></div>
                            <div className="pt-3" style={{display: "grid",gridTemplateColumns:"49% 49%",gap:"2%"}}>
                                <div><input placeholder="Address (Mandatory)" style={{height:"1.8rem",paddingLeft:"5%"}} className="form-control border" type="text"/></div>
                                <div><input placeholder="Pincode (Mandatory)" style={{height:"1.8rem",paddingLeft:"5%"}} className="form-control border" type="text" /></div>
                                <div><input placeholder="City (Mandatory)" style={{height:"1.8rem",paddingLeft:"5%"}} className="form-control border" type="text" /></div>
                                <div><input placeholder="State (Mandatory)" style={{height:"1.8rem",paddingLeft:"5%"}} className="form-control border" type="text" /></div>
                            </div>
                            </div>
                            {/* second last box */}
                            <div className="border pt-2 px-3 mt-3">
                            <div><strong>Preferences</strong></div>
                            <div className="pt-3" style={{display: "grid",gridTemplateColumns:"49% 49%",gap:"2%"}}>
                                <div style={{display: "flex" }}>
                                    <input type="checkbox" />
                                    <label className="mx-3">Reservation Choice</label>
                                </div>
                                <div style={{display: "flex" }}>
                                    <input type="checkbox" />
                                    <label className="mx-3">Enter GST Details <span className="text-secondary">(optional)</span></label>
                                </div>
                            </div>
                           
                            </div>
                            {/* last box */}
                            <div className="border pt-2 px-3 mt-3">
                            <div><strong>Travel Insurance</strong></div>
                            <div className="pt-3" style={{display: "grid",gridTemplateColumns:"49% 49%",gap:"2%"}}>
                                <div>
                                    <span><strong>Do you want to take Travel Insurance (₹0.35/person)?</strong></span>
                                </div>
                                <div style={{display: "flex" }}>
                                    <div style={{display: "flex" }}>
                                        <input type="radio" />
                                        <label className="mx-2">Yes and I accept the Terms & Conditions</label>
                                    </div>
                                    <div style={{display: "flex" }}>
                                        <input type="radio" />
                                        <label className="mx-2">No</label>
                                    </div>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                        <div style={{height:"500px"}}>Righty</div>
                        <div className="text-center pt-5">
                            <div className="text-center" style={{display:"flex",textAlign:"center"}}>
                                <div><input type="checkbox" /></div>
                                <div className="text-center"><label>I agree to Terms and Conditions, Travel Guidelines and Cancellation Policy</label></div>
                                
                                </div>
                        </div>
                        {/* below for right side */}
                        <div>right belower</div>
                </div>
        </div>
        </>
    )
}

export {Paymentproceederone}