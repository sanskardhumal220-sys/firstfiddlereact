import React from 'react'

function Home() {
  return (
    <>
     {/* banner div start  */}
     <div>
        <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="" className="w-100"/>

     </div>
     {/* banner div END  */}
    <div className="container  ">
        <h2 className="text-center mb-3">WELCOME TO <b style={{color:'orange'}}>FIRST FRIDDLE</b></h2>
        <div className="row">
            <div className="col-md-7">
                <p>First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is
                    headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie
                    in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and
                    franchises across India.</p>
                <div className="text-center">
                    <button className="btn btn-success">Read More</button>
                </div>

            </div>
            <div className="col-md-5">
                <img src="./public/fiddle2.jpg" alt=""/>
            </div>


        </div>
         {/* row END  */}
    </div>
    {/* container END  */}
     <div className="container-fluid c ">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-center text-white">
                <h2 className="d">MEDIA MENTIONS</h2>
                <p className="e">We've been making splashes and headlines since 1999 for our innovative concepts and 
                    aesthetic ideations, experimental gastronomic affairs, and exotic mixology. 
                    We’ve made our way from the heart of the country into the hearts of its people!</p>
                <div className="text-center">
                    <button className="btn btn-info">read more..</button>
                </div>
            </div>
            <div className="col-md-2">

            </div>

        </div>
        
    </div> 
      <div >
        <center>
            <h1>EXPLORE</h1>
            <h1 style={{color: "orange" ,fontWeight: "bold"}}>OUR BRANDS</h1><br/>

        </center>
        <div className='container'>
        <div className="row">
            <div className="col-md-3"><img src="public/ffpic1 - Copy.jpg"alt=""  style={{width:"250px",height:"150px"}}/>
            </div>
            <div className="col-md-3"><img src="public/ffpic2 - Copy.jpg" alt="" style={{ width:"250px", height:"150px" }}/>

            </div>
            <div className="col-md-3"><img src="public/ffpic3.jpg" alt="" style={{width:"250px" ,height:"150px"}}/>

            </div>
            <div className="col-md-3"><img src="public/ffpic4.jpg" alt="" style={{width:"250px", height:"150px"}}/>

            </div>
            </div>
        </div>
      
      </div>
      

    
    <div className="container-fluid f">

            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center"/>
                    <h2 className="text-center text-white">EXPERIENCE OUR CONCEPTS</h2>
                    <p className="e">Moving beyond just offering Indian, international, and fusion cuisines, our restaurants
                        create magic with our special events, mood-setting music, Insta-worthy aesthetics, and
                        tongue-tingling signatures! Head over to experience it for yourself!

                    </p>
                    <div className="text-center" style={{color: "yellow"}}>
                        <button className="btn btn-info">know more..</button>
                    </div>
                </div>
                <div className="col-md-2">

                </div>

            </div>
        
        </>
        
    
    );
  }

export default Home