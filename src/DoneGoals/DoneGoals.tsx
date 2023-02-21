import './css/DoneGoals.css'
export default function DoneGoals() {


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