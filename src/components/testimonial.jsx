import React from 'react'

export default function Testimonial(props) {
    return <>
        <div className='testimonial' style={{ backgroundColor: props.bg, borderColor: props.border }}>
            {props.text}
        </div>
    </>
}
