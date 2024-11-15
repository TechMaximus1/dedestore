import React, {useEffect, useState} from 'react';
import Header from '../Components/LayOuts/Header';
import Page from '../Assets/Img/fe254d40961bb7551b1472de8b579e10.jpg';

export default function Home() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch("http://localhost:8000/api/productlist");
            let result = await response.json();
            setData(result);
            console.log(data);
        } catch (error) {
            console.log("Failed to fetch data", error);
        }
    }
        useEffect(()=>{
            fetchData();
        }, []);

    console.log(data)
 
    return(
        <>
        <Header/>

        <br/>
        <br/>
        <center>
        <h3>Welcome To DEDESTORE</h3>

        <img src={Page} alt="img"></img>
        </center>
        </>
    );
}
