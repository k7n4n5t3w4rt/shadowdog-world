import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";

export default function History() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`{siteConfig.title} | History`}
            description="Shadowdog history."
        >
            <main class="container container--fluid margin-vert--lg">
                <div class="row mdxPageWrapper_3qD3">
                    <div class="col">
                        <header>
                            <h1>History</h1>
                        </header>
                        <p>This is all about Shadowdog history.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
