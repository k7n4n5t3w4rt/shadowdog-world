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
                    title: "",
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
                            href: "https://opensea.io/",
                            label: "OpenSea.io",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Pages",
                            items: [
                                {
                                    to: "/about",
                                    label: "About",
                                    position: "left",
                                },
                                {
                                    to: "/history",
                                    label: "History",
                                    position: "left",
                                },
                                {
                                    to: "/roadmap",
                                    label: "Roadmap",
                                    position: "left",
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
                                    label: "Twitter",
                                    href: "https://twitter.com/5h4d0wd06",
                                },
                                {
                                    label: "Instagram",
                                    href: "https://www.instagram.com/5h4d0wd06/",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} Kynan Hughes`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
    }
);
