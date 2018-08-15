class Store {


  constructor(initalState = []) {
    this._id = 0;
    this._state = {};
    initalState.forEach((data) => {
      this._addInnerRecord(data);
    });


    this._handlers = [];
  }

  _addInnerRecord(data) {
    data.id = this._id;
    this._state[this._generateId()] = data;
  }

  addRecord(data) {
    this._addInnerRecord(data);

    this.notifyListeners();
  }

  updateRecord(data) {
    const __innerID = data.__innerID;
    const keys = Object.keys(data);

    if (typeof this._state[__innerID] !== 'undefined') {

      keys.forEach(key => {
        this._state[__innerID][key] = data[key];
      });

      this.notifyListeners();
    }
  }

  getRecordById(recordId) {
    return { ...this._state[recordId], __innerID: recordId };
  }

  getRecords() {
    const fields = Object.keys(this._state);
    return fields.map(filedId => {
      return this.getRecordById(filedId);
    });
  }

  _generateId() {
    return 'my_id_' + this._id++;
  }

  subscribe(callback) {
    this._handlers.push(callback);
  }

  notifyListeners() {
    this._handlers.forEach((cb) => cb());
  }

}
