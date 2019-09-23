import { ItemInfo } from "definitions/game";

const HP_SMALL: ItemInfo = {name: 'hpot0'};


export function restock_potions(hp_potion: ItemInfo, mp_potion: ItemInfo, pots_minimum: number, quantity: number) {
  let hppot = find_item(i => i.name == hp_potion)[1];
  let mppot = find_item(i => i.name == mp_potion)[1];
  if ((!hppot || hppot.q < pots_minimum)) {
    buy(hp_potion, quantity);
    set_message("Buying HP pots.");
  }
  if ((!mppot || mppot.q < pots_minimum)) {
    buy(mp_potion, quantity);
    set_message("Buying MP pots.");
  }
}


function find_item(filter: (arg0: any) => boolean) {
  for (let i = 0; i < character.items.length; i++) {
      let item = character.items[i];

      if (item && filter(item))
      return [i, character.items[i]];
  }
}

export function buy_item(item: ItemInfo, quantity: number) {
  buy(item, quantity);
  set_message("Buying " + item.name);
}