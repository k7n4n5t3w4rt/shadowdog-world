import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function Shot({ image, title }) {
    return (
        <img
            className={styles.storyImage}
            alt={title}
            src={"/img/stories/the-shadow/" + image + ".png"}
        />
    );
}
export default function Shadow() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} | Stories | The Shadow`}
            description="A Shadowdog story."
        >
            <main className="container container--fluid margin-vert--lg">
                <div className="row mdxPageWrapper_3qD3">
                    <div className={"col " + styles.storyImageContainer}>
                        {shotList.map((props, idx) => (
                            <Shot key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}

const shotList = [
    {
        title: "",
        image: "000",
    },
    {
        title: "",
        image: "001",
    },
    {
        title: "",
        image: "002",
    },
    {
        title: "",
        image: "003",
    },
    {
        title: "",
        image: "004",
    },
    {
        title: "",
        image: "005",
    },
    {
        title: "",
        image: "006",
    },
    {
        title: "",
        image: "to-be-continued",
    },
];
