_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"1OyB":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},"1svy":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return a("r6nA")}])},Ai6c:function(e,t,a){e.exports={privacyPage:"styles_privacyPage__1zrUR",privacyContainer:"styles_privacyContainer__1JstE",heading:"styles_heading__1UOiE",content:"styles_content__2I_l1",listHeading:"styles_listHeading__3jGLC",listDesc:"styles_listDesc__3K8UL",link:"styles_link__95UOF",homeButton:"styles_homeButton__bjcqQ",inputSelect:"styles_inputSelect__z2vk1"}},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},Ji7U:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},U8pU:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return n}))},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("J4zp"),r=a("284h");t.__esModule=!0,t.default=void 0;var o=r(a("q1tI")),i=a("elyg"),s=a("nOHt"),c=a("vNVm"),l={};function u(e,t,a,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,a,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+a+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,a=(0,s.useRouter)(),r=a&&a.pathname||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),a=n(t,2),o=a[0],s=a[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),h=d.href,f=d.as,m=e.children,p=e.replace,y=e.shallow,O=e.scroll,E=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=o.Children.only(m),I=b&&"object"===typeof b&&b.ref,N=(0,c.useIntersection)({rootMargin:"200px"}),T=n(N,2),R=T[0],A=T[1],j=o.default.useCallback((function(e){R(e),I&&("function"===typeof I?I(e):"object"===typeof I&&(I.current=e))}),[I,R]);(0,o.useEffect)((function(){var e=A&&t&&(0,i.isLocalURL)(h),n="undefined"!==typeof E?E:a&&a.locale,r=l[h+"%"+f+(n?"%"+n:"")];e&&!r&&u(a,h,f,{locale:n})}),[f,h,A,E,t,a]);var g={ref:j,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,a,n,r,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(a))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[r?"replace":"push"](a,n,{shallow:o,locale:c,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,a,h,f,p,y,O,E)},onMouseEnter:function(e){(0,i.isLocalURL)(h)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(a,h,f,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var v="undefined"!==typeof E?E:a&&a.locale,S=(0,i.getDomainLocale)(f,v,a&&a.locales,a&&a.domainLocales);g.href=S||(0,i.addBasePath)((0,i.addLocale)(f,v,a&&a.defaultLocale))}return o.default.cloneElement(b,g)};t.default=d},foSv:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},md7G:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("U8pU"),r=a("JX7q");function o(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!==typeof t?Object(r.a)(e):t}},r6nA:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a("nKUr"),r=a("1OyB"),o=a("vuIU"),i=a("Ji7U"),s=a("md7G"),c=a("foSv"),l=a("q1tI"),u=a.n(l),d=a("YFqc"),h=a.n(d),f=a("Ai6c"),m=a.n(f);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var y=function(e){Object(i.a)(a,e);var t=p(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:m.a.privacyPage,children:Object(n.jsxs)("div",{className:m.a.privacyContainer,children:[Object(n.jsx)("div",{className:m.a.heading,children:"GENERAL TERMS AND CONDITIONS"}),Object(n.jsxs)("div",{className:m.a.content,children:[Object(n.jsxs)("p",{children:["Subject to the foregoing, these General Terms and Conditions govern your access and use of this website (hereinafter referred to as ",Object(n.jsx)("b",{children:"\u201cPlatform\u201d"}),"), operated by Bitcipher Labs LLP (",Object(n.jsx)("b",{children:"\u201cUs\u201d / \u201cWe\u201d \u201cOur\u201d"}),"), for making a petition / an application to your member of Parliament / representative in the Parliament to consider, support and legalize virtual currencies in India and to consider voting against any bill which bans Crypto-Currency within the State / Country."]}),Object(n.jsx)("p",{children:"Please read these General Terms and Conditions carefully before accessing or using the Platform or any part thereof. By accessing or using any part of the Platform, you agree to be bound by these General Terms and Conditions. "}),Object(n.jsx)("p",{children:"If you do not agree to all the terms and conditions, then YOU MAY NOT ACCESS THE PLATFORM OR USE ANY SERVICES FACILITATED / PROVIDED THROUGH PLATFORM."}),Object(n.jsx)("p",{children:"These General Terms and Conditions form a legal and binding agreement between you and Us and is made pursuant to the terms of the Information Technology Act, 2000."}),Object(n.jsxs)("ol",{children:[Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"ELIGIBILITY"}),Object(n.jsx)("p",{className:m.a.listDesc,children:"You represent and warrant that you (a) (i) are at least 18 years old, or (ii) validly existing under the laws of relevant country, with the due authority to accept these General Terms and Conditions. In the event you are under the age of 18 years, you represent and warrant that you have the requisite consent from your legal guardians and are availing the services under their supervision; and (b) are competent to form a binding contract; and (c) have not previously been suspended or removed from using our services and/or the Platform or any part thereof."})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"YOUR ACCOUNT"}),Object(n.jsxs)("p",{className:m.a.listDesc,children:["If you wish to use or browse through the Platform, you may be required to maintain an account on the Platform (",Object(n.jsx)("b",{children:"\u201cAccount\u201d"}),") and you will be required to furnish certain information and details, as notified on the Platform."]}),Object(n.jsx)("p",{className:m.a.listDesc,children:"You further understand that you are responsible for maintaining the confidentiality and security of your Account including log-in details and the password. You agree to accept responsibility for all activities that occur through your Account. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform Us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorized manner."}),Object(n.jsx)("p",{className:m.a.listDesc,children:"You represent and warrant that all information, data and documents provide by you (a) for creating of the Account; and/or (b) through your Account are true, correct, accurate and up to date. In the event of any change, you agree to update the details on the Account in a prompt and swift manner. You further represent and warrant that at the time of making any new Account, you do not currently have an existing account on the Platform."}),Object(n.jsx)("p",{className:m.a.listDesc,children:"We always has the right and liberty to monitor the content of the Platform or any part thereof which shall include Your Account and the information provided by You. The monitoring of the Platform is important to determine the veracity of the information provided by You and ensure Your use of the Platform as per the terms hereof. We shall also have the liberty to remove any objectionable content which is in contravention of these General Terms and Conditions or any applicable laws in force in India or share such information with any governmental authority as per procedures laid down by the law for the time being in force in India."})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"PROHIBITED USES"}),Object(n.jsx)("p",{className:m.a.listDesc,children:"You shall not use or access the Platform or any part thereof:"}),Object(n.jsxs)("ol",{type:"a",className:m.a.listDesc,children:[Object(n.jsx)("li",{className:m.a.listDesc,children:"for any unlawful purpose;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"to solicit others to perform or participate in any unlawful acts;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"in a manner so as to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances in India;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"in a manner so as to infringe upon or violate Our intellectual property rights or the intellectual property rights of others;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"to submit or create false or misleading information;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"to upload or transmit spam, viruses, or any other type of malicious code that will or may be used in any way to adversely affect the functionality or operation of the Platform, or the Internet;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"to harvest or collect any information of the users of the Platform, including using any robot, spider, site search or retrieval application, phishing, or other manual or automatic device or process to retrieve, index or mine data;"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"for any obscene or immoral purpose; or"}),Object(n.jsx)("li",{className:m.a.listDesc,children:"to interfere with or circumvent the security features of the Platform."})]})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"OUR INTELLECTUAL PROPERTY "}),Object(n.jsxs)("ol",{type:"a",className:m.a.listDesc,children:[Object(n.jsx)("li",{className:m.a.listDesc,children:"All intellectual property in or of the Platform belongs to or is licensed to Us. We grant you a limited, non-transferable, personal, non-sublicensable, non-exclusive and revocable license to access and use the Platform or any part thereof for availing the service offered through the Platform, but not to download any material from it (other than page caching) or modify it, or any portion of it for commercial use. Any unauthorized access to the Platform (or any part thereof) or any networks, servers or computer systems connected to the Platform and any attempt to modify, adapt, translate or reverse engineer any part of the Platform or re-format or frame any portion of the pages of the Platform is not permitted without our express written consent."}),Object(n.jsx)("li",{className:m.a.listDesc,children:"This license is non-transferable and does not permit any resale or commercial use of this Platform or its contents; any downloading or copying of account information for the benefit of anyone other than your use; or any use of data mining, robots, or similar data gathering and extraction tools."}),Object(n.jsx)("li",{className:m.a.listDesc,children:"The Platform or any part thereof (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed or otherwise exploited for any commercial purpose or otherwise, without our express written consent. Any unauthorized use of the Platform shall lead to revocation of the access / license granted by Us herein."})]})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"THIRD PARTY MATERIAL AND SERVICES"}),Object(n.jsxs)("p",{className:m.a.listDesc,children:["If we provide\xa0you links / referrals / references to / of third parties and/or display, include or make available content, data, information, applications or materials from third parties\xa0(",Object(n.jsx)("b",{children:"\u201cThird Party Materials\u201d"}),"). You acknowledge and agree that We are not responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third-Party Materials."]})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"DISCLAIMERS"}),Object(n.jsx)("p",{className:m.a.listDesc,children:"PLATFORM IS PROVIDED ON AN \u201cAS IS\u201d BASIS WITHOUT ANY WARRANTY OR REPRESENTATION OF ANY KIND WHATSOEVER. PLATFORM IS MERELY A TECHNOLOGY FACILITATOR."}),Object(n.jsx)("p",{className:m.a.listDesc,children:"WE DO NOT WARRANT OR ENDORSE AND DO NOT ASSUME AND WILL NOT HAVE ANY LIABILITY OR RESPONSIBILITY TO YOU FOR (i) ANY THIRD-PARTY / INDIVDUAL OR (ii) THIRD-PARTY MATERIAL OR (iii) ANY OTHER MATERIALS / PRODUCTS."}),Object(n.jsx)("p",{className:m.a.listDesc,children:"TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE, OUR AFFILIATED COMPANIES, SUBSIDIARIES, OFFICERS, DIRECTORS, EMPLOYEES OR ANY RELATED PARTY DISCLAIM ANY LIABILITY TO YOU OR TO ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES OR ANY LOSS OF REVENUE OR PROFITS ARISING UNDER OR RELATING TO THESE TERMS. SUBJECT TO THE FOREGOING, THE OUR MAXIMUM LIABILITY SHALL BE LIMITED TO THE FEE RECEIVED BY IT FROM YOU, IF ANY."}),Object(n.jsx)("p",{className:m.a.listDesc,children:"TO THE MAXIMUM EXTENT PERMITTED UNDER LAW, YOU WAIVE, RELEASE, DISCHARGE AND HOLD US HARMLESS, OUR AFFILIATED AND SUBSIDIARY COMPANIES, AND EACH OF THEIR DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS, FROM ANY AND ALL CLAIMS, LOSSES, DAMAGES, LIABILITIES, EXPENSES AND CAUSES OF ACTION ARISING OUT OF YOUR ACCESS / USE OF THE PLATFORM OR ANY PART THEREOF."}),Object(n.jsx)("p",{className:m.a.listDesc,children:"WE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND AS TO THE SERVICE INCLUDED IN OR ACCESSIBLE FROM THE PLATFORM, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. WE FURTHER MAKE NO WARRANTY THAT: (i) THE SERVICE WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS WILL BE DESIRABLE, ACCURATE OR RELIABLE, (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL OBTAINED BY YOU THROUGH THE PLATFORM WILL MEET YOUR EXPECTATIONS, OR (V) ANY ERRORS IN THE TECHNOLOGY WILL BE CORRECTED."})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"INDEMNITY"}),Object(n.jsx)("p",{className:m.a.listDesc,children:"You agree to indemnify, save, and hold Us, our affiliates, contractors, employees, officers, directors, agents and its third party associates, licensors, and partners harmless from any and all claims, demands, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Platform, any violation by you of these terms, or any breach of the representations, warranties, and covenants made by you herein or your infringement of any intellectual property or other right of any person or entity, or as a result of any threatening, libellous, obscene, harassing or offensive material posted/ transmitted by you on the Platform."})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"SUSPENSION OF ACCESS"}),Object(n.jsx)("p",{className:m.a.listDesc,children:"We may choose to stop providing one or more services through the Platform / the Platform and may terminate access to or use of the Platform or any part thereof at any time without any notice. Other than where We inform you otherwise, upon any termination, (a) the rights and licenses granted to you under these terms will end immediately; (b) your Account shall be suspended / deleted; and (c) you must stop using / accessing the Platform. We reserve the right to suspend or cease providing the services through the Platform / the Platform and shall have no liability or responsibility to you in any manner whatsoever if We chooses to do so except as prescribed under applicable law."})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"PRIVACY AND ENTIRE AGREEMENT"}),Object(n.jsxs)("p",{className:m.a.listDesc,children:["We will collect, store and disclose your information in accordance with the Privacy Policy available at ",Object(n.jsx)(h.a,{href:"/privacy-policy",children:Object(n.jsx)("a",{className:m.a.link,children:"https:\u2215\u2215indiawantsbitcoin.org/privacy-policy."})})," These General Terms and Conditions along with the Privacy Policy form the entire understanding with respect to the arrangement between you and us and supersedes any prior written or verbal arrangement. In case of any conflict, the terms of the specific contract / agreement executed between the parties shall prevail."]})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"APPLICABLE LAWS"}),Object(n.jsx)("p",{className:m.a.listDesc,children:"Your use of this Platform and any terms and conditions stated in this agreement is subject to laws of India. In case of any disputes arising out of the use of the Platform or any part thereof, Courts of Bangalore, India will have exclusive jurisdiction."})]}),Object(n.jsxs)("li",{className:m.a.listHeading,children:[Object(n.jsx)("div",{className:m.a.listHeading,children:"REACH OUT / GRIEVANCE"}),Object(n.jsxs)("p",{className:m.a.listDesc,children:["You can reach out to Us at ",Object(n.jsx)("a",{href:"mailto:support@indiawantsbitcoin.org",className:m.a.link,children:"support@indiawantsbitcoin.org"})," to raise any questions, complaints, grievance, or feedback."]})]})]})]})]})})}}]),a}(u.a.Component)},vNVm:function(e,t,a){"use strict";var n=a("J4zp"),r=a("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!s,r=(0,o.useRef)(),l=(0,o.useState)(!1),u=n(l,2),d=u[0],h=u[1],f=(0,o.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),a||d||e&&e.tagName&&(r.current=function(e,t,a){var n=function(e){var t=e.rootMargin||"",a=c.get(t);if(a)return a;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return c.set(t,a={id:t,observer:r,elements:n}),a}(a),r=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[a,t,d]);return(0,o.useEffect)((function(){s||d||(0,i.default)((function(){return h(!0)}))}),[d]),[f,d]};var o=a("q1tI"),i=r(a("0G5g")),s="undefined"!==typeof IntersectionObserver;var c=new Map},vuIU:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))}},[["1svy",0,2,1]]]);