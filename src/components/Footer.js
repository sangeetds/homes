import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
      <Container className = "footer">
        <SocialIcon url="http://linkedin.com/in/sangeetnarayan" style = { margin } bgColor="#888"/>
        <SocialIcon url="http://github.com/sangeetds" style = { margin } bgColor="#888"/>
        <SocialIcon url="mailto:sangeet@saket.me" style = { margin } bgColor="#888"/>
      </Container>
  )
}

const margin = {
    marginLeft: "1%"
};
