const total_exp = 517000000000
const additional = 30000000000
const target = 2000000000
const cost_rate = .01;
const gain_rate = 0.00000112511;

var gear_exp = 0;
var infusions = 0;
var current_exp = total_exp;

while (true) {
    cost = current_exp * cost_rate;
    gain = current_exp * gain_rate;
    if (gear_exp >= target) {
        break;
    }
    gear_exp += gain;
    current_exp -= cost;
    infusions += 1;

    current_exp += additional;
    }

console.log(`\n##### RESULTS #####`);
console.log(`For starting XP of ${total_exp}; with additional ${additional} XP after each infusion:`);
console.log(`It will take ${infusions} infusions to reach target gear XP of ${target}`);