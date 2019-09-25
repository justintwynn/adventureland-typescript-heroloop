export class HeroAction {
    constructor(delegate: any, args?: any[]) {
        this.action = delegate;
        this.args = args;
    }

    action: any = () => {};
    args?: any[] = [];
    repeat: boolean = false;
    delay_in_ms: number = 250;

    invoke() {
        this.action(this.args ? this.args : null);
    }
}

export class RepeatingAction extends HeroAction {
    constructor(delegate: any, ms: number, args?: any[]) {
        super(delegate, args);
        this.repeat = true;
        if(ms) this.delay_in_ms = ms;
    }
}

export class ActionLoop {
    actions: HeroAction[] = [];

    push(action: HeroAction) {
        this.actions.push(action);
    }

    shift() {
        return this.actions.shift();
    }

    length() {
        return this.actions.length;
    }

    invoke() {
        if(this.actions.length > 0) {
            let action: HeroAction | undefined = this.actions.shift();
            
            if(action != undefined) {
                action.invoke();

                if(action.repeat) {
                    setTimeout(() => {
                        if(action) this.push(action);
                    }, action.delay_in_ms);
                }
            }
        }
    }
}



