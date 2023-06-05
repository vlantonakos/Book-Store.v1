import React,{useEffect} from 'react'

const Books = () => {

  useEffect(() => {
    document.title = "Book Store | Books"
 }, []);

  return (
    <div>Books</div>
  )
}

export default Books