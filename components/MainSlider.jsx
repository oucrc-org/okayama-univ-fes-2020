import Slider from "react-slick";
import React, {Component} from "react";
import Link from "next/link";

export default class SimpleSlider extends Component {
    render() {
        const contents = [
            {
                image: "/committee.png",
                link: "/committee"
            },
            {
                image: "/projects.png",
                link: "/projects"
            },
            {
                image: "/clubs.png",
                link: "/clubs"
            },
            {
                image: "/labs.png",
                link: "/labs"
            }
        ];

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
            <div className="relative mb-6">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        contents.map((content) =>
                            <div>
                                <Link href={content.link}>
                                    <a>
                                        <img className="w-full max-h-screen object-cover" src={content.image} alt="メインビジュアル"/>
                                    </a>
                                </Link>
                            </div>
                        )
                    }
                </Slider>
                <button className="absolute left-0 top-0 bottom-0 m-auto pl-3 xl:w-40 focus:outline-none"
                        onClick={() => {
                            this.slider.slickPrev()
                        }}>◀︎
                </button>
                <button className="absolute right-0 top-0 bottom-0 m-auto pr-3 xl:w-40 focus:outline-none"
                        onClick={() => {
                            this.slider.slickNext()
                        }}>▶︎
                </button>
            </div>
        );
    }
}