import { useEffect, useState } from "react";
import axios from "axios";

const VisitCount = () => {

    const [visitData, setVisitData] = useState(0);

    const postData = async () => {
        try {
            const response = await axios.post('https://counter-api.onrender.com/counter-api', {
                name: 'movie-app',
            });
            setVisitData(response.data.newData.visits);
            console.log("DATA", response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        postData();
    }, []);

    return (
        <div>
            <div style={{ color: 'white', padding: '1rem' }}>
                <h2 style={{ fontSize: '1rem' }}>Visit Count: {visitData}</h2>
                {/* <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{visitData}</p> */}
            </div>
        </div>
    )
}

export default VisitCount