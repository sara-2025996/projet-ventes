import { createSlice } from "@reduxjs/toolkit";

const venteSlice = createSlice({
    name : "ventes",
    initialState : {
        liste:[],
    },
    reducers : {
        ajouter: (state,action)=>{
            state.liste.push(action.payload)
        },

        supprimer: (state,action)=>{
          state.liste=  state.liste.filter(f=>f.id !== action.payload.id)
        },

        update: (state,action)=>{
            const index= state.liste.findIndex(i=>i.id === action.payload.id)
            if(index !==-1){
                state.liste[index]=action.payload
            }
        }
    }

})
export const {ajouter,supprimer,update} =venteSlice.actions

export default venteSlice.reducer