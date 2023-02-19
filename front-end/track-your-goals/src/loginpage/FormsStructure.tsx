function FormsStructure({ display }: any) {
    return (
        <div>
            <div>
                <label htmlFor="userName">Insert your name:</label><br />
                <input type="text" name="userName" id="userName" />
            </div>
            <div>
                <label htmlFor="userName">Insert a password:</label><br />
                <input type="text" name="userName" id="userName" />
            </div>
            <button type="button">{display}</button>
        </div>
    )
}

export default FormsStructure;