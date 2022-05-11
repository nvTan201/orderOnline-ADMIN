const blueprints = ['create', 'update', 'find', 'destroy'];
const _ = require('lodash');
module.exports = async function (req, res, next) {
    let { query, params, options, method } = req;

    let { page, api, queryInput, select, skip, limit } = query;

    console.log({ page, api, queryInput, select, skip, limit });

    if (queryInput) {
        queryInput = JSON.parse(queryInput);
    } else {
        queryInput = {};
    }

    let input = queryInput;
    if (method == 'POST' || method == 'PATCH' || method == 'PUT') {
        input = req.body;
    }

    if (!page || !api) {
        return res.status(500).json({
            code: Err.CODE.FORBIDDEN,
            message: sails.__('Không tìm được trang'),
        });
    }

    var pageInfo = await Page.getPage(page);
    if (!pageInfo)
        throw {
            code: Err.CODE.FORBIDDEN,
            message: 'Không tìm được thông tin trang',
        };
};
