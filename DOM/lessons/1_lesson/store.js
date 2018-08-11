class Store {
    
    
    constructor(initialState) {
        this._id = 0;
        this.state = {};

    }

    addRecord(data) {
        this.state[this._generateId()] = data;
    }

    _generateId() {
        return 'my_id_' + this._id++;
    }
}