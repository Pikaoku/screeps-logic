import roleBuilder from './role.builder'
import act_or_approach from './utils/act_or_approach'

/** @param {Creep} creep **/
function roleHarvester(creep) {
    const creepIsFull = creep.store.getFreeCapacity() === 0
    const creepIsEmpty = creep.store[RESOURCE_ENERGY] === 0

    const sources = creep.room.find(FIND_SOURCES)
    const containers = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) =>
            structure.structureType == STRUCTURE_CONTAINER &&
            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0,
    })

    const canDeposit = !creepIsEmpty && containers.length > 0
    const canHarvest = !creepIsFull && sources.length > 0

    if (canHarvest) {
        const target = creep.pos.findClosestByPath(sources)
        act_or_approach(creep, target, creep.harvest)
        return creep.say('⚡ enroute to harvest')
    }

    if (canDeposit) {
        const target = creep.pos.findClosestByPath(containers)
        act_or_approach(creep, target, creep.transfer)
        return creep.say('🔋 enroute to store energy')
    }

    if (creepIsFull && containers.length === 0) {
        return roleBuilder(creep)
    }
}

export default roleHarvester
