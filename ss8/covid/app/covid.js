import axios from "axios";

export default function Covid(covids) {
    return (
        <table>
            <thead>
            <tr>
                <th>Country</th>
                <th>City</th>
                <th>Deaths</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {
                covids.map((covid) => (
                    <tr key={covid.id}>
                        <td>{covid.country}</td>
                        <td>{covid.city}</td>
                        <td>{covid.deaths}</td>
                        <td>{covid.date}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
export const getStaticProps = async () => {
    // fetch dữ liệu từ file system, API, DB,...
    const res = await axios.get("https://api.covid19api.com/total/country/vietnam")

    // Giá trị của `props` sẽ được truyền tới component `Home`
    return {
        props: {
            covids: res.data
        }
    }
}

