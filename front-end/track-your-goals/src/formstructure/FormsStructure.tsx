import './styles/FormsStructure.css'
function FormsStructure({ display }: any) {
    return (
        <div className='formsStructure'>
            <div className='titleForms'>
                Login Or Sign Up
            </div>
            <div>
                <label htmlFor="userName">Insert your name:</label><br />
                <input type="text" name="userName" id="userName" />
            </div>
            <div>
                <label htmlFor="userName">Insert a password:</label><br />
                <input type="text" name="userName" id="userName" />
            </div>
            <div className="center ">
                <button className='buttonForms' type="button">Login</button>
                <button className='buttonForms' type="button">Register</button>
            </div>
        </div>
    )
}

export default FormsStructure;