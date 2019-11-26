"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-03-26
 *
 * @description fetchDelete
 * @augments
 * @example
 *
 */

const fetchDelete = (url= ``, id="") => {
    let trueUrl = `${url}/${item}`;
    return fetch(trueUrl, {
        method: 'delete'
    })
    .then(res => res.json());
};


export default fetchDelete;

export {
    fetchDelete,
};
