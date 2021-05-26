function isEmpty(value) {
    return (
        ((typeof (value)) === 'undefined') ||
        value === undefined ||
        value === null ||
        value === false ||
        ((typeof value) === 'object' && Object.keys(value).length === 0) ||
        ((typeof value) === 'string' && value.trim().length === 0)
        // || isNaN(value)
    );
}
export default isEmpty; // client-side
// module.exports = isEmpty; // server-side