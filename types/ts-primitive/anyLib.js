const history = [];

export default {
    push(...args) {
        history.push(args);
    },
    get() {
        return history;
    }
}