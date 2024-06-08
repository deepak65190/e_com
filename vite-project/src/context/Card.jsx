import { createContext, useState, useContext } from "react";

// Create a context with default value as null
export const CardContext = createContext(null);

// Custom hook to use the CardContext
export const useCard = () => {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error("useCard must be used within a CardProvider");
    }
    const { cardData, setCardData } = context;
    return [cardData, setCardData];
}

// Context provider component
const CardProvider = ({ children }) => {
    const [cardData, setCardData] = useState([]);
    return (
        <CardContext.Provider value={{ cardData, setCardData }}>
            {children}
        </CardContext.Provider>
    );
}

export default CardProvider;
