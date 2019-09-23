import { HeroLoopGo } from "./HeroLoop/HeroLoop";

set_skillbar(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

map_key("1", "use_hp", "parent.start_runner();");
map_key("2", "use_mp");
map_key("8", "snippet", "parent.start_runner();");
map_key("9", "snippet", "parent.stop_runner();");
map_key("0", "snippet", 'load_code("' + character.ctype + '")');
game_log("To reload your code, first press 9 to stop the current AI, and then press 0 to reload the code.");


HeroLoopGo();