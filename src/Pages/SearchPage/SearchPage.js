import React from 'react'
import useGoogleSearch from '../../useGoogleSearch'
import { useStateValue } from '../../StateProvider'
import './SearchPage.css'



function SearchPage() {
 const [{ term }, dispatch] = useStateValue()
 const { data } = useGoogleSearch(term)

 // https://developers.google.com/custom-search/v1/using_rest

 // https://cse.google.com/cse/create/new
 console.log(data)
 return (
  <div className="searchPage">
   <div className="searchPage__header">
    {term}
   </div>
   <div className="searchPage__result">

   </div>
  </div>
 )
}

export default SearchPage
