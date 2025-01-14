// Code Keypad Component Here

function Keypad (){
    function changePassword() {
        console.log('Entering password...')
    }
    return (
        <div>
            <label for="password">Password: </label>
            <input
                id="password" 
                type='password' 
                onChange={changePassword}
            ></input>
        </div>
    )
}

export default Keypad;