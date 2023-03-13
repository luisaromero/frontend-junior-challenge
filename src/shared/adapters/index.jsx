export const index = (arr, param, paramToFind) =>
    arr.findIndex((e) => e[param] === paramToFind)

export const spliceArr = (arr, indx) => {
    arr.splice(indx, 1)
}

export const countItems = (todos, param) => {
    let count = 0
    todos.map((e) => e[param] === true ? count = count + 1 : null)
    return count
}

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

export default { index, spliceArr, randomNumber }
