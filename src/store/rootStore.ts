import {ShowStore} from "./showStore/ShowStore";

export class RootStore {
    showStore: ShowStore

    constructor() {
        this.showStore = new ShowStore(this)
    }
}

const rootStore = new RootStore();

export default rootStore;
export type StoreType = RootStore;
