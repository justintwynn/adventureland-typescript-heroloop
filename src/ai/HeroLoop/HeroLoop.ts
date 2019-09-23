import { autocombat } from "./HeroCombat";
import { buy_item } from "./HeroShop";

const TICK: number = 1000/4;
let attack_mode: boolean = true;
let actions: any = [];

actions.push(use_hp_or_mp);
actions.push(loot);
actions.push(autocombat);
actions.push(buy_item({name:'hpot0'}, 1))

export function HeroLoopGo() {
	setInterval(() => {
		actions.forEach((action: any, args: object[]) => {
			action(args);
		});		
	},TICK)	
}