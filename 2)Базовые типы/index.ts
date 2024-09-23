interface UserType {
    Name: string;
    isBirthday: boolean;
    age: number;
}

let User: UserType = {
    Name: "Vasya",
    isBirthday: true,
    age: 40,
};

if (User.isBirthday) {
    alert(`Congrats ${User.Name}, age: ${User.age + 1}`);
}