import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <div className="footer">
            <SocialIcon
                url="http://linkedin.com/in/sangeetnarayan"
                style={margin}
                bgColor="#EEE"
            />
            <SocialIcon
                url="http://github.com/sangeetds"
                style={margin}
                bgColor="#EEE"
            />
            <SocialIcon
                url="mailto:sangeet@saket.me"
                style={margin}
                bgColor="#EEE"
            />
        </div>
    )
}

const margin = {
    marginLeft: '4%',
    marginRight: '4%',
}
