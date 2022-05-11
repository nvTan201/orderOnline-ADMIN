module.exports = {
    friendlyName: 'Test',

    description: 'Test test.',

    inputs: {
        name: { type: 'string' },
        age: { type: 'number' },
    },

    exits: {},

    fn: async function (inputs) {
        try {
            let rs = await TestTable.find();
            console.log(inputs);
            return rs;
        } catch (error) {
            console.log(error);
        }
    },
};
