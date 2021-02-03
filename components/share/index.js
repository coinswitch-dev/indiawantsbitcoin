import React, { Component } from 'react'
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";

const templates = [
    `I just emailed my constituency’s Member of Parliament (MP) on my views towards the impending Bill’s ban on cryptocurrencies in India. #IndiaWantsBitcoin \nYou too can email your MP telling them how the bill’s passing could leave India behind from here: `,
    `TODAY, I decided to help stop crypto from getting banned in India, so just emailed my constituency’s Member of Parliament (MP) expressing my view and ideas on the proposed Crypto ban Bill. #IndiaWantsBitcoin \nYou can also do so in #3 steps from here: `,
    `I urge you to do your part by emailing the parliament member (MP) of your constituency on GOI’s proposed Crypto Ban. Who will express our concerns and idea about positive crypto regulations, if not us? #IndiaWantsBitcoin \nI did it from here with ease: `
];
export default class Share extends Component {
    state = {
        slideIndex: 0,
        totalSlides: templates.length,
        instance: null,
        data: templates,
        shareUrl: 'https://indiawantsbitcoin.org/',
        title: templates[0]
    }

    onSlideChange = () => {
        const index = this.state.instance.activeIndex;
        this.setState({
            slideIndex: index,
            title: this.state.data[index]
        });
    }

    onSwiperInit = (swiper) => {
        this.setState({ instance: swiper }, () => {
            this.setState({ totalSlides: this.state.instance.slidesSizesGrid.length });
        });
    }

    render() {
        return (
            <div className={`${styles.parent} container mx-auto shadow-md mt-8`}>
                <div className={styles.stepheading}>Step 2/2</div>
                <div className="flex flex-row justify-between">
                    <div className={styles.heading}>
                        Encourage Your Friends To Do The Same
                    </div>
                    <div className="flex flex-row">
                        <div className={`${styles.heading2} mr-4`}>
                            Choose a message template {this.state.slideIndex + 1}/{this.state.totalSlides}
                        </div>
                        <svg className={`h-6 w-6 ${this.state.slideIndex === 0 ? 'text-gray-300' : 'text-indigo-500'} share-prev`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg className={`h-6 w-6 ${this.state.slideIndex === this.state.totalSlides - 1 ? 'text-gray-300' : 'text-indigo-500'} share-next`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    onSlideChange={this.onSlideChange}
                    onSwiper={(swiper) => this.onSwiperInit(swiper)}
                    controller={{ control: this.state.instance }}
                    navigation={{
                        nextEl: ".share-next",
                        prevEl: ".share-prev",
                    }}
                    className="my-4"
                >
                    {Array.isArray(this.state.data) && this.state.data.map((e, i) => (
                        <SwiperSlide className={styles.swiperCard} key={i}>
                            {e.split('\n').map((str, index) => <div className={styles.swiperText} key={index}>{str}</div>)}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mt-8 flex flex-row justify-center">
                    <div className={styles.shareContainer}>
                        <div className="flex flex-row align-center justify-center">
                            <div className={styles.shareText}>
                                Share On
                            </div>
                            <FacebookShareButton
                                url={this.state.shareUrl}
                                quote={`${this.state.title} ${this.state.shareUrl}`}
                                className="mr-4"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={this.state.shareUrl}
                                title={this.state.title}
                                className="mr-4">
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>

                            <WhatsappShareButton
                                url={this.state.shareUrl}
                                title={this.state.title}
                                className="mr-4">
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>

                            <TelegramShareButton
                                url={this.state.shareUrl}
                                title={`${this.state.title} ${this.state.shareUrl}`}
                                className="mr-4">
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>

                            <RedditShareButton
                                url={this.state.shareUrl}
                                title={`${this.state.title} ${this.state.shareUrl}`}
                            >
                                <RedditIcon size={32} round />
                            </RedditShareButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
