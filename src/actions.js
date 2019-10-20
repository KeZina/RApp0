export const ADD_INGREDIENTS = (ingredient) => {
    return {
        type: "ADD_INGREDIENTS",
        ingredients: [
            {
                ingredient,
                id: Math.round(Math.random() * 1e16)
            }
        ],
    }
}
export const ADD_DIRECTION = (step) => {
    return {
        type: "ADD_DIRECTION",
        direction: [
            {
                step,
                id: Math.round(Math.random() * 1e16)
            }
        ],
    }
}
export const REMOVE_INGREDIENTS = (id) => {
    return {
        type: "REMOVE_INGREDIENTS",
        id
    }
}
export const REMOVE_DIRECTION = (id) => {
    return {
        type: "REMOVE_DIRECTION",
        id
    }
}