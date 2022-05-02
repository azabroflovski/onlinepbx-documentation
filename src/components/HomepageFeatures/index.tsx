import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        description: (
            <>
                Package easily installed and used to get your telephony and running quickly
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        description: (
            <>
                Package lets you focus on your business logic, and we&apos;ll do the chores.
            </>
        ),
    },
    {
        title: 'Powered by TypeScript',
        description: (
            <>
                This allows your code editor (e.g. VSCode) to analyze your code while you are typing, and assist you
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div>
                {Svg && <Svg className={styles.featureSvg} role="img"/>}
            </div>
            <div className="padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section>
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
