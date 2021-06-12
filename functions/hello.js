exports.handler = async function(e, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name : "Baemhyuk",
            age: 26,
            email: "mh03250@gmail.com"
        })
    }
}