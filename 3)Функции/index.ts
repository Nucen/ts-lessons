const isBirthdayData: boolean = true
const ageData: number = 40
const userNameData: string = "Jehor"

// function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
//     if (isBirthday) {
//         return `Congrats ${userName}, age: ${age + 1}`
//     } else {
//         return "Error"
//     }
// }

const logBrtMsg = (isBirthday: boolean, age: number, userName: string): string => {
    if (isBirthday) {
        return `Congrats ${userName}, age: ${age + 1}`
    } else {
        return "Error"
    }
}


logBrtMsg(isBirthdayData, ageData, userNameData);