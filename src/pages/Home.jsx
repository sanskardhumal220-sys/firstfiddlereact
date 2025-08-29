import React from 'react'

function Home() {
  return (
    <>
     {/* banner div start  */}
     <div>
        <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="" class="w-100"/>

     </div>
     {/* banner div END  */}
    <div class="container  ">
        <h2 class="text-center mb-3">WELCOME TO <b style={{color:'orange'}}>FIRST FRIDDLE</b></h2>
        <div class="row">
            <div class="col-md-7">
                <p>First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is
                    headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie
                    in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and
                    franchises across India.</p>
                <div class="text-center">
                    <button class="btn btn-success">Read More</button>
                </div>

            </div>
            <div class="col-md-5">
                <img src="public/fiddle2.jpg" alt=""/>
            </div>


        </div>
         {/* row END  */}
    </div>
    {/* container END  */}
      
      
    </>
  )
}

export default Home