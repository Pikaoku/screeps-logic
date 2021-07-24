/** @param {Creep} creep **/
function roleBuilder(creep) {
    const isEmpty = creep.store[RESOURCE_ENERGY] === 0
    const isFull = creep.store.getFreeCapacity() === 0

    const targets = creep.room.find(FIND_CONSTRUCTION_SITES)
    const sources = creep.room.find(FIND_SOURCES)

    const canBuild = !isEmpty && targets.length > 0
    const canRefuel = targets.length > 0

    if (canBuild) {
        creep.build(targets[0]) !== ERR_NOT_IN_RANGE ||
            creep.moveTo(targets[0], {
                visualizePathStyle: { stroke: '#ffffff' },
            })
        creep.say('🚧 enroute to build')
    }

    const shouldRefuel = canRefuel && (isEmpty || (!isEmpty && !canBuild))

    if (shouldRefuel) {
        creep.harvest(sources[0]) !== ERR_NOT_IN_RANGE ||
            creep.moveTo(targets[0], {
                visualizePathStyle: { stroke: '#ffffff' },
            })
        creep.say('🔄 enroute to harvest')
    }
}

export default roleBuilder
