import { Carousel } from "react-bootstrap";

import chartImage1 from '../../ChartImage1.webp';
import chartImage2 from '../../ChartImage2.webp';

export default function CarouselFunction () {
    return (
         <Carousel controls={false} indicators={false} interval={2500} style={{height: '28rem'}}>
            <Carousel.Item>
                <img style={{ width: '100%', height: '80%', borderRadius: '2px', border: '1px solid black' }} src={chartImage1} alt="img1" />
            </Carousel.Item >
            <Carousel.Item>
                <img style={{ width: '100%', height: '80%', borderRadius: '2px', border: '1px solid black' }} src={chartImage2} alt="img2" />
            </Carousel.Item>
        </Carousel>
    )
}