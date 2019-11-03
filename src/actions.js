export const ADD_NAME = (name) => {
    return {
        type: "ADD_NAME",
        name
    }
}
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
export const ADD_DESCRIPTION = (description) => {
    return {
        type: "ADD_DESCRIPTION",
        description
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
export const ADD_RECIPE = () => {
    return {
        type: "ADD_RECIPE",
    }
}