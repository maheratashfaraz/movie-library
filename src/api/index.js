import axios from 'axios'

const baseUrl = 'https://my-json-server.typicode.com';

export const getTimeRangeData = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/alb90/aieng-tech-test-timeseries/data`);
        return data;
    } catch (err) {
        return "Error while retreving time series data";
    }
}

export const getMovies = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/alb90/aieng-tech-test-assets/data`);
        return data;
    } catch (err) {
        return "Error while retreving list of movies";
    }
}
