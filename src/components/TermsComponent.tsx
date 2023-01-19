import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

const TermsComponent: React.FC = () => {
    return(
        <>

            <Checkbox onChange={onChange}>Checkbox</Checkbox>;
        </>
        )
}


export default TermsComponent;