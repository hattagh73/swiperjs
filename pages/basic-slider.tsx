//* Next Features *//
import { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useState } from 'react';

//* Swiper Features *//
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

//* Components *//
import { LeftArrowThin, RightArrowThin } from '../components/components';

//* Styles */
import s from '../styles/Home.module.css';

const BasicSlider:NextPage = () => {

    const data = [
        {
            img_url: '/img/img1.jpg',
            title: 'Main Title 1',
            subtitle: 'Subtitle 1'
        },
        {
            img_url: '/img/img2.jpg',
            title: 'Main Title 2',
            subtitle: 'Subtitle 2'
        },
        {
            img_url: '/img/img3.jpg',
            title: 'Main Title 3',
            subtitle: 'Subtitle 3'
        }
    ]

    // const prevRef = useRef<HTMLDivElement>(null);
    // const nextRef = useRef<HTMLDivElement>(null);

    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);


    return (
        <main>
            {/* <section className="w-screen h-screen bg-black"> */}
            <section className="bg-black">
                <Swiper
                    className="w-screen h-screen relative"
                    modules={[Navigation, EffectFade, Autoplay]}
                    navigation={{
                        prevEl,
                        nextEl, 
                        disabledClass: s.lol
                    }}
                    // onInit={(swiper) => {
                    //     swiper.params.navigation.prevEl = prevRef.current;
                    //     swiper.params.navigation.nextEl = nextRef.current;
                    //     swiper.navigation.init();
                    //     swiper.navigation.update();
                    // }}
                    slidesPerView={1}
                    effect="fade"
                    speed={700}
                    // autoplay={{delay: 2400}}
                    // loop={true}
                >
                    {   data.map((i, index) =>
                        <SwiperSlide key={index}>
                        {/* <SwiperSlide key={index} className="flex justify-center items-center"> */}
                            {({ isActive }) => (
                                <>
                                    <Image
                                        // className={`${isActive ? (
                                        //     'brightness-75 transition duration-200 ease-linear'
                                        // )  : (
                                        //     'brightness-100'
                                        // )}`}
                                        className="w-full h-full object-cover"
                                        src={i.img_url}
                                        alt="Background Image"
                                        width="1920"
                                        height="1080"
                                    />
                                    {/* <div className="absolute z-[1] inset-0 bg-gradient-to-b from-black/70 via-black/5 to-black/100" /> */}
                                    <div className="absolute z-[2] inset-0 flex flex-col justify-center items-center">
                                        <div className={`block text-center py-3 px-5 rounded-lg backdrop-blur-sm bg-black/30`}>
                                            <p className="text-2xl md:text-5xl text-white font-kaushan_script">{isActive ? i.title : null}</p>
                                            <p className="text-lg md:text-xl text-gray-300 font-poppins">{isActive ? i.subtitle : null}</p>
                                        </div>
                                    </div>
                                
                                </>
                            )}
                        </SwiperSlide>
                    )}

                    <div className="absolute z-[2] bottom-3 inset-x-0 w-full flex justify-center gap-x-3">
                        <div ref={(node) => setPrevEl(node)} className="rounded-full backdrop-blur-sm transition duration-200 ease-linear bg-black/30 hover:bg-black/80 p-2">
                            <LeftArrowThin className="fill-white h-5 w-5" />
                        </div>
                        <div ref={(node) => setNextEl(node)} className="rounded-full backdrop-blur-sm transition duration-200 ease-linear bg-black/30 hover:bg-black/80 p-2">
                            <RightArrowThin className="fill-white h-5 w-5" />
                        </div>
                    </div>

                </Swiper>
            </section>
        </main>
    )
}
export default BasicSlider;

