import { configureStore,createSlice } from "@reduxjs/toolkit";

const HomeSluce = createSlice({
    name:'home',
    initialState:{
        name:'',
        message:'',
        email:'',
        phone:'',
        footer_padding:'144px 8vw 72px 8vw',
        img_display:'hidden'
    },
    reducers:{
        change_phone(state,action){
            return{
                ...state,
                phone:action.payload
            }
        },
        change_name(state,action){
            return{
                ...state,
                name:action.payload
            }
        },
        change_message(state,action){
            return{
                ...state,
                message:action.payload
            }
        },
        change_email(state,action){
            return{
                ...state,
                email:action.payload
            }
        },
        change_img_dispaly(state,action){
            return{
                ...state,
                img_display:action.payload
            }
        },
        change_footer_paddingz(state,action){
            return{
                ...state,
                footer_padding:action.payload
            }
        }
    }
})

export const change_home = HomeSluce.actions

const store = configureStore(
    {
        reducer:{
            home:HomeSluce.reducer
        }
    }
)

export default store