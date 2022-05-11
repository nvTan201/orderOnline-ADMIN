module.exports = {
    friendlyName: 'Test',

    description: 'Test test.',

    inputs: {},

    exits: {},

    fn: async function (inputs) {
        try {
            // let rs = await TestTable.find();
            return {
                a: 1,
                b: 2,
            };
        } catch (error) {
            console.log(error);
        }
    },
};
