import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
export default function Message(props) {
    return (
        <div className="mt-4">
            <div className="flex flex-row justify-between">
                <div className={styles.heading2}>
                    Message
                </div>
                <div className="flex flex-row">
                    <div className={`${styles.heading2} mr-4`}>
                        Choose a subject template {props.messageIndex + 1}/{props.totalMessageSlides}
                    </div>
                    <svg className={`h-6 w-6 ${props.messageIndex === 0 ? 'text-gray-300' : 'text-indigo-500'} message-prev`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg className={`h-6 w-6 ${props.messageIndex === props.totalMessageSlides - 1 ? 'text-gray-300' : 'text-indigo-500'} message-next`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                onSlideChange={props.onMessageSlideChange}
                onSwiper={(swiper) => props.onMessageSwiperInit(swiper)}
                controller={{ control: props.instance }}
                navigation={{
                    nextEl: ".message-next",
                    prevEl: ".message-prev",
                }}
                className="my-4"
            >
                {Array.isArray(props.data) && props.data.map(e => (
                    <SwiperSlide className={styles.swiperCard} key={e}>
                        <div className={styles.swiperText}>
                            Dear Sir,
                        </div>
                        <br />
                        {e.split('\n').map((str, index) => <div className={styles.swiperText} key={index}>{str}</div>)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}