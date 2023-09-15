import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="py-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Auth</h1>
          <p className="text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            adipisci quaerat aperiam rem eos iste amet voluptates ullam pariatur
            eius? Vero reiciendis soluta officiis, qui quo repudiandae porro
            quae ipsum.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>

            <LinkContainer to="/login">
              <Button variant="secondary" href="/register">
                Register
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
