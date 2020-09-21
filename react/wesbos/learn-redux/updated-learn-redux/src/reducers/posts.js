// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of the current state


function posts(state = [], action){
    console.log("The post will change");
    switch (action.type) {
        case "INCREMENT_LIKES":
            console.log("incrementing likes");
            // return the updated starte
            const i = action.index;
            return [
                ...state.slice(0, i), //before the one we are updating
                {
                    ...state[i],
                    likes: state[i].likes +10
                },
                ...state.slice(i + 1), //after the one we are updating
            ]
        default:
            return state;
    }
}

export default posts;