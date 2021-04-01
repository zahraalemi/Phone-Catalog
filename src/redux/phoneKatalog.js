import { createSlice, nanoid } from '@reduxjs/toolkit';
const phoneSlice = createSlice({
    name : "phoneNumber",
    initialState:{
        listNumber:[
            {
                name : "Dag",
                number: "07312312322"
            },
            {
                name : "Dan",
                number: "07599912323"
            },
            {
                name : "åke",
                number: "07256776512"
            },
            {
                name : "Yvoone",
                number: "0737833378"
            },
            {
                name : "Anneli",
                number: "07398765432"
            }
        ]
    },

    

    reducers: {
        addPerson: (state,action)=>{
            state.listNumber.push(action.payload)
        },

        /* changeNum : ( state ) =>{
            state.number = `+46 ${state.number.slice(1)}`
        } */
    }
});



const{ actions, reducer } = phoneSlice;
export const { addPerson , changeNum} = actions;
export default reducer;
