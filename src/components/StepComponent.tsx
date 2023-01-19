import React from 'react';
import {Steps} from "antd";
import 'antd/dist/antd.css';
import App from "../App";
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress; // or 'antd/dist/antd.less'

interface Prop {
    step:number
    progress:number
}

const description = 'This is a description.';
const StepComponent: React.FC<Prop> = (props) => (
    <Steps
        current={props.step}
        percent={props.progress}
        items={[
            {
                title: 'Register',
                description,
            },
            {
                title: 'Upload',
                description,
            },
            {
                title: 'Term and Conditions',
                description,
            },
            {
                title: 'Overview',
                description,
            },
            {
                title: 'Processing',
                description,
            },
        ]}
    />
);

export default StepComponent;
