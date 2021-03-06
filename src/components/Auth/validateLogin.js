export default function validateLogin(values) {
    let errors = {}

    //Email errors
    if(!values.email) {
        errors.email = "Email required!"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email"
    }
    //Password errors
    if(!values.password) {
        errors.password = "PAssword required"
    } else if(values.password.length < 6) {
        errors.password = "PAssword required more than 6 charackters"
    }

    return errors;
}