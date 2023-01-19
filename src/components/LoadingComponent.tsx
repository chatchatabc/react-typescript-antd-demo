import { Alert, Spin } from 'antd';
import React from 'react';

const LoadingComponent: React.FC = () => (
    <Spin tip="Loading...">
        <Alert
            message="Sending to server"
            description="Connecting to the Cloud"
            type="info"
        />
    </Spin>
);

export default LoadingComponent;