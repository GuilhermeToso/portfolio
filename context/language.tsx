import React, {useState} from "react";

interface LanguageContextType {
    language: 'en' | 'pt';
    setLanguage: (language: 'en' | 'pt') => void;
}

const LanguageContext = React.createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {
    }
});

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [language, setLanguage] = useState<'en' | 'pt'>('en');

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

// Custom hook for using the language context
export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};