import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
    {
        title: "Automate complex and repetitive tasks in Trello",
        image: "/img/automate.png",
        description: (
            <>
                When you need to streamline your workflow with someting Trello
                doesn't do out of the box, use Shadowdog.
            </>
        ),
    },
    {
        title: "Seamlessly integrate other softwares into your Trello board",
        image: "/img/integrate.png",
        description: (
            <>
                Instead of switching between systems, manage everything from
                your Trello board. Integrate your email, CRM or fullfillment
                system directly into your workflow.
            </>
        ),
    },
    {
        title: "No hard limits or caps",
        image: "/img/no-limits.png",
        description: (
            <>
                The Free plan is fine for most people trying out Shadowdog, and
                the Standard plan is all most people ever need. Beyond that, you
                can upgrade or buy extra time if your usage spikes.
            </>
        ),
    },
];

function Feature({ image, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <img className={styles.featureImage} alt={title} src={image} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
