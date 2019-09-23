import { Entity } from "definitions/game";
import { approach_target_direct } from "./HeroMove";

let combat_mode: boolean = true;
let target: Entity;

export function autocombat() {
		
	if(is_combat_ended()) return;
	
	acquire_nearest_target();
	
	approach_and_attack(target)
}

export function toggle_combat() {
	combat_mode ? combat_mode = false : combat_mode = true;	
}

function is_combat_ended() {
	return (!combat_mode || character.rip || is_moving(character));
}

function approach_and_attack(target: Entity) {
    if(!in_attack_range(target))
	{
		approach_target_direct(target);
	}
	else if(can_attack(target))
	{
		auto_attack(target);
	}
}

function auto_attack(target: Entity) {
	set_message("AutoAttack");
	attack(target);
}

function acquire_nearest_target() {
	target=get_targeted_monster();
	
	if(!target)
	{
		set_message("Seeking...");
		
		target=get_nearest_monster({min_xp:100,max_att:120});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
}