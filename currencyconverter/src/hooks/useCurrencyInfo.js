import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;



// import { useEffect,useState } from "react";
//  async function  useCurrencyInfo(currency){
//    const [data,setData] = useState({})
//      useEffect(() => {
//     fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
//     .then((res) => res.json)
//     .then((res) => setData(res[currency]) )
//     console.log(data);
//     },[currency])
//     console.log(data);
//     return data
// }
// export default useCurrencyInfo;


// import { useEffect, useState } from "react";

// async function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
//       .then((res) => res.json())
//       .then((res) => {
//         setData(res[currency]);
//         console.log(res[currency]); // Log the updated data
//       })
//       .catch((error) => {
//         console.error("Error fetching currency data:", error);
//       });
//   }, [currency]);

//   return data;
// }

// export default useCurrencyInfo;
