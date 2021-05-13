import React from 'react'
import '../App.css'

export default function About() {
    return (
        <div>
            <h2 className="heading"> About </h2>{' '}
            <div>
                <div className="aboutBox">
                    <h3>
                        Hey there! I'm Sangeet, a final year undergrad at BITS
                        Pilani Goa Campus and a budding Software Developer.
                    </h3>
                    <h3 style={{ marginTop: '150px' }}>
                        {' '}
                        Find me where creativity meets technology.
                    </h3>
                    <h4>
                        Sangeet Narayan
                        <br />
                    </h4>
                </div>
                <div className="workBox">
                    <h3
                        style={{
                            marginTop: '30%',
                            marginDown: '20%',
                            fontSize: '20px',
                        }}
                    >
                        {' '}
                        I currently work at ClearTax as a Software Developer
                        Intern. I feel a developer's life is to make life easier
                        for others and that's what we are doing at Cleartax,
                        making financial life easier for millions of Indians.
                    </h3>
                </div>
            </div>
        </div>
    )
}
