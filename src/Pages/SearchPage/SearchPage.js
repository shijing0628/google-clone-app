import React from 'react'
import { useStateValue } from '../../StateProvider'
import './SearchPage.css'



function SearchPage() {
 const [{ term }, dispatch] = useStateValue()

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