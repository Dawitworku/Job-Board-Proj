import { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyList = (props) => {

    const [company, setCompany] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/companies/")
            .then((res) => {
                setCompany(res.data);
                console.log("company data - " + res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
            company.map(data => (
                <ul key={data.name}>
                    <li>{data.name}</li>
                </ul>
            ))
    )}

export default CompanyList;