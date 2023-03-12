export const index = (arr, param, paramToFind) =>
    arr.findIndex((e) => e[param] === paramToFind)

export const spliceArr = (arr, indx) => {
    arr.splice(indx, 1)
}

export default { index, spliceArr }
