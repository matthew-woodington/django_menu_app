import Carousel from "react-bootstrap/Carousel";

function FeaturedSection() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="http://sidewallpizza.com/img/salad.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Smoky Salad</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/lcafvugo/4622e518-fdcc-4eec-94bd-58cb096aec15"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Arugula Pizza</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="https://www.cuisinart.com/globalassets/recipes/recipe_11657_1576965356.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Cinnamon Sugar Bites</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FeaturedSection;
