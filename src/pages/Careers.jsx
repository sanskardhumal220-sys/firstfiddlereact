import React from 'react'

function Careers() {
  return (
    <>
     <div className="container-fluid o">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
                        <h1
                            className="text-center"
                            style={{
                                fontSize: "1.5cm",
                                marginTop: "4cm",
                                fontFamily: "prague",
                            }}>
                            CAREERS
                        </h1>
                    </div>
                </div>
            </div>
<div className="container  ">
      <br/><br/> <h2 className="text-center mb-3" style={{color:"black"}}>COME WORKS <b style={{color:'orange'}}>WITH US!</b></h2>
        <p>First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. 
            The work environment enables both professional and personal growth.</p>
           <br/><br/>
           <br/><br/> <h2 className="text-center mb-3" style={{color:"black"}}>HOW TO <b style={{color:'orange'}}> APPLY!</b></h2>
        <p>First Fiddle is all about innovation, creativity
             and understanding ever-changing consumer needs.
              The work environment enables both professional and personal growth</p>
           <br/><br/>
        </div>
                    
<div className="container my-5 ">
  <div className='row '>
    <div className="col-md-6">
      <br/><br/> <h4 >Steep learning curve</h4>
        <p>Talent and merit are rewarded at First Fiddle<br/> Restaurants. Add value, and see yourself grow!</p>
 <br/><h4 className="text-align mb-2" style={{color:"black",fontWeight:"normal"}}>Growth opportunities</h4>
        <p>Talent and merit are rewarded at First Fiddle<br/> Restaurants. Add value, and see yourself grow!</p>
 <br/> <h4 className="text-align mb-2" style={{color:"black",fontWeight:"normal"}}>Exciting work environment</h4>
        <p>Work in a highly motivated environment with<br/> talented people. A positive work environment,<br/> ensures a productive and happy you.</p>
</div>


<div className="col-md-6">
  <div className='p-4 shadow-lg bg-white  rounded' style={{height:"460px"}}>
      <h4 style={{fontWeight:"normal"}}>Share your Details</h4>
      <form>
        <div className="mb-3">
          <label style={{fontSize:"16px"}}>Your Name:</label>
          <input type="text" className="form-control" placeholder="Your Name"/>
        </div>
        <div className="mb-3">
          <label style={{fontSize:"16px"}}>Your Email:</label>
          <input type="email" className="form-control" placeholder="Your Email"/>
        </div>
        <div className="mb-3">
          <label style={{fontSize:"16px"}}>Your Phone:</label>
          <input type="text" className="form-control" placeholder="Your Phone"/>
        </div>
        <div className="mb-3">
          <label style={{fontSize:"16px"}}>Your Message:</label>
          <input className="form-control" placeholder="Message"/>
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
    </div>
</div>
</div>
</div>
  
                        

    </>
  )
}

export default Careers
