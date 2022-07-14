import moment from "moment"

const Motion = ({dog,dogData}) => {

    if(!dog || !dogData.motion && dogData.motion.length === 0) return;
    const birthDate = moment(dog.birth);
    const today = moment()
    const monthsOld = today.diff(birthDate,"months")
    console.log("odgig",monthsOld)

    let object = null
    for(let i=0; i<dogData.motion.length; i++) {
        console.log(dogData)
        if(dogData.motion[i].monthsOld <= monthsOld ) {
            object = dogData.motion[i]
            console.log(object)
        }
        else {
            break;
        }
    }
    if(!object) object = dogData.motion[-1]

    return (
        <div className="bg-teal-50 rounded-md text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
                <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div>
                    <p className="font-bold">Rekommenderad motion - {object?.movement}</p>
                    <p className="text-sm">{object?.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Motion

