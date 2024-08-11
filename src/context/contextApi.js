import { useContext, useState, useEffect, createContext } from "react";
import { fetchDataFromApi } from "../utils/api"

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("New");

    const [mobileMenu, setmobileMenu] = useState(false)



    useEffect(() => {
        fetchSelectedCategotyData(selectedCategory)

    }, [selectedCategory])

    const fetchSelectedCategotyData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log("***********res*********", (contents))
            setSearchResults(contents)
            setLoading(false)


        })

    };


    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            selectedCategory,
            setSelectedCategory,
            mobileMenu,
            setmobileMenu
        }}
        >
            {props.children}

        </Context.Provider>
    )

}


