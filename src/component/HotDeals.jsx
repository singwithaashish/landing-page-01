import React from 'react'
import { Container } from 'react-bootstrap'

function HotDeals() {
  return (
    <div>
        <Container >

          <div className='row my-5 py-5 '>
            <div className="deals col-sm-12 col-md-3">
                <h1 className='bold_primary'>Hot 🔥 <br/> deals for you</h1>
                <p className='text-secondary'>
                    online shopping for retails and direct customers
                </p>
            </div>

            <div className="deal_item col-sm-6 col-md-3" >
            <i className="bi bi-cash-coin fs-2 fw-bold text-secondary"></i>
            <h5 className='fw-bold my-3 fs-6'>1.5% cashback</h5>
            <p className='text-secondary'>online shopping for retail sales directed to customers</p>
            </div>
            
            <div className="deal_item col-sm-6 col-md-3" >
            <i className="bi fw-bold bi-cash-coin fs-2 text-secondary"></i>
            <h5 className='fw-bold my-3 fs-6'>30 day term</h5>
            <p className='text-secondary'>online shopping for retail sales directed to customers</p>
            </div>

            <div className="deal_item col-sm-6 col-md-3" >
            <i className="bi bi-cash-coin fw-bold fs-2 text-secondary"></i>
            <h5 className='fw-bold my-3 fs-6'>Save money</h5>
            <p className='text-secondary'>online shopping for retail sales directed to customers</p>
            </div>
            </div>
            
        </Container>
    </div>
  )
}

export default HotDeals