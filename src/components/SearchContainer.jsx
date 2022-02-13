import React, {useState} from 'react'
import '../styles/SearchContainer.scss'
import { useNavigate } from 'react-router-dom';
import { allCategories } from '../helpers/promises';


const SearchContainer = () => {
    const [search, setSearch] = useState('')
    let navigate = useNavigate();

    const redirectToSearch = () =>{
        console.log("search " + search)
        if (search == '') {
            navigate('/')
        }else{
            navigate(`/search/${search}`)
        }
    }

  return (
    <div className='SearchContainer'>
        <div className='search-content'>
            <button className='btn-back' onClick={() => navigate(-1)}>
                    Go back
            </button>
            <div className='search-bar'>
                <input list="categories" onChange={(event) => setSearch(event.target.value)} placeholder='Category, Author, Title...'/>
                <datalist id='categories'>
                    {allCategories.map((cat) =>(
                        <option value={cat} key={cat}>
                        </option>
                    ))}
                </datalist>
                <button className='btn-search' onClick={()=> redirectToSearch()}>
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchContainer