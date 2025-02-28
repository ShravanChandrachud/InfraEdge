"use client";
import styles from "../page.module.css";

export default function InfraedgeFeatures() {
    return (
        <div className={styles.elements}>
            <h1>What is InfraEdge?</h1>
            <div className={styles.youtube}>
                <iframe
                    src="https://www.youtube.com/embed/4yT1crRpw1c"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
