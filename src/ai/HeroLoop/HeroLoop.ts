import { autocombat } from "./HeroCombat";
import { buy_item, maintain_stock, replenish_potions } from "./HeroShop";
import { ItemInfo } from "definitions/game";
import { ActionLoop, HeroAction, RepeatingAction } from "./HeroAction";

const TICK: number = 1;
let attack_mode: boolean = true;

let loop: ActionLoop = new ActionLoop();

loop.push(new RepeatingAction(use_hp_or_mp, 250));
loop.push(new RepeatingAction(loot, 250));
loop.push(new RepeatingAction(autocombat, 250));
//loop.push(new HeroAction(replenish_potions));
//actions.push(buy_item({name:'hpot0'}, 1))

export function HeroLoopGo() {
	setInterval(() => {
		if(loop.length() > 0) {
			let action = loop.shift();
			action ? action.invoke() : { };			
		}
	},TICK)	
}