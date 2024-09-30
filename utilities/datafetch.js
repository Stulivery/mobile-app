import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RegUrl, sendOtpurl, verifyotpurl } from "../endpoints/endpoint";

export const VerifyEmail = async (email,setErrorMsg, setshowindicator, setCurrentStep) => {
  // Validate the inputs


  try {
    setshowindicator(true); // Show the loading indicator
    const data = { email }; // Payload for the API
    console.log(data);

    // Send POST request to the API
    const response = await axios.post(sendOtpurl, data);

    // Check for valid response status
    if (response.status === 201 || response.status === 200 || response.status === 203) {
      const tokenotp = response.data.otptoken; // Extract OTP token from response
      await AsyncStorage.setItem("otptoken", tokenotp); // Store OTP token in AsyncStorage
      setErrorMsg(""); 
      setCurrentStep(1)
      setshowindicator(false)
     // Clear any previous error message
    }
  } catch (error) {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error response:", error.response.data);
      setErrorMsg(error.response.data.error || "Something went wrong, please try again.");
    } else if (error.request) {
      // Request was made, but no response received
      console.error("Error request:", error.request);
      setErrorMsg("No response from the server. Please check your network connection.");
    } else {
      // Other errors
      console.error("Error message:", error.message);
      setErrorMsg("An unexpected error occurred. Please try again.");
    }
  } 
  finally{
    setshowindicator(false)
  }
};

export const SendOtpandtoken = async (otp, setErrorMsg, setshowindicator, setCurrentStep) => {
    try {
      // Start showing the indicator when the request begins
      setshowindicator(true);
  
      // Retrieve the OTP token from AsyncStorage
      const tokenotp = await AsyncStorage.getItem('otptoken');
      console.log('Token:', tokenotp);
  
      // Check if the token exists, if not, show an error message
      if (!tokenotp) {
        setErrorMsg('Invalid Token');
        setshowindicator(false); // Hide the indicator in case of an error
        return;
      }
  
      // Verify that OTP is provided
      if (!otp || otp.trim() === "") {
        setErrorMsg("OTP cannot be empty.");
        setshowindicator(false);
        return;
      }
  
      // Prepare the payload for the request
      const data = { otp }; 
      console.log('Payload:', data); // Debugging statement to verify the OTP payload
  
      // Make the POST request to verify OTP
      const response = await axios.post(verifyotpurl, data, {
        headers: {
         "authorization":`Bearer ${tokenotp}`,
          "Content-Type": "application/json",
        },
      });
  
      // Check for a successful response
      if (response.status === 201 || response.status === 200 || response.status === 203) {
        console.log('Response data:', response.data);
        setErrorMsg(''); // Clear any previous error message
        setshowindicator(false)
        await AsyncStorage.removeItem('otptoken'); 
        return setCurrentStep((prev)=>prev+1); // Move to the next step (e.g., successful verification)
       
        // Remove the OTP token after success

      }
  
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        setErrorMsg(error.response.data.error || 'Something went wrong, please try again.');
      } else if (error.request) {
        // Request was made, but no response received
        console.error('Error request:', error.request);
        setErrorMsg('No response from the server. Please check your network connection.');
      } else {
        // Other errors
        console.error('Error message:', error.message);
        setErrorMsg('An unexpected error occurred. Please try again.');
      }
    } finally {
      // Hide the indicator after the process finishes
      setshowindicator(false);
    }
  };
  export const InsertReg=async(Name,Phonenumber,email,Password,Address,GenderSelectOption,StudentId,roleSelectOption)=>{
    try{
        setshowindicator(true);
        const data={Name,Phonenumber,email,Password,Address,GenderSelectOption,StudentId,roleSelectOption}
         // Make the POST request to verify OTP
      const response = await axios.post(RegUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Check for a successful response
      if (response.status === 201 || response.status === 200 || response.status === 203) {
        console.log('Response data:', response.data);
        setErrorMsg(''); // Clear any previous error message
        setshowindicator(false)
        await AsyncStorage.removeItem('otptoken'); 
        return setCurrentStep((prev)=>prev+1); // Move to the next step (e.g., successful verification)
       
        // Remove the OTP token after success

      }



    }catch(error){
    if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response.data);
        setErrorMsg(error.response.data.error || 'Something went wrong, please try again.');
      } else if (error.request) {
        // Request was made, but no response received
        console.error('Error request:', error.request);
        setErrorMsg('No response from the server. Please check your network connection.');
      } else {
        // Other errors
        console.error('Error message:', error.message);
        setErrorMsg('An unexpected error occurred. Please try again.');
      }
    } finally {
      // Hide the indicator after the process finishes
      setshowindicator(false);
    }

  }
  