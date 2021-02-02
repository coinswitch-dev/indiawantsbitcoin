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

    messageList = ["\nI hope this email finds you in good health and spirits. \n\nI have come to write this email after knowing that the Government has decided to introduce 'The Cryptocurrency and Regulation of Official Digital Currency Bill, 2021'. \n\nFirstly, I would like to express my delight that the Parliament has taken a step forward to recognize and regulate cryptocurrencies in India. However, this delight is little diluted as the said Bill would prohibit the usage of private cryptocurrencies in India.\n\nWhile creating an official crypto-currency for India is a boon to the economy, I am concerned about the repercussions that India's cryptocurrency market would face if usage, among other things relating to private cryptocurrencies is barred. \n\nThe Honourable Supreme Court of India, in March 2020, allowed the usage of cryptocurrencies by lifting the ban imposed by the RBI in 2018. We have since then seen the cryptosphere of India grow multifold. \n\nThere are around 10-20 million cryptocurrency users in the country. And more than 340 startups catering to their needs relating to cryptocurrency. These startups employ more than 50,000 employees directly or indirectly and bring in millions of dollars in Venture Capital funding. \n\nBut, if the Parliament passes this Bill and, consequently, prohibits private cryptocurrencies in India- a young but thriving industry would be suppressed. Not only that, India would be the only large economy to not allow private cryptocurrencies, and would thereby get left behind for years to come in the global space of blockchain and cryptocurrencies.\n\nI am concerned that we might lose out on an excellent opportunity for the development of a new digital India which is self-reliant as well as in line with our Prime Minister’s vision for India.\n\nThough I understand that there is a possibility of tax evasion, scams, and other white-collar crimes increasing with the development of decentralized cryptocurrencies. I am also confident that India's Government would find out a win-win solution by engaging with crypto community stakeholders to avoid such mishappenings, as it did with the advent of the software era in India.\n\nTherefore, I implore your support to call out in the government for positive and progressive regulation of cryptocurrencies. \n\nWarm Regards","\nI want to thank you for your services to society as a public representative in Parliament.\n\nI am writing this letter to draw your attention to the 'The Cryptocurrency and Regulation of Official Digital Currency Bill, 2021' that the Government intends to introduce in the Lok Sabha. \n\nWe do not have access to the entire bill yet, but the said bill implies prohibiting all private cryptocurrencies with some exceptions to promote the underlying technology of cryptocurrency and its uses.\n\nThough I am thrilled at this first-ever regulatory stance of crypto markets in India, but the expression of prohibiting the usage of private cryptocurrencies distresses me. \n\nIf private cryptocurrencies were to be banned from use in India, we might face serious repercussions. Especially, considering that there is wholehearted acceptance of crypto in the rest of the world. \n\nIn India, the crypto industry witnessed a massive boom after the Supreme Court of India, in March 2020, lifted the ban imposed on financial organizations from facilitating cryptocurrency-related transactions.\n\nSince then, over 20 million Indian citizens have trusted the crypto market by investing their hard-earned money in cryptocurrencies. Several startups have been funded by renowned venture capitalists that facilitate such investments for retail investors such as myself. \n\nSuppose this Bill is passed against the usage of private cryptocurrencies. Not only 340+ startups will be affected, but 50,000+ direct and indirect employees of such startups and 20 million investors will be adversely impacted. \n\nCrypto investors like me do understand the serious challenges posed by decentralized currencies to our nation. However, such challenges are nothing compared to the advent of the internet in our country. As a nation, we took a proactive approach then and are now a software and IT superpower in the world. Similarly, I am confident that the Government of India will stay vigilant and avoid any mishappenings. \n\nA Win-win discussion with the Government to work on a solution that works towards the common good of all Indians is the best approach, I feel. I am convinced that blockchain technology and cryptocurrencies will be an integral part of our journey towards our Prime Minister's self-reliant India' and the dream of achieving a $5 Trillion digital economy by 2024. \n\nOn behalf of all crypto investors, I make a humble request that you consider the interests of all and take a progressive stance towards the Bill, which would otherwise set us back as a nation in digitization and growth for years to come.\n\nYour Voter Sincerely","\nI want to start by saying that this is the first time I have felt the urge to write to you. \n\nThank you for being my representative in the government and for all the work you have been doing for the public good.\n\nBut I am discouraged by the Government of India's recent news which states bringing a bill in the Loksabha to prohibit all private cryptocurrencies in India. The Cryptocurrency and Regulation of Official Digital Currency Bill, 2021, though yet not released publicly, entails that RBI is planning to:\n1. Create its own cryptocurrency.\n2. Prohibit all private cryptocurrencies with some exceptions to promote the underlying technology of cryptocurrency and its uses.\n\n\nHowever, creating an official digital currency is an excellent step towards further digitization of the Indian economy but prohibiting or banning all private cryptocurrencies, if implemented, will be a regressive step for India when the rest of the world is embracing them.\n\nIndia’s crypto market and nascent stage crypto start-ups have just started booming in India after March 2020, when the Supreme Court of India curbed the banking ban related to crypto services in India for individual entities and companies.\n\nSince then, India’s cryptosphere is a thriving ground of:\n1. 10-20 million active crypto users\n2. 340+ crypto start-ups offering crypto products and services.\n3. 50,000+ direct & indirect employment or work \n4. Millions of dollars in Venture Capital funding\n\nIf this bill is passed and cryptocurrencies are banned, then all these users and crypto start-ups will be left rolled over. India will be left behind in the crypto and blockchain technology space, and intellectual Indians will be forced to be brain drained from India for conducive regulations.\n\nHowever, crypto users like me and all the crypto start-ups in India acknowledge and empathize with the government on the challenges these decentralized cryptocurrencies pose, including tax evasion, scams, money laundering, etc. But such challenging questions were posed in front of India at the advent of computers and the Internet in India, but the progressive stance of the Indian Government at that time has made India the software & IT superpower it is today.\n\nBut I am sure that the Indian crypto community comprising of its users and service providers, would be more than excited and willing to discuss with the stakeholders in the government to come up with a solution where everyone wins. \n\nLastly, I highly believe that creating this win-win situation will put India on the driving seat in the global blockchain and crypto space, thereby not only contribute significantly to the Prime Minister’s goal and vision of 'self-reliant India' (Atmanirbhar Bharat) but will give birth to a thriving Digital Indian Economy of $5 Trillion by 2024.\n\nThat’s why as the representative of the citizens, we need your help in advocating for progressive regulation of cryptocurrencies. An actual ban would mean the destruction of this small but thriving industry and take India years behind on a global scale. compared to its peer countries like the US, China, etc \n\nYour Voter Sincerely","\nFirstly, thank you for your honest representation of the public in Parliament. I am grateful for all your work towards society. \n\nI would like to highlight my concerns and suggestions regarding the impending Crypto Bill. I am given to understand that the Government is planning to introduce the Cryptocurrency and Regulation of Official Digital Currency Bill, 2021 and will be bringing forth the following measures:\n1. Our country’s digital currency\n2. Plans to prohibit the usage of private cryptocurrencies to a certain extent. \n\nIt excites me to know that the Government will be taking a step in regulating the crypto market. I believe that creating and launching an RBI issued digital currency will accelerate the Prime Minister’s vision of a Digital India.\n\nHowever, I am concerned that the prohibition of private cryptocurrencies might stun the growth of Digital India. While all other countries are embracing cryptocurrencies, it would be regressive for India to be deprived of such once in a generation opportunity that has the potential to seriously contribute to the goal of a $5 Trillion GDP economy.\n\nNot only this, but it will also affect the 50,000+ direct and indirect employees who are tied to the 340+ crypto startups that operate in India. Above all, the 20 million citizens who have invested in crypto will take a hit, and with it the millions of dollars that have flown into the industry. \n\nCryptocurrencies being a decentralized space may several pose challenges to the government such as money laundering or other illicit activities like tax evasion. As a responsible citizen and crypto user, I understand and empathize with government. But, it is also true that tech is empowering and we humans need to stay ahead of such challenges to achieve greatness.\n\nIf the bill gets approval in the parliament, it will just be a disheartening moment for people like myself who believe in the power of cryptocurrency. The crypto community entailing people such as myself, and organizations/ service providers would be more than happy to explore solutions in the best interest of both the parties with the Government.\n\nTo end my note here, I humbly ask for your support to appeal to the parliament and urge it to consider the crypto space’s favorable regulations. \n\nThanks and Regards","\nBefore all else, I would like to express my gratitude for your selfless service to your constituency members. \n\nTrusting that you will understand my stance here, I am writing this letter to discuss the recently proposed bill:  Cryptocurrency and Regulation of Official Digital Currency Bill, 2021.\n\nI understand that the government intends to create a digital currency while seeking to prohibit private cryptocurrencies with certain exceptions through this Bill.\n\nThough the move to create a digital currency looks promising as other countries are also in the process of doing the same, it distresses me to know that other private cryptocurrencies are proposed to be banned.\n\nAs an active follower of cryptocurrency, I have closely watched the Indian Cryptosphere grow a manifold over the past few years. The banking-ban waiver of 2020 brought about new hope for investors like me, leading to thousands of new crypto entrants into the sphere. Several startups offering crypto services and products also relaunched their operations in India, leading to Millions of dollars in VC funding into our country. \n\nWith cryptocurrency now at the forefront of becoming a mainstream asset class, the prohibition of its usage may impact a large number of individuals and organizations such as:\n1. 20 million citizens who are invested in cryptocurrencies.\n2. 340+ cryptocurrency startups and service providers \n3. 50,000+ direct and indirect employees \n\nAlong with the crypto community, I understand and commune the challenges that the government may face with full-scale crypto adoption. But, I would urge you to look back to threats that came with the advent of the internet and how our nation braved it to become one of the strongest IT players today. I am confident that the Government of India will take the necessary measures to create a win-win situation for everyone involved in crypto thereby contributing to the vision of Digital India and Atmanirbhar Bharat by 2030.\n\nOpen discussion with the Government before the Bill is passed is very important, I feel. With this, I request you to look into this matter and represent my opinion in the parliament for positive and progressive regulation of the cryptocurrency market in India\n\nWarm Regards"]

    subjectList = ["Appeal for positive regulation of the cryptocurrency market in India.", "Petition email seeking your support for positive regulation of cryptocurrency market in India.", "Reaching out for your support to call for positive regulation of Cryptocurrencies for an Atmanirbhar Bharat", "Requesting your support for positive regulation of Cryptocurrencies in India", "An appeal to positively re-evaluate the recent cryptocurrency prohibition bill in India."]


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
