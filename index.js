Object.assign(Object.prototype, {
    log: function () {
        console.log(this);
        return this;
    }
})