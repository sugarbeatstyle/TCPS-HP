
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface BannerSectionProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <section id="banner-section" className="py-5">
      <Container>
        <Row>
          <div style={{ maxWidth: '50%', margin: '0 auto' }} className="text-center">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt={altText} className="img-fluid banner-hover" />
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;
