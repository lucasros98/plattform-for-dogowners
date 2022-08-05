import axios from "axios"
import { useEffect, useState } from "react"
import Chart from "../components/Charts/Chart";
import userEndpoints from "../data/userEndpoints"

const Stats = () => {
    const [loading, setLoading] = useState(true)
    const [weightData, setWeightData] = useState([])
    const [activityData, setActivityData] = useState([])


    const getData = async () => {
        try {
            let res = await axios.get(userEndpoints.quizzesURL)
            console.log(res.data)

            if (res.data && res.data.user) {
                setLoading(false)

                const {user,dog,dogData} = res.data
                if(!dog.updates) return;

                const updates = dog.updates;
                const _weightData =  updates.map(({ date: date, weight: value }) => ({ date:new Date(date).toLocaleDateString(), value:value }));
                setWeightData(_weightData)   

                const _activityData =  updates.map(({ date: date, activityTime: value }) => ({ date:new Date(date).toLocaleDateString(), value:value }));
                setActivityData(_activityData)             
            }
            else {
                //error
                throw Error("Error")
            }

        }
        catch (err) {

        }
    };

    useEffect(() => {
        getData()
    }, []);


    if (loading) return <div>Loading..</div>

    // Show the user. No loading state is required
    return (
        <div className="bg-gray-100 h-full min-h-screen	">
            <div className="container m-auto px-5 py-8">
                <h1 className="mb-4 text-4xl font-extrabold">Följ din hunds utveckling</h1>
                <hr className="mb-6"/>
                <div className="bg-white container rounded-xl p-5 shadow-md mb-8">
                <h2 className="mb-6 ml-3 text-2xl font-extrabold text-gray-700">Viktutveckling</h2>
                  <Chart chartData={weightData} />
                </div>
                <div className="bg-white container rounded-xl p-5 shadow-md">
                <h2 className="mb-6 ml-3 text-2xl font-extrabold text-gray-700">Rörelse per dag</h2>
               <Chart chartData={activityData} />
                </div>
            </div>
        </div>

    )
}


export default Stats