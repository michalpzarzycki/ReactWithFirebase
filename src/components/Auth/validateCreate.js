export default function validateCreate(values) {
    let errors = {}

    //Email errors
    if(!values.description) {
        errors.description = "Description required!"
    } else if(values.description.length < 5) {
        errors.description = "At leeast 5 chars"
    }
    //Password errors
    if(!values.url) {
        errors.url = "url required"
    } else if(!/^(ftp|http|https):\/\/[^ '']+$/.test(values.url)) {
        errors.url = "Bøédny url"
    }

    return errors;
}