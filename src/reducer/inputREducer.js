


const inputReducer = (state='',action)=>{


    if(action.type==='SET_INPUT'){
        return action.input
    }

    return ''
}

export default inputReducer