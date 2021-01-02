import React, { useState, useEffect } from 'react'
import API_KEY from './key'

//https://cse.google.com/cse/setup/basic?cx=838b3564c133014fc
const CONTEXT_KEY = "838b3564c133014fc"


//custom hook
const useGoogleSearch = (term) => {
 const [data, setData] = useState(null)

 useEffect(() => {
  const fetchData = async () => {
   fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then(res => res.json()).then(result => {
    setData(result)
   })
  }
  fetchData()
 }, [term])

 return { data }
}
export default useGoogleSearch