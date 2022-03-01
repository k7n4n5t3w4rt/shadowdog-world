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
                            <img
                                className={styles.featureImagePFP}
                                alt="10000 PFPs"
                                src="/img/sd-pfp.png"
                            />
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>10000 SD PFPs</h3>
                            <p>
                                COMING SOON: I've been learning about NFTs and
                                plan to release a Shadowdog token. It isn't an
                                NFT scam. I just wanted to generate a bunch of
                                tokens because I think it's an interesting kind
                                of art. There's heaps of them and they will
                                always be an affordable way to show your
                                support. Buying the token will keep me drawing
                                new stories and give you a unique and special
                                profile pic. There will be much utility. I'm not
                                sure what yet. I plan to make some merch, so
                                there's that. Basically anything I do that's
                                Shadowdog related will probably use the token in
                                some way. It's the future.
                            </p>
                        </div>
                    </div>
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <a href="/stories/dancing-robot/">
                                <img
                                    className={styles.featureImage}
                                    alt="Shadowdog and the Dancing Robot"
                                    src="/img/sd-dancing-robot.png"
                                />
                            </a>
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>#1 Shadowdog and the Dancing Robot</h3>
                            <p>
                                Shadowdog is on the run. He has a new toy - a
                                wonderful dancing robot. But is everything as it
                                seems? His friend seems to know something
                                Shadowdog doesn't...
                            </p>
                        </div>
                    </div>
                    <div className={clsx("col col--4")}>
                        <div className="text--center">
                            <a href="/stories/static/">
                                <img
                                    className={styles.featureImage}
                                    alt="Static"
                                    src="/img/sd-static.png"
                                />
                            </a>
                        </div>
                        <div className="text--center padding-horiz--md">
                            <h3>#2 Static</h3>
                            <p>
                                The boy comes home one day to find a very nasty
                                surprise. An univited visitor had decided to
                                re-arrange the furniture.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
