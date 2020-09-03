import Slider from "react-slick";
import React, {Component} from "react";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="relative">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div>
                        <img className="w-full max-h-screen" src="/1080x720.png" alt="メインビジュアル"/>
                    </div>
                    <div>
                        <img className="w-full max-h-screen" src="/1080x720.png" alt="メインビジュアル"/>
                    </div>
                    <div>
                        <img className="w-full max-h-screen" src="/1080x720.png" alt="メインビジュアル"/>
                    </div>
                    <div>
                        <img className="w-full max-h-screen" src="/1080x720.png" alt="メインビジュアル"/>
                    </div>
                </Slider>
                <button className="absolute left-0 top-0 bottom-0 m-auto pl-3 xl:w-40 focus:outline-none" onClick={() => {
                    this.slider.slickPrev()
                }}>◀︎
                </button>
                <button className="absolute right-0 top-0 bottom-0 m-auto pr-3 xl:w-40 focus:outline-none" onClick={() => {
                    this.slider.slickNext()
                }}>▶︎
                </button>
            </div>
        );
    }
}