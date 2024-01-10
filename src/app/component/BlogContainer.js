"use client"
import React, { useState } from 'react'
import Pagination from './Pagination';
import Link from 'next/link';

function BlogContainer({ blogs }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(9);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = blogs?.data?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(blogs?.data?.length / recordsPerPage)

    return (
        <>
            <div className="card__box my-2">
                {
                    currentRecords?.map((ele, idx) => {
                        return (
                            <Link href={{ pathname: ele?.slug }} key={idx} className='blog__card__link my-4'>
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
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </>
    )
}

export default BlogContainer
