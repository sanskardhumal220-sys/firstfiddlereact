import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid " style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-md-4">
            <img src="public/ff-logo-02.png" />
          </div>
          <div className="col-md-8">
            <h1 style={{ color: "yellow" }}>CONTACT  US</h1>

            
            <h5 style={{ color: "white" }}>We're a team focusing on redefining the way the hospitality industry works by <br /> bringing in
              concept based restaurants across India. We are truly<br /> committed to catering to the ever-changing
              cosmopolitan taste of the customer<br /> and revolutioning the F & B industry!</h5>
            <div className="row">
              <div className="col-md-6">
                <h3 style={{ color: "yellow" }}>ADDRESS</h3>
                <h5 style={{ color: "white" }}>S-357 2nd floor, Block S, Panchsheel Park South,
                  Panchsheel Park, New Delhi, Delhi 110017</h5>
              </div>
              <div className="col-md-6">
                <h3 style={{ color: "yellow" }}>ENQUIRY</h3>
                <h4 style={{ color: "white" }}>Email: customercare@firstfiddle.in</h4>
              </div>
              <div style={{display:"flex" , gap:"15px"}}>
              <i className="fa-brands fa-facebook" style={{ color: "orange", fontSize: "40px", fontWeight: "400", fontfamily: "Font Awesome 6 Brands" }}></i>
              <i className="fa-brands fa-instagram" style={{ color: "orange", fontSize: "40px", display: "flex", fontWeight: "400", fontfamily: "Font Awesome 6 Brands" }}></i>
              <i className="fa-brands fa-whatsapp" style={{ color: "orange", fontSize: "40px", marginleft: "3px", fontWeight: "400", fontfamily: "Font Awesome 6 Brands" }}></i>
               </div>
            </div>
            <br/>
            <br />
            <br />

          </div>
        </div>


        <div style={{ background: "grey" }}>
          <center> <h5 style={{ color: "white" }}>EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS
            <br />| BLOG | APP COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED</h5>
          </center>
        </div>
      </div>

    </>
  )
}











export default Footer
