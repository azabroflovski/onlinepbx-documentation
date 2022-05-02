import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageInstallation from '@site/src/components/HomepageInstallation';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={styles.heroBanner}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--primary button--lg margin-horiz--md"
                        to="/docs/intro">
                        Getting started️
                    </Link>

                    <Link
                        className="button button--secondary button--lg"
                        href="https://kb.onlinepbx.ru/confluence/pages/viewpage.action?pageId=37520591">
                        Learn More
                    </Link>
                </div>
                <HomepageInstallation></HomepageInstallation>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Home ${siteConfig.title}`}
            description="Wrapper which simplifies their api calls">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
