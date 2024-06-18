const Search = ({stateList, city, handleSelect}) => {


    return(
        <div>
            <label for="state">State</label>

            <select name="state" id="state" onChange={handleSelect}>
                {stateList.map((value,index)=>(
                    <option key={value+index} value={value}>{value}</option>
                ))}
                
            </select>

            <label for="city">City</label>

            <select name="city" id="city" onChange={handleSelect}>
                {city && city.map((value,index)=>(
                        <option key={value+index} value={value}>{value}</option>
                    ))}
            </select>

            <button id="search_btn" onClick={handleSelect}>Search</button>
        </div>
    )
}

export {Search}