import _ from "lodash";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
  
function Statistics() {

    // treenit
    const [trainings, setTrainings] = useState([]);

    // hae treenit
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    };

    // useEffect jolla haetaan treenit
    useEffect(() => fetchData(), []);
    console.log(trainings); // tarkistetaan mitä saatiin vastaukseksi

    // jaetaan treenit ryhmittäin aktiviteetin mukaan
    const grouped = trainings.reduce((object, item) => {
        if (!object[item.activity]) {
            object[item.activity] = [];
        }      
        object[item.activity].push(item);
        return object;
    }, {});
    
    // käydään ryhmittäin jaetut treenit läpi ja luodaan jokaisesta treeniolio joka voidaan antaa kaaviolle
    let data = []
    for (let [activity, trainings] of Object.entries(grouped)) {
        let duration = _.sumBy(trainings, "duration");
        data.push(
            {
                "activity": activity,
                "duration": duration
            });
        }
    
    // BarChart täältä: https://recharts.org/en-US/examples/SimpleBarChart
    return (
        <BarChart
            width={700}
            height={500}
            data={data}
            margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 15
            }}
        >
            <CartesianGrid strokeDasharray="0 0" />
            <XAxis dataKey="activity">
                <Label value="Duration of each activity in minutes" offset={0} position="bottom" />
            </XAxis>
            <YAxis />
            <Tooltip />    
            <Bar dataKey="duration" fill="#c286ac" />
        </BarChart>
    );    

}

export default Statistics;