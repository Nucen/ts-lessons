const isBirthdayData: boolean = true
const ageData: number = 40
const userNameData: string = "Jehor"

const creatError = (msg: string) => {
    throw new Error(msg)
}

const logBrtMsg = (isBirthday: boolean, age: number, userName: string): string => {
    if (isBirthday) {
        return `Congrats ${userName}, age: ${age + 1}`
    } else {
        return creatError("Error")
    }
}


logBrtMsg(isBirthdayData, ageData, userNameData);