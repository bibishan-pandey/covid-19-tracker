import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        console.log('Could not fetch the API data!!!');
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        return data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            // recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            reportDate: dailyData.reportDate
        }));
    } catch (e) {
        console.log('Could not fetch the API data!!!');
    }
}
