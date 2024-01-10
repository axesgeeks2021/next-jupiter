import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Pagination({ nPages, currentPage, setCurrentPage }) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== nPages) {
            return setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            return setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className="pagination__container">
            <ul className="page">
                <li className={`page__btn`} style={{ opacity: currentPage > 1 ? 1 : 0.6 }} onClick={prevPage}><span className="material-icons" >
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </span>
                </li>
                {
                    pageNumbers.map(ele => {
                        return (
                            <li key={ele} onClick={() => setCurrentPage(ele)} className={`page__numbers ${currentPage == ele ? 'active' : ''}`}>{ele}</li>
                        )
                    })
                }
                <li className="page__btn" onClick={() => nextPage()} style={{ opacity: currentPage < pageNumbers.length ? 1 : 0.6 }}><span className="material-icons" >
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </span>
                </li>
            </ul>
        </div >
    )
}

export default Pagination
