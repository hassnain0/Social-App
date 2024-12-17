import axios from 'axios';
import { supabase } from '../lib/supabase';
export const getUserData = async (email) => {
    try {
        const APIURI = "http://192.168.56.1:3000/getUserData";
        const { data, error } = await axios.get(APIURI,)

        if (error) {
            return { success: false, msg: error?.message };
        }
        return {
            success: true, data: data,
        };

    } catch (error) {

        return { success: false, msg: error?.message };
    }
};


export const updateUserData = async (userId, data) => {
    try {
        const { error, data } = await supabase.from("users").update(data).eq('id', userId).single();

        if (error) {
            return { sucess: false, msg: error?.message };
        }
        return {
            sucess: true, data
        }
    }
    catch (error) {
        console.log("Get Error", error);
        return { sucess: false, msg: error?.message };
    }
}