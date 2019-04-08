const user = {
    _id: "1",
    name: "rddv",
    email: "rddv88@gmail.com",
    picture: ""
}

module.exports = {
    Query: {
        me: () => user
    }
}