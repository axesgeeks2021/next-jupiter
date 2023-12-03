import Link from 'next/link';
import React from 'react'

const fetchBlogs = async () => {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const res = await fetch("http://www.sankalpitsolutions.com/jupiter/api/blog_list.php", requestOptions)
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

async function page() {
    const blogs = await fetchBlogs()
    return (
        <section className="container-fluid" style={{position: 'relative'}}>
            <h1 style={{ textAlign: "center" }}>Trending Blogs</h1>
            <div className="card__box"
                >
                {
                    blogs && blogs.data?.map((ele, idx) => {
                        return (
                            <Link href={{pathname : ele?.slug}} key={idx} className='blog__card__link'>
                                <div className="blog__card" >
                                    <div className="blog__img">
                                        <img src={ele?.image_path} />
                                    </div>
                                    <div className="blog__text" style={{ padding: "10px 10px" }}>
                                        <h3>{ele?.name}</h3>
                                        {/*<p style={{ color: "#fff" }}>{ele?.short_desp.replaceAll('&lt;p&gt;', '').replaceAll('&lt;/p&gt;', '')}</p>*/}
                                        <button >Read More...</button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default page
