import { useEffect, useState } from 'react'
import './css/DoneGoals.css'
export default function DoneGoals() {
    const [inputValue, setInputValue] = useState("");
    const [canContinue, setcanContinue] = useState(false);

    const handleNewAccomplishement = (event: any) => {
        setInputValue(event.target.value);
        setcanContinue(true);
    }
    useEffect(() => {
        const gettingInputId = document.getElementById("inputOfAccomplishements");
        if (gettingInputId != null) {
            gettingInputId.addEventListener("keyup", (event) => {
                const keyCode = event.keyCode;
                if (keyCode === 13 && canContinue) {
                    const gettingListId = document.getElementById("listOfAccomplishements");
                    const newInsert = document.createElement("li");
                    newInsert.classList.add("notion");
                    console.log("inputValue", inputValue)
                    newInsert.textContent = "-" + inputValue;
                    gettingListId?.appendChild(newInsert);
                    setInputValue("");
                }
            })
        }
    }, [])


    return (
        <div id='doneGoals'>
            <div id='mainLabel'>
                <label htmlFor="insertYouAchievemnt">Insert your today's accomplishements</label><br />
                <input type="text" id='inputOfAccomplishements' placeholder="Today's win right here" onChange={handleNewAccomplishement} />
            </div>
            <ul id='listOfAccomplishements'>
                <li className="notion">(example)-Made my home work</li>
            </ul>
        </div>
    )

}