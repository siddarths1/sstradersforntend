import Carousel from 'react-bootstrap/Carousel';

function Corosoul() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          src="images/ricebanner.png"
          width={"100%"}
          height={"auto"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block w-30"
          src="images/pulsesbanner.png"
          width={"100%"}
          height={"auto"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block w-30"
          src="images/cerelsbanner.png"
          width={"100%"}
          height={"auto"}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block w-30"
          src="images/drybanner.png"
          width={"100%"}
          height={"auto"}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block w-30"
          src="images/sugarbanner.png"
          width={"100%"}
          height={"auto"}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block w-30"
          src="images/milkbanner.png"
          width={"100%"}
          height={"auto"}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Corosoul;