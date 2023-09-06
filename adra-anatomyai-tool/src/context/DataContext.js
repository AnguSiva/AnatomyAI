import { createContext, useState } from "react";


const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [openButton, setOpenButtton] = useState(true)

    const getOpenButton = () => {
        setOpenButtton(false)
    }
    const getCloseButton = () => {
        setOpenButtton(!openButton);
    }

    return(
        <DataContext.Provider value={{
            openButton, getOpenButton, getCloseButton
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext  
