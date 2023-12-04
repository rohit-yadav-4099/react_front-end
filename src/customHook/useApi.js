import{useEffect, useState } from 'react'

const useApi = () => {

    const [data, setData] = useState([])

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://react-backendapi.onrender.com/dataapi/reactblog");
        const json = await data.json()
        setData(json)
        
    }

  return {data}
}

export default useApi