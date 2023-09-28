import React from 'react'
import { Button, NavLink } from 'react-bootstrap'
import { toast } from 'react-toastify'
import './Pagination.css'

const Pagination = ({ totalPost, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pages.push(i)
    }
    function previousPage() {
        if(currentPage>1){
            setCurrentPage(currentPage - 1)
        }
        else{
             toast.warning("Minimum Page reached")
        }
    }
    function nextPage() {
        if(currentPage< pages.length){
            setCurrentPage(currentPage + 1)
        }
        else{
            toast.warning("Maximum Page reached")
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
                        return (
                            <Button className="btn btn-info" onClick={() => setCurrentPage(page)}>{page}</Button>
                        )
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