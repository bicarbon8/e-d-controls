import { Input } from "./input";

export module Find {
    export function inObject(obj: any, keys: string): any {
        let result: any = null;
        let keysArray: string[] = keys.split('.');
        let currentKey: string = keysArray.shift();

        if (currentKey.length > 0) {
            switch(typeof obj) {
                case "object":
                    result = inObject(obj[currentKey], keysArray.join('.'));
                    break;
                default:
                    result = null;
                    break;
            }
        } else {
            result = obj;
        }
        return result;
    }

    export function gamePadInput(obj: any, keys: string): Input {
        let container = inObject(obj, keys);
        let input: Input = null;
        let actual = null;
        if (container['binding']) {
            let binding = container['binding'];
            if (binding["@key"].match(/.*(gamepad).*/ig)) {
                actual = binding;
            }
        } else if (container['primary']) {
            let primary = container['primary'];
            if (primary["@key"].match(/.*(gamepad).*/ig)) {
                actual = primary;
            }
            if (!actual) {
                let secondary = container['secondary'];
                if (secondary["@key"].match(/.*(gamepad).*/ig)) {
                    actual = secondary;
                }
            }
        }
        if (actual) {
            input = {
                keys: [actual["@key"]],
            };
            if (actual['modifier']) {
                // console.info('found modifier(s)');
                if (Array.isArray(actual['modifier'])) {
                    // console.info('modifier is an array...');
                    let modifiers = actual['modifier'] as [];
                    for (var i=0; i<modifiers.length; i++) {
                        input.keys.push(modifiers[i]["@key"]);
                    }
                } else {
                    // console.info('modifier is a single value');
                    input.keys.push(actual['modifier']["@key"]);
                }
            }
        }
        return input;
    }
}