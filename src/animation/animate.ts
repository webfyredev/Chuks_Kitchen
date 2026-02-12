export const scrollUpEffect = {
    initial : {opacity : 0, y : 30},
    whileInView : {opacity : 1, y : 0},
    transition : {duration : 0.5},
    exit : {opacity : 0, y : 30}
};
export const scrollLeftEffects = {
    initial : {opacity : 0, x : -30},
    whileInView : {opacity : 1, x : 0},
    transition : {duration : 1},
    exit : {opacity : 0, x : -30}
}
export const scrollRightEffects = {
    initial : {opacity : 0, x : 30},
    whileInView : {opacity : 1, x : 0},
    transition : {duration : 1},
    exit : {opacity : 0, x : 30}
}

export const buttonScaleEffects = {
    whileHover: {scale : 1.05},
    whileTap : {scale : 0.95}
}