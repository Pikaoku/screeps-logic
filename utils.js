/**
 * @param {Creep} creep
 * @param {keyof Creep} action
 *
 * */
function act_or_approach(creep, target, action, ...params = {}) {
    return (
        creep[action](target, ...params) !== ERR_NOT_IN_RANGE ||
        creep.moveTo(target, {
            visualizePathStyle: visualize ? { stroke: '#ffaa00' } : null,
        })
    )
}

export default act_or_approach
