import Slider from "react-slick";
import React, {Component} from "react";
import Link from "next/link";

export default class SimpleSlider extends Component {
    render() {
        const contents = [
            {
                title: "実行委員会",
                image: "/committee.jpg",
                link: "/committee"
            },
            {
                title: "団体企画",
                image: "/projects.jpg",
                link: "/projects"
            },
            {
                title: "部活動、サークル紹介",
                image: "/clubs.jpg",
                link: "/clubs"
            },
            {
                title: "研究室紹介",
                image: "/president.jpg",
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
                            <Link href={content.link}>
                                <a>
                                    <div className="relative">
                                        <img className="w-full max-h-screen object-cover" src={content.image}
                                             alt="メインビジュアル"/>
                                        <div className="absolute top-0 right-0 m-6 opacity-80 bg-blue-900 rounded">
                                            <p className="text-white text-sm md:text-xl font-bold p-3">
                                                {content.title}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
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