import React from 'react'

function Contact() {
    return (
        <>
            <div className="container-fluid n">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
                        <h1
                            className="text-center"
                            style={{
                                fontSize: "1.5cm",
                                marginTop: "4cm",
                                fontFamily: "prague",
                            }}
                        >
                            CONTACT US
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                  
                    <div className="col-md-6 mt-4 px-5" >
                        <h4>SEND US MESSAGE</h4>
                        <form>
                            <div className="mb-3 mt-4" style={{ fontWeight: "100" }}>
                                <input type="text" placeholder="Name*" className="form-control" />
                            </div>
                            <div className="mb-3 mt-4" style={{ fontWeight: "100" }}>
                                <input type="email" placeholder="Email*" className="form-control" />
                            </div>
                            <div className="mb-3 mt-4" style={{ fontWeight: "100" }}>
                                <input type="tel" placeholder="Phone*" className="form-control" />
                            </div>
                            <div className="mb-3 mt-4" style={{ fontWeight: "100" }}>
                                <input type="text" placeholder="Address*" className="form-control" />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{ backgroundColor: "yellow" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>


                    <div className="col-md-5 mt-4 ms-1" >
                        <h2 className="mt-4 mb-4">CONTACT INFO</h2>

                        <h6 style={{ color: "orange" }}>Address</h6>
                        <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>

                        <h6 style={{ color: "orange" }}>For Franchise Enquiry</h6>
                        <p>
                            MOBILE: <b style={{ color: "orange" }}>+91 9313663486</b>
                        </p>
                        <p>
                            EMAIL: <b style={{ color: "orange" }}>franchise@firstfiddle.in</b>
                        </p>


                        <h6 style={{ color: "orange" }}>For HR Enquiry</h6>
                        <p>
                            MOBILE: <b style={{ color: "orange" }}>+91 9999304427</b>
                        </p>
                        <p>
                            EMAIL: <b style={{ color: "orange" }}>hr@firstfiddle.in</b>
                        </p>

                        <h6 style={{ color: "orange" }}>For Other Enquiry</h6>
                        <p>
                            PHONE: <b style={{ color: "orange" }}>7676380000</b>
                        </p>
                        <p>
                            EMAIL: <b style={{ color: "orange" }}>customercare@firstfiddle.in</b>
                        </p>
                        <p>Open: Monday - Saturday 10:30 - 19:30</p>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
