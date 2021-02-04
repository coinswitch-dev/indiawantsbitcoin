import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
export default function Subject(props) {
    return (
        <div className="mt-4">
            <div className="flex flex-row justify-between">
                <div className={styles.heading2}>
                    Subject
                </div>
                <div className="hidden sm:flex flex-row">
                    <div className={`${styles.heading2} mr-4`}>
                        Choose a subject template {props.subjectIndex + 1}/{props.totalSubjectSlides}
                    </div>
                    <svg className={`h-6 w-6 ${props.subjectIndex === 0 ? 'text-gray-300' : 'text-indigo-500'} subject-prev`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg className={`h-6 w-6 ${props.subjectIndex === props.totalSubjectSlides - 1 ? 'text-gray-300' : 'text-indigo-500'} subject-next`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                onSlideChange={props.onSubjectSlideChange}
                onSwiper={(swiper) => props.onSubjectSwiperInit(swiper)}
                controller={{ control: props.instance }}
                navigation={{
                    nextEl: ".subject-next",
                    prevEl: ".subject-prev",
                }}
                className="my-4"
            >
                {Array.isArray(props.data) && props.data.map(e => (
                    <SwiperSlide className={styles.swiperCard} key={e}>
                        <div className={styles.swiperText}>
                            {e}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="sm:hidden flex flex-row justify-center" style={{ marginTop: '-8px' }}>
                <svg className={`h-6 w-6 mr-8 ${props.subjectIndex === 0 ? 'text-gray-300' : 'text-indigo-500'} subject-prev`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <svg className={`h-6 w-6 ${props.subjectIndex === props.totalSubjectSlides - 1 ? 'text-gray-300' : 'text-indigo-500'} subject-next`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    )
}