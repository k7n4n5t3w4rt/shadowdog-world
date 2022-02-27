import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
    {
        title: "PFPs",
        image: "/img/sd-pfp.png",
        description: (
            <>
                The PFPs are NFTs on the Ethereum blockchain. Purchasing one
                makes you part of the small Shadowdog community. There'll be
                merch and also early access to the Scenes collections as they're
                released.
            </>
        ),
        link: "https://opensea.io/",
    },
    {
        title: "Shadowdog and the Dancing Robot",
        image: "/img/sd-dancing-robot.png",
        description: (
            <>
                COMING SOON: Shadowdog and the Dancing Robot was the first story
                I drew, but not the first one I wrote. As I write new Shadowdog
                stories, I'll be releasing each frame of the new story as an
                NFT. Purchasing a frame makes you, potentially, an official
                co-owner of the story. We just have to have some communication,
                or use some identification service.
            </>
        ),
        link: "",
    },
    {
        title: "Static",
        image: "/img/sd-static.png",
        description: (
            <>
                COMING NEXT: "Static" is the most recent Shadowdog story. NFTs
                will come soon. In the meantime, you can see it on Instagram.
                Start here and go left into the future (I posted a frame every
                day).
            </>
        ),
        link: "",
    },
];

function Feature({ image, title, description, link }) {
    if (link !== "") {
        return (
            <div className={clsx("col col--4")}>
                <div className="text--center">
                    <a href={link}>
                        <img
                            className={styles.featureImage}
                            alt={title}
                            src={image}
                        />
                    </a>
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>
                        <a href={link}>{title}</a>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className={clsx("col col--4")}>
                <div className="text--center">
                    <img
                        className={styles.featureImage}
                        alt={title}
                        src={image}
                    />
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
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
