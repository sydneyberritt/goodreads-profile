import { createContext, useState } from 'react';
import Papa from 'papaparse';

// Create the context
export const BookDataContext = createContext(null);

// Create the provider: will provide parsed data to any components wrapped in it
export const BookDataProvider = ({children}) => {
    const [parsedData, setParsedData] = useState([]);
    
    const parseCsv = (file) => {
    // Parsing file data 
    Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                // Parsed Data in array format
                setParsedData(results.data);
            },
        });
    };

    return(
        <BookDataContext.Provider value = {{ parsedData, parseCsv }}>
        {children}
        </BookDataContext.Provider>
    )

}

