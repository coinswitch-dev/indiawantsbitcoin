import React from 'react';
import ReactSelect from 'react-select';
import Link from 'next/link'
import styles from './styles.module.scss';

export default class Privacy extends React.Component {

    render() {
        return (
            <div className={styles.privacyPage}>
              <div className={styles.privacyContainer}>
                <div className={styles.heading}>Privacy Policy</div>
                  <div className={styles.content}>
                    <p>
                      The Website – <Link href="/"><a className={styles.link}>https:&#8725;&#8725;indiawantsbitcoin.org/</a></Link> (<b>“Website”</b>) is owned and operated by BitCipher Labs LLP (<b>“We”</b>, <b>“Us”</b>, <b>“Company”</b> or <b>“Our”</b>, which expression shall mean and include its affiliates, successors and assigns). We are committed to protecting and respecting Your privacy.
                    </p>
                    <p>
                      THIS POLICY DESCRIBES OUR POLICIES AND PROCEDURES FOR COLLECTION, USE, STORAGE, DISCLOSURE AND PROTECTION OF ANY PERSONAL INFORMATION, INCLUDING, BUT NOT LIMITED TO, BUSINESS OR PERSONAL INFORMATION PROVIDED BY YOU (<b>“YOU/R”</b>) WHILE USING THE WEBSITE.
                    </p>
                    <p>
                      THIS POLICY CONSTITUTES A LEGAL AGREEMENT BETWEEN YOU, AS THE USER OF THE WEBSITE, AND US, AS THE OWNER OF THE WEBSITE.  <b>BY VOLUNTARILY PROVIDING US WITH PERSONAL INFORMATION, YOU ARE CONSENTING TO OUR USE OF IT IN ACCORDANCE WITH THIS POLICY. BY MERE VISITING/ ACCESSING THE WEBSITE, YOU EXPRESSLY CONSENT TO COMPANY’S USE AND DISCLOSURE OF YOUR PERSONAL INFORMATION IN ACCORDANCE WITH THIS PRIVACY POLICY. </b> THIS POLICY DOES NOT APPLY TO THIRD-PARTY WEBSITES THAT ARE CONNECTED VIA LINKS TO THE WEBSITE. IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS POLICY, PLEASE DO NOT PROCEED FURTHER TO USE/ ACCESS THIS WEBSITE. ALSO, IN THE ABSENCE OF AN ACCEPTANCE OF THE POLICY BY YOU, WE WILL NOT BE ABLE TO PROVIDE THE SERVICES TO YOU.
                    </p>
                    <p>
                      YOUR USE OF THE WEBSITE WILL BE GOVERNED BY THIS POLICY IN ADDITION TO THE TERMS OF USE AS APPLICABLE TO YOU.
                    </p>
                    <p>
                      THIS POLICY HAS BEEN DRAFTED IN ACCORDANCE WITH THE INFORMATION TECHNOLOGY ACT, 2000 AND THE DATA PROTECTION RULES AND REGULATIONS OF INDIA.
                    </p>
                    <ol>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Information Collected</div>
                        <p className={styles.listDesc}>
                          We will use the information provided by You only in accordance with the purposes described in the Policy.
                        </p>
                        <p className={styles.listDesc}>
                          We collect Your Personal Information or Non-Personal Information (as hereinafter defined) when use the Website and at the time of Your registration with the Website. Further, We collect information from You during the performance of Services for You. We collect information with respect to Your name, email, address, IP Address and zip code, Your location, device ID, Device location. We collect all of the foregoing information in order to provide You the services.
                        </p>
                        <p className={styles.listDesc}>
                          Except as provided herein, We do not solicit any Sensitive Information about You. However, if You share such information with Us voluntarily, We will not be liable for any actions, claims, costs, expenses or other liabilities that may arise as a consequence of any unauthorized use or misuse of such information.
                        </p>
                        <p className={styles.listDesc}>
                          During Your use of the Website, We may collect and process such information from You, including but not limited to the below mentioned:
                        </p>
                        <ol type="a"  className={styles.listDesc}>
                          <li className={styles.listDesc}>
                            <div className={styles.listDesc}>Personal Information: </div>
                            <p className={styles.listDesc}>
                              <b>“Personal Information”</b> means and includes:
                            </p>
                            <ol type="i"  className={styles.listDesc}>
                              <li>
                                <p className={styles.listDesc}>
                                  Information that You provide to Us by filling in forms on the Website. This may include contact information such as name, email address, mailing address, phone number; 
                                </p>
                              </li>
                              <li>
                                <p className={styles.listDesc}>
                                  Information that You voluntarily provide when You write directly to Us (including by e-mail and surveys);
                                </p>
                              </li>
                              <li>
                                <p className={styles.listDesc}>
                                  Information that You specifically provide Us access to while accepting the Terms and Conditions of use of the Website.
                                </p>
                              </li>
                            </ol>
                          </li>
                          <li className={styles.listDesc}>
                            <div className={styles.listDesc}>Non- Personal Information: </div>
                            <p className={styles.listDesc}>
                              <b>“Non-Personal Information”</b> means and includes any information that does not reveal Your specific identity, such as, browser information, information collected through Cookies (as defined below), pixel tags and other technologies, demographic information etc. Our Website gathers some information automatically when You visit the Website and stores it in log files. We may collect certain information about Your computer or other electronic device through which You have accessed the Website to facilitate, evaluate and verify Your use of the Website.
                            </p>
                            <p className={styles.listDesc}>
                              <b>“Cookies”</b> are small files that reside on Your computer's hard drive and generally contain an anonymous unique identifier and are accessible only by the Website that placed them there and not any other sites. You may refuse to accept Cookies by activating the setting on Your browser which allows You to refuse the setting of Cookies. However, if You select this setting You may be unable to access certain parts of the Website. Unless You have adjusted Your browser setting so that it will refuse Cookies, Our system may issue Cookies when You log on to the Website. The use of Cookies by Our partners, affiliates, advertisers or service providers is not covered by the Policy. 
                            </p>
                          </li>
                        </ol>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Use of the Information</div>
                        <p className={styles.listDesc}>
                          We may use the information provided by You in the following ways, viz:
                        </p>
                        <ol type="a"  className={styles.listDesc}>
                          <li className={styles.listDesc}>
                            Provide and improve the services offered to You through the Website;
                          </li>
                          <li className={styles.listDesc}>
                            conduct research and analysis to detect, prevent, mitigate and investigate fraudulent or illegal activities;
                          </li>
                          <li className={styles.listDesc}>
                            analyse how the Website is used, diagnose service or technical problems, maintain security;
                          </li>
                          <li className={styles.listDesc}>
                            to help You efficiently use and access the Website;
                          </li>
                          <li className={styles.listDesc}>
                            monitor aggregate metrics such as total number of viewers, visitors, traffic, and demographic patterns;
                          </li>
                          <li className={styles.listDesc}>
                            to enable Us to comply with legal and regulatory obligations;
                          </li>
                        </ol>
                        <p className={styles.listDesc}>
                          We will use and retain Your information for such periods as necessary to comply with Our legal obligations, resolve disputes, record keeping and enforce Our agreements.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Storage, Security and Disclosure of Information</div>
                          <p className={styles.listDesc}>
                            We use reasonable safeguards to preserve the integrity and security of Your information against loss, theft, unauthorised access, disclosure, reproduction, use or amendment. All information You provide to Us is stored on Our secure servers within India.
                          </p>
                          <p className={styles.listDesc}>
                            By submitting Your information on Our Website, you agree to the handling of Your information by the Company in a manner as stated under this Policy. We will take such steps as We consider reasonably necessary to ensure that Your information is treated securely and in accordance with the Policy.
                          </p>
                          <p className={styles.listDesc}>
                            We assume no liability for any disclosure of information due to errors in transmission, unauthorised third party access or other acts of third parties, or acts or omissions beyond Our reasonable control and You agree that You will not hold Us responsible for any breach of security unless such breach has been caused as a direct result of Our gross negligence or wilful default.
                          </p>
                          <p className={styles.listDesc}>
                            In using the Website, you accept the inherent security implications of data transmission over the internet and the world wide web cannot always be guaranteed as completely secure. Therefore, your use of the Website will be at Your own risk.
                          </p>
                          <p className={styles.listDesc}>
                            We may disclose such information to third parties in order to provide You with customer support facilities, to comply with Our legal obligations, to enforce Our Terms of Use, to facilitate Our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to the Website and to avail services from third parties for data analysis and market research.
                          </p>
                          <p className={styles.listDesc}>
                            In the event the Company is merged with or acquired by another company or in case of re-organization or re-structuring of business, We and Our affiliates will share Your Personal Information, wholly or in part, with another business entity.
                          </p>
                          <p className={styles.listDesc}>
                            We will share Your information with third parties only in such manner as described below: 
                          </p>
                          <ol type="a"  className={styles.listDesc}>
                            <li className={styles.listDesc}>
                              We may share Your information with third parties including third party service providers/agents/partners, etc. and in such an event, the third parties’ use of Your information will be bound, among other things, by the Policy. We may store information in locations outside the direct control of the Company (for instance, on servers or databases co-located with hosting providers) and Your use of the Website shall constitute consent for the same.
                            </li>
                            <li className={styles.listDesc}>
                              We may disclose Your information, to any member of Our related or group companies including but not limited to, our subsidiaries, Our ultimate holding company and its subsidiaries, as the case may be, and Your use of the Website shall constitute consent for the same.
                            </li>
                            <li className={styles.listDesc}>
                              We may disclose Your information if We are under a duty to do so in order to comply with any legal obligation or an order from the government and/or a statutory authority, or in order to enforce or apply Our Terms of Use or assign such information in the course of corporate divestitures, mergers, or to protect the rights, property, or safety of Us, Our users, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.
                            </li>
                          </ol>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Use of Information</div>
                        <p className={styles.listDesc}>
                          By the use of the Website, you will be able to see the service offered by Us. You may have interest or intention of availing such services or a general query with respect to the services available on the Website and through the Website. Accordingly, you may contact us. By contacting Us in anyway and by providing us your phone number and contact details, you thereby give Us the unequivocal right to:
                        </p>
                        <ol type="a"  className={styles.listDesc}>
                          <li className={styles.listDesc}>
                            Contact you through various mediums, including but not limited to phone calls, emails, etc. or make a phone call to You to discuss your query or request;
                          </li>
                          <li className={styles.listDesc}>
                            Contact you through phone or message notwithstanding the fact that You may have registered under the Telecom Regulatory Authority of India regulations as a fully blocked or a partially blocked customer. It is further clarified that We shall only make solicited phone calls or messages;
                          </li>
                          <li className={styles.listDesc}>
                            Share the contact details provided by You with the service provider or agent or representative available on or through the Website who may be in a position to sufficiently answer or respond to Your query, including but not limited to third party service providers.
                          </li>
                        </ol>
                        <p className={styles.listDesc}>
                          The Website and the other service provides/affiliates/agents on the Website shall only use the information provided by You above, for the purpose of ensuring complete provision of services to You and for the purpose of appropriately responding to Your query/question/request/concern.
                        </p>
                        <p className={styles.listDesc}>
                          We understand that Your contact details are important to You, and We shall bind the service providers/agents/affiliates that We share Your contact details with, with the same level of protection as required under the applicable laws.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Non-Disclosure of Information</div>
                        <p className={styles.listDesc}>
                          You may choose not to provide identifiable information through the Website, in which case You may not be allowed to access certain features / parts of the Website. If You are a registered user, you may update, edit or correct Your account information and email preferences at any time by logging in to Your account. If You believe that any of Your information held by Us is inaccurate, you may write to Us at
                          <a href="mailto:support@indiawantsbitcoin.org" className={styles.link}> support@indiawantsbitcoin.org</a> We will respond to Your request within a period of 30 days. It is Your responsibility to ensure that any information You provide Us remains accurate and updated.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Links to Third Party Sites</div>
                        <p className={styles.listDesc}>
                          Our Website may contain links to and from the Websites of Our partner networks, affiliates and other third parties. The inclusion of a link does not imply any endorsement by Us of the third party Website, the Website's provider, or the information on the third party Website. If You follow a link to any of these Websites, please note that these Websites may be governed by their own privacy policies and We disclaim all responsibility or liability with respect to these policies or the Websites. Please check these policies and the terms of the Websites before You submit any information to these Websites.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Restrictions and Liabilities</div>
                        <ol type="a"  className={styles.listDesc}>
                          <li className={styles.listDesc}>
                            We are liable only for any recommendations made by Our authorised person through the Website.
                          </li>
                          <li className={styles.listDesc}>
                            We are not liable for any recommendations posted by any third party (including fellow farmers, people from any other company or non-authorised person from Us).
                          </li>
                          <li className={styles.listDesc}>
                            You shall not post any illicit or immoral material on the farmer discussion forum of the Website.
                          </li>
                          <li className={styles.listDesc}>
                            We shall delete any post which We consider unfit for the discussion forum.
                          </li>
                          <li className={styles.listDesc}>
                            You expressly agree that in the event You post an information, you will be deemed to have given authority to the other users to act accordingly and We are not liable for the same.
                          </li>
                          <li className={styles.listDesc}>
                            In the event You post any photo, content, video or any other Personal Information or Non Personal Information through the Website, the same will be treated as granting of an exclusive, perpetual, transferable, sub-licensable, royalty free worldwide access to use such information by You to Us.  We shall be giving due credit to You in respect of the videos by referring Your name.
                          </li>
                          <li className={styles.listDesc}>
                            We do not allow explicit content, pornography and other such things or content on the Website. You shall not post any photo, content or video on the Website in which a third party has ownership/intellectual property rights on the same. In the event You post any such photo, content or video in the Website You shall only be liable for the same and We have right to remove such photo, content or video.
                          </li>
                          <li className={styles.listDesc}>
                            You shall indemnify Us for any third party claims against Us in respect of the posting of photo, content or video by You in the Website.
                          </li>
                          <li className={styles.listDesc}>
                            The use of Website is currently free of cost but normal data charges will apply for using internet on Your phone.
                          </li>
                        </ol>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Severability and Exclusion</div>
                        <p className={styles.listDesc}>
                          We have taken every effort to ensure that this Policy adheres with the applicable laws. The invalidity or unenforceability of any part of this Policy shall not prejudice or affect the validity or enforceability of the remainder of this Policy. This Policy does not apply to any information other than the information collected by the Company through the Website. This Policy shall be inapplicable to any unsolicited information You provide Us through this Website or through any other means or through public channels. This includes, but is not limited to, information posted in any public areas of the Website. All unsolicited information shall be deemed to be non-confidential and the Company shall be free to use and/ or disclose such unsolicited information without any limitations.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Changes to the Policy</div>
                        <p className={styles.listDesc}>
                          We may update this Policy from time to time. If We make any material changes, we may notify You by e-mail (sent to the e-mail address specified in Your account) or by means of a notice on this Website prior to the change becoming effective. We encourage You to periodically review the Policy for the latest information on Our privacy practices.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>Contact</div>
                        <p className={styles.listDesc}>
                          Please address Your grievances, feedback or questions, without limitation, with respect to the collection, processing, usage, disclosure, security of Your information in writing to our grievance officer at <a href="mailto:support@indiawantsbitcoin.org" className={styles.link}>support@indiawantsbitcoin.org</a>.
                        </p>
                      </li>
                    </ol>
                  </div>
              </div>
            </div>
        );
    }
}
