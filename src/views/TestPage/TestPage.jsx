import React from 'react'
import LeftNav from '../../components/Left_Pannel/LeftNav'
import Header from '../../components/Header/Header'

const TestPage = () => {
  return (
    <>
        <div className="w-100 d-flex global-layout">
        <LeftNav />
        <div className="main-content">
          <Header />
          <p>Page is Down</p>
        </div>
      </div>
    </>
  )
}

export default TestPage