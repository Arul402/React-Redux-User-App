import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userSlices' // this import is handled all the reducer functions in slices this export --> "userSlices.reducer"
import studentReducer from '../slices/studentSlices'

const store=configureStore({
    devTools:true, // for the devtools in the browser it must be installed while it true
    reducer:{
        userInfo:userReducer,  // this userInfo is the name given by us and assign the userReducer to it.
        studentInfo:studentReducer
    }
})

export default store