import { Button, Result } from 'antd';
import React from 'react';

const App: React.FC = () => (
    <Result
        status="success"
        title="Success"
        subTitle="Account Creation Successful"
        extra={[
            <Button type="primary" key="console">
                Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
        ]}
    />
);

export default App;