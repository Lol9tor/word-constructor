const validator = {
    required: function (value) {
        return !!value;
    },
    length: function (value, from, to) {
        return from < value.length && value.length < to;
    },
    selected: function (value) {
        return !!value;
    },
    same: function (password, confirmPassword) {
        return !!confirmPassword && password === confirmPassword;
    }
};

export default validator;