import React, { useState, useEffect, createContext } from "react";

import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) =>{
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const [selectCategories, setSelectCategories] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)


    useEffect(() => {
        fetchSelectedCategoryData(selectCategories);
    }, [selectCategories])

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) =>{
            console.log(contents)
            setSearchResult(contents)
            setLoading(false)
        })
    }

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResult,
            setSearchResult,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}