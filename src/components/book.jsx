import React from 'react'
import star from "../Assets/star.svg"
import computer from "../Assets/computer.svg"

export default function Book() {
    return <>
        <div className='book'>
            <img src={computer} className="computer" />
            <div>
                <p className='bookText'><span>Book a free - content strategy session</span></p>
                <div className='stars'>
                    <p>100+ Customers served</p>
                    <img src={star} className="star" />
                    <img src={star} className="star" />
                    <img src={star} className="star" />
                    <img src={star} className="star" />
                    <img src={star} className="star" />
                </div>
            </div>
        </div>
    </>
}
