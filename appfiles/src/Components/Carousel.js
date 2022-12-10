import Carousel from 'react-bootstrap/Carousel';

export default function TipsCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="carousel-images"
          src="https://s3-prod.autonews.com/s3fs-public/3LamborghiniMiami-MAIN.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Naš seznam kupcev</h3>
          <p>S klikom na fotografijo si lahko ogledate naš blog glede seznama kupcev.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-images"
          src="https://www.progressive.com/lifelanes/wp-content/uploads/2022/06/PN1128_DashboardSymbols_Header.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Kako prepoznati goljufijo</h3>
          <p>S klikom na fotografijo si lahko ogledate naš blog glede prepoznavanja goljufij.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-images"
          src="https://carsnews.tv/uplimages/n_587_w206.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Najboljši rabljeni avtomobili leta 2022</h3>
          <p>S klikom na fotografijo si lahko ogledate naš blog glede najboljših rabljenih avtomobilov leta 2022.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}