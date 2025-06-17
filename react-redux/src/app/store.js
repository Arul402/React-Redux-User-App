import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlices'

const store=configureStore({
    devTools:true,
    reducer:{
        userInfo:userReducer
    }
})

export default store