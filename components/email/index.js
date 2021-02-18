import React, { Component } from 'react'
import Container from '../container';
import styles from './styles.module.scss';
import Select from '../Select';
import Subject from './subject';
import Message from './message';
import stateData from '../../pages/api/states.json';
import mpData from '../../pages/api/mp-data.json';
import messageData from './messages.json';
import SwiperCore, { Navigation, Controller } from 'swiper';
import { reportWebVitals } from '../../pages/_app';
import lscache from 'lscache';
import Recaptcha from 'react-recaptcha';
import { shuffleArray } from '../../pages/api/_utils';

SwiperCore.use([Navigation, Controller]);
const subjectTemplates = ["Appeal for positive regulation of the cryptocurrency market in India.", "Calling out for positive regulation of Cryptocurrencies for Atmanirbhar Bharat", "Requesting your support for positive regulation of Cryptocurrencies in India", "An appeal to positively re-evaluate the recent cryptocurrency prohibition bill in India.", "Petition email seeking your support for positive regulation of cryptocurrency market in India."];
export default class Email extends Component {
	messageList = shuffleArray(messageData);
	subjectList = shuffleArray(subjectTemplates);
	state = {
		indianStates: stateData,
		selectedState: '',
		cities: [],
		selectedCity: '',
		mps: [],
		subjectIndex: 0,
		totalSubjectSlides: 0,
		messageIndex: 0,
		totalMessageSlides: 0,
		subjectSwiper: null,
		messageSwiper: null,
		emails: '',
		subject: this.subjectList[0],
		body: `Dear Sir, \n ${this.messageList[0]}`,
		isCaptchaSuccessful: false,
		messageTemplates: this.messageList,
		carbonCopy: 'hpcapresident@yahoo.com,mphamirpur@gmail.com,mosfinance@nic.in,anuragthakur.mp@sansad.nic.in'
	}

	onCaptchaInit = () => {
		/** On Captcha Init */
	}

	verifyCallback = (response) => {
		this.setState({ isCaptchaSuccessful: true })
	}

	expiredCallback = (response) => {
		this.setState({ isCaptchaSuccessful: false })
	}

	onStateSelection = (state) => {
		const selectedState = state.value;
		let cities = [];
		for (const city of mpData) {
			if (city.state.toLowerCase().includes(selectedState.toLowerCase())) {
				cities.push(city.district);
			}
		}
		this.setState({
			cities,
			selectedState
		});
	}
	onCitySelection = (city) => {
		const selectedCity = city.value;
		const mps = mpData.filter(e => e.district.includes(selectedCity));
		const messageTemplates = this.messageList.map(str => str.replaceAll('{{district}}', selectedCity));
		this.setState({
			mps,
			selectedCity,
			messageTemplates
		}, () => {
			this.renderEmails();
			this.createEmailContent();
		});
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
		}, this.createEmailContent);
	}

	handleEmailSend = () => {
		reportWebVitals({
			eventCategory: 'Petition Website',
			eventAction: 'email clicked',
			eventLabel: 'Send Email'
		});
		if (typeof this.props.onSuccess === 'function') {
			lscache.set('hasSentEmail', true);
			this.props.onSuccess(true);
		}
	}

	createEmailContent = () => {
		const mp = this.state.mps.length === 1 ? this.state.mps[0] : null
		const salutation = mp ? mp.name.split(',').reverse().join(' ') : 'Sir/Madam'
		this.setState({
			body: `Dear ${salutation}, \n ${this.state.messageTemplates[this.state.messageIndex]}`
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
			<div className={`${styles.parent} container mx-auto shadow-md`}>
				<div className={styles.stepheadingWrapper}>
					<div className={styles.leftStepheadingWrapper}>
						<div className={styles.stepheading}>Here's what you need to do:</div>
						<div className={styles.heading}>
							Email Your Member Of Parliament To Support Crypto
						</div>
						<div className="flex flex-col mt-4">
							<Select className={styles.inputFeild} label="Select State" identifier="state" data={this.state.indianStates} handleSelectionChange={this.onStateSelection} containerStyle={{ marginRight: 16 }} />
							<Select className={styles.inputFeild} label="Select District" identifier="state" data={this.state.cities} handleSelectionChange={this.onCitySelection} />
						</div>
					</div>
					<div className={styles.rightStepheadingWrapper}>
						<span>Here's why this is important</span>
						<iframe src="https://www.youtube.com/embed/p3ogKnPffVY"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>
					
				</div>
				{Array.isArray(this.state.mps) && this.state.mps.length > 0 && <div className="my-8">
					<div>
						<div className={styles.heading2}>
							TO
						</div>
						<div className="flex flex-row flex-wrap my-4">
							{this.state.mps.map((mp, i) => (
								<div className={styles.pill} key={i}>{mp.name}</div>
							))}
						</div>
					</div>
					<div className="mt-8"></div>
					<Subject
						data={this.subjectList}
						instance={this.subjectSwiper}
						subjectIndex={this.state.subjectIndex}
						totalSubjectSlides={this.state.totalSubjectSlides}
						onSubjectSlideChange={this.onSubjectSlideChange}
						onSubjectSwiperInit={this.onSubjectSwiperInit} />
					<div className="mt-8"></div>
					<Message
						data={this.state.messageTemplates}
						districtMp={this.state.mps.length === 1 ? this.state.mps[0] : null}
						districtName={this.state.selectedCity}
						instance={this.messageSwiper}
						messageIndex={this.state.messageIndex}
						totalMessageSlides={this.state.totalMessageSlides}
						onMessageSlideChange={this.onMessageSlideChange}
						onMessageSwiperInit={this.onMessageSwiperInit} />
					{this.state.emails.length > 0 &&
						<>
							<div className="flex flex-row justify-center" style={{ marginBottom: '-16px', marginTop: '16px' }}>
								<Recaptcha
									sitekey="6Lc8QEgaAAAAACZOvvc4STv0Jqs1fWPR2RRX4rDU"
									render="explicit"
									onloadCallback={this.onCaptchaInit}
									verifyCallback={this.verifyCallback}
									expiredCallback={this.expiredCallback}
								/>
							</div>
							<div className="mx-8 flex flex-row justify-center mt-8">
								{this.state.isCaptchaSuccessful ?
									<a href={`mailto:${this.state.emails}?cc=${this.state.carbonCopy}&subject=${encodeURI(this.state.subject)}&body=${encodeURI(this.state.body)}`} onClick={this.handleEmailSend} id="send-email-button">
										<button className={styles.cta}>SEND AN EMAIL</button>
									</a>
									:
									<button className={`${styles.cta} ${styles['cta--disabled']}`}>SEND AN EMAIL</button>
								}
							</div>
							<div className="text-gray-600 text-sm text-center mt-2">By sending this email I accept the terms and Conditions</div>
						</>
					}
				</div>}
			</div>
		)
	}
}
