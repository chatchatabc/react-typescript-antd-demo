import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import  './App.css';
import StepComponent from "./components/StepComponent";
import FormComponent from "./components/FormComponent";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Button, Layout} from "antd";


const App: React.FC = () => {
    const [step, setStep] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [totalProgress, setTotalProgress] = useState<number>(1);

    const nextStep = () => {

        if(step < 4){
            setStep(step + 1)
        }

    }

    const backStep = () => {
        if(step > 0) {
            setStep(step - 1)
        }
    }

    const changeProgress = (value: number):void => {
        setProgress(value)
        let x = progress / totalProgress * 100;
        setProgress(x)
    }
    const changeTotalProgress = (value: number):void => {
        setTotalProgress(value)
        let x = progress / totalProgress * 100;
        setProgress(x)
    }

    useEffect(() => {
        console.log(step);
    }, [step]);

    return (
        <>
            <Layout>
                <Header className='header' >

                </Header>
                <Content className="content">
                    <div className='step'>
                        <StepComponent step={step} progress={progress} />
                    </div>
                        <div className='form-component'>
                            <FormComponent changeTotalProgress={changeTotalProgress} changeProgress={changeProgress} step={step}/>
                        </div>
                    <div className='buttonContainer'>
                        <div className='backStep'>
                            <Button onClick={backStep}>Back</Button>
                        </div>
                        <div className='nextStep' >
                            <Button onClick={nextStep}>Next</Button>
                        </div>

                    </div>
                </Content>
                <Footer>

                </Footer>
            </Layout>
        </>
    );
}
export default App;
