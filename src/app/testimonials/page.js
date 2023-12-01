import React from 'react'

const fetchTestimonial = async () => {
    try {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const result = await fetch("https://www.sankalpitsolutions.com/jupiter/api/testimonials.php", requestOptions)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error)
    }
}



async function page() {
    const testimonial = await fetchTestimonial()
    return (
        <section>
            <h1 style={{ padding: "10px 20px", borderBottom: "5px dotted #eee" }}>Testimonial</h1>
            <div className="testimonials__container" style={{ width: "100%", display: "flex",justifyContent: "center",padding: "10px 20px",flexDirection: "column"}}>
                {
                    testimonial?.data?.map((ele, idx) => {
                        return (
                            <div key={idx} className="testimonial__box" style={{display: "flex",justifyContent: "center",alignItems: "center",padding: "10px 10px",background: "#eee",boxShadow: "1px 1px 6px 0px rgba(0,0,0,0.1)",margin: "10px 0"}}>

                            <div className="col-sm-2" style={{display: "flex", justifyContent: "center", alignItems: 'center'}}>
                                <img src={ele?.image_path} className="img-fluid"  loading="lazy" style={{borderRadius: "50%",width: '100px', height: '100px'}}/>
                            </div>
                            <div className="col-sm-10">
                                <h4 style={{ color: "#d13112" }}>{ele?.name}</h4>
                                <span style={{fontSize: "14px", fontWeight: '600', color: '#888'}}>{ele?.school_name}</span>
                                <p style={{ marginTop: "5px" }}>{ele?.review}</p>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default page
