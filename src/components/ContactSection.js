import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background-color: #0b0b0b;
  color: #fff;
  padding: 120px 0;
  min-height: 60vh;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  width: 90%;
  max-width: 900px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.7;
  max-width: 700px;
`;

const ContactList = styled.div`
  margin-top: 1.5rem;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-right: 1.25rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.25s ease;
  }
  &:hover:after { width: 100%; }
`;

function ContactSection() {
  return (
    <SectionContainer id="contact">
      <Inner>
        <Title>Get in touch</Title>
        <Text>
          Have a project in mind or just want to say hello? Reach out and we’ll respond promptly.
        </Text>
        <ContactList>
          <ContactLink href="mailto:info@psm.com">info@psm.com</ContactLink>
          <ContactLink href="tel:+11234567890">(123) 456-7890</ContactLink>
        </ContactList>
      </Inner>
    </SectionContainer>
  );
}

export default ContactSection;

