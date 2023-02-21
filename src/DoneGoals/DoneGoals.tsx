import { useEffect, useState } from 'react'
import './css/DoneGoals.css'
export default function DoneGoals() {
    useEffect(() => {
        const gettingInputId = document.getElementById("inputOfAccomplishements");
        if (gettingInputId != null) {
            const inputOfAccomplishements = gettingInputId.addEventListener("keyup", (event) => {
                const keyCode = event.keyCode;
                if (keyCode === 13) {
                    const gettingListId = document.getElementById("listOfAccomplishements");
                    const newInsert = document.createElement("li");
                    newInsert.classList.add("notion");
                    newInsert.textContent = "-" + gettingInputId.value;
                    gettingListId?.appendChild(newInsert);
                }
            })
        }
    }, [])


    return (
        <div id='doneGoals'>
            <div id='mainLabel'>
                <label htmlFor="insertYouAchievemnt">Insert your today's accomplishements</label><br />
                <input type="text" id='inputOfAccomplishements' placeholder="Today's win right here" />
            </div>
            <ul id='listOfAccomplishements'>
                <li className="notion">-Made my home work</li>
                <li className="notion">-Made my home work</li>
            </ul>
        </div>
    )

}