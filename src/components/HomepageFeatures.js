import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <a href="https://opensea.io/">
                                <img
                                    className={styles.featureImagePFP}
                                    alt="10000 PFPs"
                                    src="/img/sd-pfp.png"
                                />
                            </a>
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>10000 PFPs</h3>
                            <p>
                                The PFPs are NFTs on the Ethereum blockchain.
                                Purchasing one makes you part of the small
                                Shadowdog community. There'll be merch and also
                                early access to the Scenes collections as
                                they're released.
                            </p>
                        </div>
                    </div>
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <img
                                className={styles.featureImage}
                                alt="Shadowdog and the Dancing Robot"
                                src="/img/sd-dancing-robot.png"
                            />
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>Shadowdog and the Dancing Robot</h3>
                            <p>
                                COMING SOON: Shadowdog and the Dancing Robot was
                                the first story I drew, but not the first one I
                                wrote. As I write new Shadowdog stories, I'll be
                                releasing each frame of the new story as an NFT.
                                Purchasing a frame makes you, potentially, an
                                official co-owner of the story. We just have to
                                have some communication, or use some
                                identification service.
                            </p>
                        </div>
                    </div>
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <img
                                className={styles.featureImage}
                                alt="Static"
                                src="/img/sd-static.png"
                            />
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>Static</h3>
                            <p>
                                COMING NEXT: "Static" is the most recent
                                Shadowdog story. NFTs will come soon. In the
                                meantime, you can see it on Instagram. Start
                                here and go left into the future (I posted a
                                frame every day).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
