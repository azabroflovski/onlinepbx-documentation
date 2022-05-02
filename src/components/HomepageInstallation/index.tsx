import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


interface TabItem {
    label: string,
    lang?: string,
    command: string
}

const installationVariants: TabItem[] = [
    {
        label: 'NPM',
        lang: 'bash',
        command: 'npm install onlinepbx'
    },
    {
        label: 'YARN',
        lang: 'bash',
        command: 'yarn add onlinepbx'
    },
    {
        label: 'CDN',
        lang: 'html',
        command: `<script src="https://unpkg.com/browse/onlinepbx@0.1.26/dist/onlinepbx.umd.js"></script>`
    }
]


export default function HomepageInstallation(): JSX.Element {
    return (
        <div>
            <Tabs className="tabs-center">
                {installationVariants.map((item) =>
                    <TabItem value={item.label} label={item.label}>
                        <CodeBlock language={item.lang}>{item.command}</CodeBlock>
                    </TabItem>
                )}
            </Tabs>
        </div>
    );
}
