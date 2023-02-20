import './css/DoneGoals.css'
export default function DoneGoals() {
    return (
        <div>
            <div>
                <div>
                    <label htmlFor="insertYouAchievemnt">Insert your today's accomplishements</label><br />
                    <input type="text" placeholder="Your win goes right here" />
                </div>
                <ul>
                    <li><span id="remove-notion1" className="removeButton">X</span> Made my home work</li>
                    <li><span id="remove-notion2" className="removeButton">X</span> Made my home work</li>
                </ul>
            </div>
        </div>
    )
}