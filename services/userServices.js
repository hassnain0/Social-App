import {supabase} from '../lib/supabase';

export const getUserData=async(userId)=>{
    try{
        const {data,error}=await supabase.from("users").select().eq('id',userId).single();

        if(error){
            return {sucess:false ,msg:error?.message};
        }
        return{
            sucess:true,data
        }
    }
    catch(error){
        console.log("Get Error",error);
        return {sucess:false,msg:error?.message};
    }
}

export const updateUserData=async(userId,data)=>{
    try{
        const {error}=await supabase.from("users").update(data).eq('id',userId).single();

        if(error){
            return {sucess:false ,msg:error?.message};
        }
        return{
            sucess:true,data
        }
    }
    catch(error){
        console.log("Get Error",error);
        return {sucess:false,msg:error?.message};
    }
}