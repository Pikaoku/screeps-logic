import roleBuilder from './role.builder'
import act_or_approach from './utils/act_or_approach'

/** @param {Creep} creep **/
function roleUpgrader(creep, targetControllerLevel = 1) {
    const creepIsEmpty = creep.store[RESOURCE_ENERGY] == 0
    const creepIsFull = creep.store.getFreeCapacity() == 0

    const controller = creep.room.controller

    const canUpgrade = controller.level < targetControllerLevel

    if (controller.ticksToDowngrade < 50) {
        act_or_approach(creep, controller, creep.upgradeController)
        creep.say('🛠 ticking the controller')
    }

    if (canUpgrade && !creepIsEmpty) {
        act_or_approach(creep, controller, creep.upgradeController)
        creep.say('🔼 upgrading the controller')
    }

    return roleBuilder(creep)
}

export default roleUpgrader
