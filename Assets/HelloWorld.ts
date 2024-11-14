import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class NewTypescript extends ZepetoScriptBehaviour {

    Start() {    
        console.log(`log : Hello World`);
        console.warn(`warn : Hello World`);
        console.error(`error : Hello World`);
    }

}