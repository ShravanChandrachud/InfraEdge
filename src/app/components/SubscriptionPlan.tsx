"use client";
import styles from "../page.module.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";

/* `You can send us requests for deploying and running 5 lightweight applications( any app from our list
            or your own websites, web apps, or custom requests), and your own personal URL for each of those.`,
                `Contact us for any changes to be made in your app( if you want full automation).`,
                `Our alternative platform to Vercel stack for hosting web applications.`,  */

export default function SubscriptionPlan() {
    const SubscriptionPlan = [
        {
            id: 1,
            heading: `What do you get?`,
            cost: 199,
            perks: [`Launch 5 lightweight apps of your choice`, 'Better alternative to Vercel to host web apps',
                `Personal URLs per app`, `Infinite CPU time`, `25 GB storage max`
            ],
        },
        {
            id: 2,
            heading: `What do you get?`,
            cost: 269,
            perks: [`Launch 5 lightweight apps of your choice`, 'Better alternative to Vercel to host web apps',
                `Personal URLs per app`, `Infinite CPU time`, `50 GB storage max`, `Access to main Server software. Hands-on infrastructure experience.`, 'Monthly educational resources for Cloud & DevOps ','Deploy & use your own 1 VM / VPS with any OS ( Ubuntu,Windows, Kali Linux,etc).'
            ],}
    ];

    return (
        <div className={styles.compare}>
            {/* <div className={styles.elements}>
                <div className={styles.content}>
                    <h2>What do you get?</h2>
                    <p>199/- per month subscription plan</p>
                    <ol>
                        <li>
                            You can send us requests for deploying and running 5 lightweight applications( any app from our list,
                            or your own websites, web apps, or custom requests), and your own personal URL for each of those.
                        </li>
                        <li>Contact us for any changes to be made in your app( if you want full automation).</li>
                        <li>Our alternative platform to Vercel stack for hosting web applications.</li>
                    </ol>
                </div>
                <img src="/sphere.png" alt="Globe" className={styles.image} />
            </div>*/}
            {SubscriptionPlan.map((plan) => (
                <div key={plan.id} className={styles.packcontainer}>
                    <div className={styles.packheader}>
                        <div className={styles.packpricecontainer}>
                            <span>₹</span>{plan.cost}
                            <span>/mo</span>
                        </div>
                        <p className={styles.packtitle}>
                            {plan.heading}
                        </p>
                    </div>
                    <div>
                        <ul className={styles.packlists}>
                            {plan.perks.map((perk, index) => (
                                <li key={index} className={styles.packlist}>
                                    <span>
                                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 12.75l6 6 9-13.5" strokeLinejoin="round" strokeLinecap="round"></path>
                                        </svg>
                                    </span>
                                    <p>
                                        {perk}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.packbuttoncontainer}>
                        <a href="https://forms.gle/gDFa1BuBpAEnnHq87"><button type="button">
                           <h3>Get Free Trial now ! </h3>
                        </button>
                        </a>
                    </div>
                </div>
            ))}
        </div >
    );
}
