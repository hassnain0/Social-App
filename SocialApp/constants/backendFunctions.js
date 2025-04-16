import axios from "axios";

export const signUp = async (data) => {
    const APIURI = "http://192.168.56.1:3000/users/signUp";
    try {

        const response = await axios.post(APIURI, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data === 'OK') {
            return true;
        }
    } catch (erro) {}
}

export const signIn = async (data) => {

    const APIURI = "http://192.168.56.1:3000/users/signIn";
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

export const updateUserData = async (userId,data) => {
    const fileBaseUri = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
    });
    console.log("User ID ",userId);
    console.log("Data for Update",data)
    let imageData = decode(fileBaseUri);
    const APIURI = `http://192.168.56.1:3000/users/${userId}`;
    const requestData = {
        name: data.name,
        email: data.email,
        bio: data.bio,
        address: data.address,
        image: imageData,
    }

    try {
        const response = await axios.patch(APIURI, requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response) {
            return response;
        }
    } catch (error) {
        console.log("Error Occurs", error);
        return false;
    }
}