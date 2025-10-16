import React from 'react';
import { Container } from 'react-bootstrap';

const LineButton: React.FC = () => {
  return (
    <section className="py-5 bg-dark text-white text-center">
        <Container>
            <a href="https://lin.ee/POyRMnh">
                <img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="72" />
            </a>
        </Container>
    </section>
  );
};

export default LineButton;