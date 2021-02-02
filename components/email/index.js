import React, { Component } from 'react'
import Container from '../container';
import styles from './styles.module.scss';
import Select from '../Select';
import Subject from './subject';
import Message from './message';
import stateData from '../../pages/api/states.json';
import mpData from '../../pages/api/mp-data.json';
import messageTemplates from './messages.json';
import SwiperCore, { Navigation, Controller } from 'swiper';
SwiperCore.use([Navigation, Controller]);

export default class Email extends Component {
	messageList = messageTemplates
	subjectList = ["Appeal for positive regulation of the cryptocurrency market in India.", "Petition email seeking your support for positive regulation of cryptocurrency market in India.", "Reaching out for your support to call for positive regulation of Cryptocurrencies for an Atmanirbhar Bharat", "Requesting your support for positive regulation of Cryptocurrencies in India", "An appeal to positively re-evaluate the recent cryptocurrency prohibition bill in India."]

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
		subject: this.subjectList[0],
		body: `Dear Sir, \n ${this.messageList[0]}`
	}

	onStateSelection = (state) => {
		const selectedState = state.value;
		let cities = [];
		for (const city of mpData) {
			if (city.state.toLowerCase().includes(selectedState.toLowerCase())) {
				cities.push(city.district);
			}
		}
		this.setState({ cities });
	}
	onCitySelection = (selectedCity) => {
		const mps = mpData.filter(e => e.district.includes(selectedCity.value));
		console.log(mps.length);
		this.setState({ mps }, () => {
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

	createEmailContent = () => {
		const mp = this.state.mps.length === 1 ? this.state.mps[0] : null
		const salutation = mp ? mp.name.split(',').reverse().join(' ') : 'Sir/Madam'
		this.setState({
			body: `Dear ${salutation}, \n ${this.messageList[this.state.messageIndex]}`
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
				<div className={styles.stepheading}>Step 1/2</div>
				<div className={styles.heading}>
					Email your MP’s to consider regulating crypto
				</div>
				<div className="flex flex-col md:flex-row mt-4">
					<Select label="Select State" identifier="state" data={this.state.indianStates} handleSelectionChange={this.onStateSelection} containerStyle={{ marginRight: 16 }} />
					<Select label="Select District" identifier="state" data={this.state.cities} handleSelectionChange={this.onCitySelection} />
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
						data={this.messageList}
						districtMp={this.state.mps.length === 1 ? this.state.mps[0] : null}
						instance={this.messageSwiper}
						messageIndex={this.state.messageIndex}
						totalMessageSlides={this.state.totalMessageSlides}
						onMessageSlideChange={this.onMessageSlideChange}
						onMessageSwiperInit={this.onMessageSwiperInit} />
					{this.state.emails.length > 0 &&
						<div className="mx-8 flex flex-row justify-center mt-8">
							<a href={`mailto:${this.state.emails}?&subject=${encodeURI(this.state.subject)}&body=${encodeURI(this.state.body)}`}>
								<button className={styles.cta}>SEND AN EMAIL</button>
							</a>
						</div>
					}
				</div>}
			</div>
		)
	}
}
