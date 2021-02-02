import React, { Component } from 'react'
import Container from '../container';
import styles from './styles.module.scss';
import Select from '../Select';
import Subject from './subject';
import Message from './message';
import cityData from '../../pages/api/indian-cities.json';
import stateData from '../../pages/api/states.json';
import mpData from '../../pages/api/mp-data.json';
import SwiperCore, { Navigation, Controller } from 'swiper';
SwiperCore.use([Navigation, Controller]);

export class Email extends Component {
    state = {
        indianStates: stateData,
        selectedState: '',
        cities: [],
        selectedCity: [],
        mps: [],
        subjectIndex: 0,
        totalSubjectSlides: 0,
        messageIndex: 0,
        totalMessageSlides: 0,
        subjectSwiper: null,
        messageSwiper: null,
        emails: '',
        subject: '',
        body: ''
    }

    messageList = ['Any time a country transitioned to a fiat currency, they collapsed. That’s just world history; you don’t have to know about cryptocurrency to know that', 'Bitcoin will do to banks what email did to the postal industry', 'Bitcoin is a technological tour de force.', 'Well, I think it is working. There may be other currencies like it that may be even better. But in the meantime, there’s a big industry around Bitcoin— People have made fortunes off Bitcoin, some have lost money. It is volatile, but people make money off of volatility too.']
    subjectList = ['India wants cryptocurrency', 'India for crypto', 'India for decentralisation']


    onStateSelection = (state) => {
        const selectedState = state.value;
        let cities = [];
        for (const city of cityData) {
            if (city.state.toLowerCase().includes(selectedState.toLowerCase())) {
                cities.push(city.name);
            }
        }
        this.setState({ cities });
    }
    onCitySelection = (selectedCity) => {
        const mps = mpData.filter(e => e.district.includes(selectedCity.value));
        console.log(mps.length);
        this.setState({ mps }, this.renderEmails);
    }

    onSubjectSlideChange = () => {
        const index = this.subjectSwiper.activeIndex
        this.setState({
            subjectIndex: index,
            subject: this.subjectList[index]
        });
    }

    onSubjectSwiperInit = (subjectSwiper) => {
        this.subjectSwiper = subjectSwiper;
        this.setState({ totalSubjectSlides: this.subjectSwiper.slidesSizesGrid.length });
    }

    onMessageSwiperInit = (messageSwiper) => {
        this.messageSwiper = messageSwiper;
        this.setState({ totalMessageSlides: this.messageSwiper.slidesSizesGrid.length });
    }

    onMessageSlideChange = () => {
        const index = this.messageSwiper.activeIndex
        this.setState({
            messageIndex: index,
            body: `Dear Sir, \n ${this.messageList[index]}`
        });
    }

    renderEmails = () => {
        let emailList = [];
        for (const mp of this.state.mps) {
            emailList.push(mp.email.toString());
        }
        const emails = emailList.toString();
        this.setState({ emails })
    }

    render() {
        return (
            <div className={styles.parent}>
                <Container>
                    <div className={styles.heading}>
                        Email your MP’s to consider regulating crypto
                    </div>
                    <div className="flex flex-col md:flex-row mt-4">
                        <Select identifier="state" data={this.state.indianStates} handleSelectionChange={this.onStateSelection} containerStyle={{ marginRight: 16 }} />
                        <Select identifier="state" data={this.state.cities} handleSelectionChange={this.onCitySelection} />
                    </div>
                    {Array.isArray(this.state.mps) && this.state.mps.length > 0 && <div className="my-8">
                        <div>
                            <div className={styles.heading2}>
                                TO
                            </div>
                            <div className="flex flex-row my-4">
                                {this.state.mps.map((mp, i) => (
                                    <div className={styles.pill} key={i}>{mp.name}</div>
                                ))}
                            </div>
                        </div>
                        <Subject
                            data={this.subjectList}
                            instance={this.subjectSwiper}
                            subjectIndex={this.state.subjectIndex}
                            totalSubjectSlides={this.state.totalSubjectSlides}
                            onSubjectSlideChange={this.onSubjectSlideChange}
                            onSubjectSwiperInit={this.onSubjectSwiperInit} />
                        <Message
                            data={this.messageList}
                            instance={this.messageSwiper}
                            messageIndex={this.state.messageIndex}
                            totalMessageSlides={this.state.totalMessageSlides}
                            onMessageSlideChange={this.onMessageSlideChange}
                            onMessageSwiperInit={this.onMessageSwiperInit} />
                        {this.state.emails.length > 0 && <div className="mx-8 flex flex-row justify-center mt-16">
                            <a href={`mailto:${this.state.emails}?&subject=${encodeURI(this.state.subject)}&body=${encodeURI(this.state.body)}`}>
                                <button className={styles.cta}>SEND AN EMAIL</button>
                            </a>
                        </div>}
                    </div>}
                </Container>
            </div>
        )
    }
}

export default Email
