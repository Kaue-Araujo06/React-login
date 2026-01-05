import "./AuthButton.css"


function AuthButton({provider}) {

const PROVIDERS = {

    Google: {
        label: "Google"
    },
    Apple: {
        label: "Apple"
    }

}

const currentProvider = PROVIDERS[provider]

    return (

        <div className="button-container">

        <button className="AuthButton" type="button">

            Continue with {currentProvider.label}

        </button>

        </div>

    )
}

export default AuthButton