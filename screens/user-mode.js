import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, createContext, useEffect, useState } from 'react';
import { FetchdataUser, UpdateStatus } from '../utilities/datafetch';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userMode, setUserMode] = useState('user'); // default to 'user'
    const [Data,setData]=useState('')
    //get userdetails
    const fetchdata=async()=>{
        FetchdataUser(setData)
    }
    useEffect(()=>{
        fetchdata()
    },[])
    // Fetch the mode from AsyncStorage when component mounts
    const getUserModeFunction = async () => {
        try {
            const storedMode = await AsyncStorage.getItem('user-mode');
            if (storedMode) {
                setUserMode(storedMode); // set stored mode if exists
            }
        } catch (error) {
            console.error('Failed to get user mode from AsyncStorage:', error);
        }
    };

    useEffect(() => {
        getUserModeFunction(); // fetch user mode on component mount
    }, []);

    // Toggle between 'user' and 'delivery' mode
    const onChangeMode = async () => {
        const newMode = userMode === 'user' ? 'delivery' : 'user';
        setUserMode(newMode);
        try {
            console.log('ok')
            await UpdateStatus(newMode)
           // persist new mode
        } catch (error) {
            console.error('Failed to save user mode to AsyncStorage:', error);
        }
    };

    return (
        <UserContext.Provider value={{ userMode, onChangeMode,Data }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to access user mode and mode change function
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
