const validator = {
    required: function (value) {
        return !!value;
    },
    length: function (value, from, to) {
        return from <= value.length && value.length <= to;
    },
    selected: function (value) {
        return !!value;
    },
    same: function (password, confirmPassword) {
        return !!confirmPassword && password === confirmPassword;
    },
    isLatinLetter: function (value) {
        return /^[a-zA-Z]*$/.test(value);
    },


};

export default validator;