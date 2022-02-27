const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: "Shadowdog",
        tagline: "Welcome to the world of Shadowdog",
        url: "https://shadowdog.world",
        baseUrl: "/",
        onBrokenLinks: "warn",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        organizationName: "Shadowdog", // Usually your GitHub org/user name.
        projectName: "Shadowdog", // Usually your repo name.

        presets: [
            [
                "@docusaurus/preset-classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: false,
                    blog: {
                        showReadingTime: true,
                        // Please change this to your repo.
                        editUrl:
                            "https://github.com/k7n4n5t3w4rt/shadowdog-world/wiki",
                    },
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                googleAnalytics: {
                    trackingID: "UA-209088124-1",
                    // Optional fields.
                    anonymizeIP: true, // Should IPs be anonymized?
                },
                navbar: {
                    title: "Shadowdog",
                    logo: {
                        alt: "Shadowdog Logo",
                        src: "img/icon58x58.png",
                    },
                    items: [
                        { to: "/about", label: "About", position: "left" },
                        { to: "/history", label: "History", position: "left" },
                        { to: "/roadmap", label: "Roadmap", position: "left" },
                        { to: "/blog", label: "Blog", position: "left" },
                        {
                            href: "https://shadowdog.world",
                            label: "Shadowdog",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Community",
                            items: [
                                {
                                    label: "Trello",
                                    href: "https://trello.com/b/IoHmhz5c/shadowdog-community-board",
                                },
                            ],
                        },
                        {
                            title: "More",
                            items: [
                                {
                                    label: "Blog",
                                    to: "/blog",
                                },
                                {
                                    label: "Shadowdog",
                                    href: "https://shadowdog.world",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} BenkoWorks`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
    }
);
