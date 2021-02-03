import React from 'react';
import ReactSelect from 'react-select';
import Link from 'next/link'
import styles from './styles.module.scss';

export default class Terms extends React.Component {

    render() {
        return (
            <div className={styles.privacyPage}>
              <div className={styles.privacyContainer}>
                <div className={styles.heading}>GENERAL TERMS AND CONDITIONS</div>
                  <div className={styles.content}>
                    <p>Subject to the foregoing, these General Terms and Conditions govern your access and use of this website (hereinafter referred to as <b>“Platform”</b>), operated by Bitcipher Labs LLP (<b>“Us” / “We” “Our”</b>), for making a petition / an application to your member of Parliament / representative in the Parliament to consider, support and legalize virtual currencies in India and to consider voting against any bill which bans Crypto-Currency within the State / Country.</p>
                    <p>Please read these General Terms and Conditions carefully before accessing or using the Platform or any part thereof. By accessing or using any part of the Platform, you agree to be bound by these General Terms and Conditions. </p>
                    <p>If you do not agree to all the terms and conditions, then YOU MAY NOT ACCESS THE PLATFORM OR USE ANY SERVICES FACILITATED / PROVIDED THROUGH PLATFORM.</p>
                    <p>These General Terms and Conditions form a legal and binding agreement between you and Us and is made pursuant to the terms of the Information Technology Act, 2000.</p>
                    <ol>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>ELIGIBILITY</div>
                        <p className={styles.listDesc}>
                          You represent and warrant that you (a) (i) are at least 18 years old, or (ii) validly existing under the laws of relevant country, with the due authority to accept these General Terms and Conditions. In the event you are under the age of 18 years, you represent and warrant that you have the requisite consent from your legal guardians and are availing the services under their supervision; and (b) are competent to form a binding contract; and (c) have not previously been suspended or removed from using our services and/or the Platform or any part thereof.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>YOUR ACCOUNT</div>
                        <p className={styles.listDesc}>
                          If you wish to use or browse through the Platform, you may be required to maintain an account on the Platform (<b>“Account”</b>) and you will be required to furnish certain information and details, as notified on the Platform.
                        </p>
                        <p className={styles.listDesc}>
                          You further understand that you are responsible for maintaining the confidentiality and security of your Account including log-in details and the password. You agree to accept responsibility for all activities that occur through your Account. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform Us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorized manner.
                        </p>
                        <p className={styles.listDesc}>
                          You represent and warrant that all information, data and documents provide by you (a) for creating of the Account; and/or (b) through your Account are true, correct, accurate and up to date. In the event of any change, you agree to update the details on the Account in a prompt and swift manner. You further represent and warrant that at the time of making any new Account, you do not currently have an existing account on the Platform.
                        </p>
                        <p className={styles.listDesc}>
                          We always has the right and liberty to monitor the content of the Platform or any part thereof which shall include Your Account and the information provided by You. The monitoring of the Platform is important to determine the veracity of the information provided by You and ensure Your use of the Platform as per the terms hereof. We shall also have the liberty to remove any objectionable content which is in contravention of these General Terms and Conditions or any applicable laws in force in India or share such information with any governmental authority as per procedures laid down by the law for the time being in force in India.
                        </p>
                      </li>

                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>PROHIBITED USES</div>
                        <p className={styles.listDesc}>
                          You shall not use or access the Platform or any part thereof:
                        </p>
                        <ol type="a"  className={styles.listDesc}>
                          <li className={styles.listDesc}>
                            for any unlawful purpose;
                          </li>
                          <li className={styles.listDesc}>
                            to solicit others to perform or participate in any unlawful acts;
                          </li>
                          <li className={styles.listDesc}>
                            in a manner so as to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances in India;
                          </li>
                          <li className={styles.listDesc}>
                            in a manner so as to infringe upon or violate Our intellectual property rights or the intellectual property rights of others;
                          </li>
                          <li className={styles.listDesc}>
                            to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;
                          </li>
                          <li className={styles.listDesc}>
                            to submit or create false or misleading information;
                          </li>
                          <li className={styles.listDesc}>
                            to upload or transmit spam, viruses, or any other type of malicious code that will or may be used in any way to adversely affect the functionality or operation of the Platform, or the Internet;
                          </li>
                          <li className={styles.listDesc}>
                            to harvest or collect any information of the users of the Platform, including using any robot, spider, site search or retrieval application, phishing, or other manual or automatic device or process to retrieve, index or mine data;
                          </li>
                          <li className={styles.listDesc}>
                            for any obscene or immoral purpose; or
                          </li>
                          <li className={styles.listDesc}>
                            to interfere with or circumvent the security features of the Platform.
                          </li>
                        </ol>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>OUR INTELLECTUAL PROPERTY </div>
                          <ol type="a"  className={styles.listDesc}>
                            <li className={styles.listDesc}>
                              All intellectual property in or of the Platform belongs to or is licensed to Us. We grant you a limited, non-transferable, personal, non-sublicensable, non-exclusive and revocable license to access and use the Platform or any part thereof for availing the service offered through the Platform, but not to download any material from it (other than page caching) or modify it, or any portion of it for commercial use. Any unauthorized access to the Platform (or any part thereof) or any networks, servers or computer systems connected to the Platform and any attempt to modify, adapt, translate or reverse engineer any part of the Platform or re-format or frame any portion of the pages of the Platform is not permitted without our express written consent.
                            </li>
                            <li className={styles.listDesc}>
                              This license is non-transferable and does not permit any resale or commercial use of this Platform or its contents; any downloading or copying of account information for the benefit of anyone other than your use; or any use of data mining, robots, or similar data gathering and extraction tools.
                            </li>
                            <li className={styles.listDesc}>
                              The Platform or any part thereof (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed or otherwise exploited for any commercial purpose or otherwise, without our express written consent. Any unauthorized use of the Platform shall lead to revocation of the access / license granted by Us herein.
                            </li>
                          </ol>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>THIRD PARTY MATERIAL AND SERVICES</div>
                        <p className={styles.listDesc}>
                          If we provide you links / referrals / references to / of third parties and/or display, include or make available content, data, information, applications or materials from third parties (<b>“Third Party Materials”</b>). You acknowledge and agree that We are not responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third-Party Materials.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>DISCLAIMERS</div>
                        <p className={styles.listDesc}>
                          PLATFORM IS PROVIDED ON AN “AS IS” BASIS WITHOUT ANY WARRANTY OR REPRESENTATION OF ANY KIND WHATSOEVER. PLATFORM IS MERELY A TECHNOLOGY FACILITATOR.
                        </p>
                        <p className={styles.listDesc}>
                          WE DO NOT WARRANT OR ENDORSE AND DO NOT ASSUME AND WILL NOT HAVE ANY LIABILITY OR RESPONSIBILITY TO YOU FOR (i) ANY THIRD-PARTY / INDIVDUAL OR (ii) THIRD-PARTY MATERIAL OR (iii) ANY OTHER MATERIALS / PRODUCTS.
                        </p>
                        <p className={styles.listDesc}>
                          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE, OUR AFFILIATED COMPANIES, SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES OR ANY RELATED PARTY DISCLAIM ANY LIABILITY TO YOU OR TO ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES OR ANY LOSS OF REVENUE OR PROFITS ARISING UNDER OR RELATING TO THESE TERMS. SUBJECT TO THE FOREGOING, THE OUR MAXIMUM LIABILITY SHALL BE LIMITED TO THE FEE RECEIVED BY IT FROM YOU, IF ANY.
                        </p>
                        <p className={styles.listDesc}>
                          TO THE MAXIMUM EXTENT PERMITTED UNDER LAW, YOU WAIVE, RELEASE, DISCHARGE AND HOLD US HARMLESS, OUR AFFILIATED AND SUBSIDIARY COMPANIES, AND EACH OF THEIR DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS, FROM ANY AND ALL CLAIMS, LOSSES, DAMAGES, LIABILITIES, EXPENSES AND CAUSES OF ACTION ARISING OUT OF YOUR ACCESS / USE OF THE PLATFORM OR ANY PART THEREOF.
                        </p>
                        <p className={styles.listDesc}>
                          WE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND AS TO THE SERVICE INCLUDED IN OR ACCESSIBLE FROM THE PLATFORM, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. WE FURTHER MAKE NO WARRANTY THAT: (i) THE SERVICE WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS WILL BE DESIRABLE, ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL OBTAINED BY YOU THROUGH THE PLATFORM WILL MEET YOUR EXPECTATIONS, OR (V) ANY ERRORS IN THE TECHNOLOGY WILL BE CORRECTED.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>INDEMNITY</div>
                        <p className={styles.listDesc}>
                          You agree to indemnify, save, and hold Us, our affiliates, contractors, employees, officers, directors, agents and its third party associates, licensors, and partners harmless from any and all claims, demands, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Platform, any violation by you of these terms, or any breach of the representations, warranties, and covenants made by you herein or your infringement of any intellectual property or other right of any person or entity, or as a result of any threatening, libellous, obscene, harassing or offensive material posted/ transmitted by you on the Platform.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>SUSPENSION OF ACCESS</div>
                        <p className={styles.listDesc}>
                          We may choose to stop providing one or more services through the Platform / the Platform and may terminate access to or use of the Platform or any part thereof at any time without any notice. Other than where We inform you otherwise, upon any termination, (a) the rights and licenses granted to you under these terms will end immediately; (b) your Account shall be suspended / deleted; and (c) you must stop using / accessing the Platform. We reserve the right to suspend or cease providing the services through the Platform / the Platform and shall have no liability or responsibility to you in any manner whatsoever if We chooses to do so except as prescribed under applicable law.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>PRIVACY AND ENTIRE AGREEMENT</div>
                        <p className={styles.listDesc}>
                          We will collect, store and disclose your information in accordance with the Privacy Policy available at <Link href="/privacy-policy"><a className={styles.link}>https:&#8725;&#8725;indiawantsbitcoin.org/privacy-policy.</a></Link> These General Terms and Conditions along with the Privacy Policy form the entire understanding with respect to the arrangement between you and us and supersedes any prior written or verbal arrangement. In case of any conflict, the terms of the specific contract / agreement executed between the parties shall prevail.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>APPLICABLE LAWS</div>
                        <p className={styles.listDesc}>
                          Your use of this Platform and any terms and conditions stated in this agreement is subject to laws of India. In case of any disputes arising out of the use of the Platform or any part thereof, Courts of Bangalore, India will have exclusive jurisdiction.
                        </p>
                      </li>
                      <li className={styles.listHeading}>
                        <div className={styles.listHeading}>REACH OUT / GRIEVANCE</div>
                        <p className={styles.listDesc}>
                          You can reach out to Us at <a href="mailto:support@indiawantsbitcoin.org" className={styles.link}>support@indiawantsbitcoin.org</a> to raise any questions, complaints, grievance, or feedback.
                        </p>
                      </li>
                    </ol>
                  </div>
              </div>
            </div>
        );
    }
}
