var MyHashSet = function() {
  this.sets = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.sets.push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  // this.sets = this.sets.filter((item) => item != key);
  while (this.sets.indexOf(key) > -1) {
    var target = this.sets.indexOf(key)
    this.sets.splice(target, 1)
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.sets.indexOf(key) > -1
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
