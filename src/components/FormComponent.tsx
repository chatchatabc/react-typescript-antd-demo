import React, {useEffect, useState} from 'react';
import FormComponent2 from "./FormComponent2";
import FinishingComponent from "./FinishingComponent";
import RegisterComponent from "./RegisterComponent";
import DragDropComponent from "./DragDropComponent";
import LoadingComponent from "./LoadingComponent";


interface Prop {
    step:number
}

interface Prop {
    step:number
    changeProgress: (arg: number) => void
    changeTotalProgress: (arg: number) => void
}


const FormComponent: React.FC<Prop> = ({step, changeProgress, changeTotalProgress}) => {
    const [progress, setProgress] = useState<number>(0);
    const [totalProgress, setTotalProgress] = useState<number>(1);

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    useEffect(() => {
        console.log(totalProgress);
    }, [totalProgress]);


    if(step == 0){
        return (
                <>
                    <RegisterComponent/>
                </>
            )

    }

    if(step == 1) {
        return (
            <>
                <DragDropComponent />
            </>
        )
    }

    if(step == 2) {
        return (
            <>

            </>
        )
    }

    if(step == 3){
        return (
                <>

                </>
            )
    }

    if(step == 4){
        return (
            <>
                <LoadingComponent/>
            </>
        )
    }

    return (
        <>
        </>
    )
};

export default FormComponent;