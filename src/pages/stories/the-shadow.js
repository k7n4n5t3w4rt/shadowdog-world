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
        image: "007",
    },
    {
        title: "",
        image: "008",
    },
    {
        title: "",
        image: "009",
    },
    {
        title: "",
        image: "010",
    },
    {
        title: "",
        image: "011",
    },
    {
        title: "",
        image: "012",
    },
    {
        title: "",
        image: "013",
    },
    {
        title: "",
        image: "014",
    },
    {
        title: "",
        image: "015",
    },
    {
        title: "",
        image: "016",
    },
    {
        title: "",
        image: "017",
    },
    {
        title: "",
        image: "018",
    },
    {
        title: "",
        image: "019",
    },
    {
        title: "",
        image: "020",
    },
    {
        title: "",
        image: "021",
    },
    {
        title: "",
        image: "022",
    },
    {
        title: "",
        image: "023",
    },
    {
        title: "",
        image: "024",
    },
    {
        title: "",
        image: "025",
    },
    {
        title: "",
        image: "to-be-continued",
    },
];
