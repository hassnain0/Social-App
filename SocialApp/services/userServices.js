import axios from 'axios';

export const getUserData = async (userId) => {
    try {

        const APIURI = `http://192.168.56.1:3000/users/${userId}`;
        const response = await axios.get(APIURI);

        if (response.status == 200)
            return {
                success: true,
                data: response.data,
            }
        else {
            return {
                success: false,
                msg: "User Data Not Found"
            };
        }

    } catch (error) {

        return {
            success: false,
            msg: error?.message
        };
    }
};


// export const updateUserData = async (userId, data) => {
//     try {
//         const { error, data } = await supabase.from("users").update(data).eq('id', userId).single();

//         if (error) {
//             return { sucess: false, msg: error?.message };
//         }
//         return {
//             sucess: true, data
//         }
//     }
//     catch (error) {
//         console.log("Get Error", error);
//         return { sucess: false, msg: error?.message };
//     }
// }