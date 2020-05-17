import React from 'react';
import './App.css';
import * as ReactBoooStrap from 'react-bootstrap';

const App = () =>  {
  const provinces =[
      {province: "Limpopo" , positive: "57",recovered:"36" ,deaths:"3" },
      {province: "Gauteng" , positive: "11",recovered:"5",deaths:"24" },
      {province: "Kwazulu Natal" , positive: "1482",recovered:"795" ,deaths:"45" },
      {province: "Eastern Cape" , positive: "1662",recovered:"643" ,deaths:"31" },
      {province: "Free State" , positive: "151",recovered:"108" ,deaths:"8" },
      {province: "North west" , positive: "63",recovered:"28" ,deaths:"28" },
      {province: "Western Cape" , positive: "7798",recovered:"2857" ,deaths:"137"},
      {province: "Mpumalanga" , positive: "67",recovered:"44" ,deaths:"0" },
      {province: "Northern Cape" , positive: "34",recovered:"20" ,deaths:"0" },
      {province: "TOTAL" , positive: "--",recovered:"--" ,deaths:"--" },
  ]
  const renderLocation =(province,index) =>{
    return(
      <tr key={index}>
        <td>{province.province}</td>
        <td>{province.positive}</td>
        <td>{province.recovered}</td>
        <td>{province.deaths}</td> 
      </tr>
    )
  }

  return (
    <div className="App">
      <ReactBoooStrap.Table >
        <thead>
          <th>PROVINCES</th>
          <th>CASES</th>
          <th>RECOVERED</th>
          <th>DEATHS</th>
        </thead>

      <tbody>
      {provinces.map(renderLocation)}
      </tbody>
      
      </ReactBoooStrap.Table>
    </div>
  );
}

export default App;
