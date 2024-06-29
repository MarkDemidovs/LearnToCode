import { useState, ChangeEvent } from "react"
import TutorField from "./tutorField";

export default function HTMLfield() {
    const [htmlComp, setHC] = useState<string>(""); 

    function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
        const newValue = e.target.value;
        setHC(newValue);
        console.log(newValue);       
    }
    return (
        <div id="page">
            <div id="workSheet">
                <TutorField title="Intro" topic="HTML"
                text="This is your workbench, feel free to look around and type any HTML/CSS in the textfield."/>
            </div>
            <textarea placeholder="Enter your html here.." onChange={handleChange} id="textEditor"></textarea>
            <div id="htmlShown" dangerouslySetInnerHTML={{ __html: htmlComp }}>

            </div>
        </div>
    )
}