import axios from "axios";

export const signUp = async (data) => {
    const APIURI = "http://192.168.56.1:3000/signUp";
    try {

        const response = await axios.post(APIURI, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data === 'OK') {
            return true;
        }
    } catch (erro) {
        console.log("Error Occurs", erro)
    }
}

export const signIn = async (data) => {
    const APIURI = "http://192.168.56.1:3000/signIn";
    try {
        const response = await axios.post(APIURI, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response) {
            return response;
        }
    } catch (error) {
        console.log("Error Occurs");
        return false;
    }
}

export const updateUserData = async (userId, data) => {
    console.log("User Id",userId);
    const APIURI = `http://192.168.56.1:3000/api/users/${userId}`;
  const requestData={
    name: data.name,
    email:data.email,
    phone:data.phone,
    bio:data.bio,
    address:data.address,
  }
   
    try {
        const response = await axios.patch(APIURI,requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response) {
            console.log("Response")
            return response;
        }
    } catch (error) {
        console.log("Error Occurs",error);
        return false;
    }
}