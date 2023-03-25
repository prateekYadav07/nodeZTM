// one way
// module.exports = {
//     request : require('./request'),
//     response : require('./response')
// }

// other way: using spread operator
module.exports = {
    ...require('./request'),
    ...require('./response')
}