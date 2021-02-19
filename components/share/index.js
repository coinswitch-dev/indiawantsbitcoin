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
import { shuffleArray as shuffleTemplates } from '../../pages/api/_utils';
import { reportWebVitals } from '../../pages/_app';

const templates = [
    // `I just emailed my constituency’s Member of Parliament (MP) on my views towards the impending Bill’s ban on cryptocurrencies in India. #IndiaWantsBitcoin \nYou too can email your MP telling them how the bill’s passing could leave India behind from here: `,
    // `TODAY, I decided to help stop crypto from getting banned in India, so just emailed my constituency’s Member of Parliament (MP) expressing my view and ideas on the proposed Crypto ban Bill. #IndiaWantsBitcoin \nYou can also do so in #3 steps from here: `,
    `I’m concerned about the proposed crypto ban in India.Crypto is the new financial internet. India must adopt it or we will get left behind. Please email your local MP today! #IndiaWantsBitcoin\nhttps://indiawantsbitcoin.org `
];
const randomTemplates = shuffleTemplates(templates);
export default class Share extends Component {
    state = {
        slideIndex: 0,
        totalSlides: randomTemplates.length,
        instance: null,
        data: randomTemplates,
        shareUrl: 'https://indiawantsbitcoin.org/',
        title: randomTemplates[0]
    }

    onSlideChange = () => {
        const index = this.state.instance.activeIndex;
        this.setState({
            slideIndex: index,
            title: this.state.data[index]
        });
    }

    onShareClick = (platform) => {
        reportWebVitals({
            eventCategory: 'Petition Website',
            eventAction: 'share clicked',
            eventLabel: platform
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
                <div className={styles.stepheading}>Well done!</div>
                <div className=" flex-row justify-between">
                    <div className={styles.heading}>
                        Help us spread the word
                    </div>
                    {/* <div className="hidden sm:flex flex-row">
                        <div className={`${styles.heading2} mr-4`}>
                            Choose a message template {this.state.slideIndex + 1}/{this.state.totalSlides}
                        </div>
                        <svg className={`h-6 w-6 ${this.state.slideIndex === 0 ? 'text-gray-300' : 'text-indigo-500'} share-prev`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg className={`h-6 w-6 ${this.state.slideIndex === this.state.totalSlides - 1 ? 'text-gray-300' : 'text-indigo-500'} share-next`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div> */}
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
                {/* <div className="sm:hidden flex flex-row justify-center" style={{ marginTop: '-8px' }}>
                    <svg className={`h-6 w-6 mr-8 ${this.state.slideIndex === 0 ? 'text-gray-300' : 'text-indigo-500'} share-prev`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg className={`h-6 w-6 ${this.state.slideIndex === this.state.totalSlides - 1 ? 'text-gray-300' : 'text-indigo-500'} share-next`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div> */}
                <div className="mt-8 flex flex-row justify-center">
                    <div className={styles.shareContainer}>
                        <div className={`${styles.shareText} sm:hidden block text-center mb-4`} style={{ marginRight: 0 }}>
                            Share Now
                        </div>
                        <div className={styles.shareContainer__inner}>
                            <div className={`${styles.shareText} hidden sm:block`}>
                                Share Now
                            </div>
                            <div className={styles.tweetWrapper} >
                                <a href="https://twitter.com/intent/tweet?button_hashtag=IndiaWantsBitcoin&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-size="large" data-text="I just emailed my local MP to support progressive crypto regulations for India.\n
                                Regulate, don’t ban #bitcoin.\n
                                Make your voice heard!👇\n
                                #IndiaWantsBitcoin www.indiawantsbitcoin.org " data-show-count="false">Tweet #IndiaWantsBitcoin</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </div>
                            <div className={styles.borderBetweenShare}></div>
                            <div className={styles.shaeOptionsWrapper}>
                                <FacebookShareButton
                                    url={this.state.shareUrl}
                                    quote={`${this.state.title} ${this.state.shareUrl}`}
                                    className="mr-4"
                                    id="share-button-facebook"
                                    beforeOnClick={() => this.onShareClick('Facebook')}
                                >
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>

                                <TwitterShareButton
                                    beforeOnClick={() => this.onShareClick('Twitter')}
                                    url={this.state.shareUrl}
                                    title={this.state.title}
                                    id="share-button-twitter"
                                    className="mr-4">
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>

                                <WhatsappShareButton
                                    beforeOnClick={() => this.onShareClick('Whatsapp')}
                                    url={this.state.shareUrl}
                                    title={this.state.title}
                                    id="share-button-whatsapp"
                                    className="mr-4">
                                    <WhatsappIcon size={32} round />
                                </WhatsappShareButton>

                                <TelegramShareButton
                                    beforeOnClick={() => this.onShareClick('Telegram')}
                                    url={this.state.shareUrl}
                                    id="share-button-telegram"
                                    title={`${this.state.title} ${this.state.shareUrl}`}
                                    className="mr-4">
                                    <TelegramIcon size={32} round />
                                </TelegramShareButton>

                                <RedditShareButton
                                    beforeOnClick={() => this.onShareClick('Reddit')}
                                    url={this.state.shareUrl}
                                    id="share-button-reddit"
                                    title={`${this.state.title} ${this.state.shareUrl}`}
                                >
                                    <RedditIcon size={32} round />
                                </RedditShareButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-gray-600 text-sm text-center mt-2">By sharing this post I accept the terms and Conditions</div>
            </div>
        )
    }
}
