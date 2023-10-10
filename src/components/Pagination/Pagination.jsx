import React, { useState } from 'react'
import { Button, NavLink } from 'react-bootstrap'
import './Pagination.css'

const Pagination = ({ totalPost, postsPerPage, setCurrentPage, currentPage }) => {
    const [pageNumberLimit, setpageNumberLimit] = useState(3)
    const [maxpageNumberLimit, setmaxpageNumberLimit] = useState(3)
    const [minpageNumberLimit, setminpageNumberLimit] = useState(0)

    let pages = []
    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pages.push(i)
    }
    function previousPage() {
         setCurrentPage(currentPage - 1)
         if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
            setminpageNumberLimit(minpageNumberLimit - pageNumberLimit);
          }
    }
    function nextPage() {
        setCurrentPage(currentPage + 1)
        if(currentPage+1>maxpageNumberLimit){
            setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit)
            setminpageNumberLimit(minpageNumberLimit+pageNumberLimit)
        }

    }
    return (
        <>
            <NavLink style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',margin:"30px", cursor:'not-allowed'}}>
            {
                currentPage>1 ?<Button className="btn btn-info" onClick={() => { previousPage() }}>Previous Page</Button>:
                <Button className="btn btn-secondary" onClick={() => { previousPage() }} disabled>Previous Page</Button>
            }
                
                {
                    pages.map((page, index) => {
                        if(page <maxpageNumberLimit+1 && page > minpageNumberLimit){
                           return (
                            page==currentPage ? <Button className="btn btn-dark" onClick={() => setCurrentPage(page)}>{page}</Button>: <Button className="btn btn-info" onClick={() => setCurrentPage(page)}>{page}</Button>
                        ) 
                        }
                        else{
                            return null
                        }
                        
                    })
                }
                {
                    currentPage< pages.length ?<Button className="btn btn-info" onClick={() => { nextPage() }}>Next Page</Button>:
                    <Button className="btn btn-secondary" onClick={() => { nextPage() }}  disabled>Next Page</Button>
                }
            </NavLink>
        </>
    )
}

export default Pagination