var R = function(e, r) {
  return R = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, R(e, r);
};
function b(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  R(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function nt(e, r, t, n) {
  function i(o) {
    return o instanceof t ? o : new t(function(u) {
      u(o);
    });
  }
  return new (t || (t = Promise))(function(o, u) {
    function c(l) {
      try {
        s(n.next(l));
      } catch (p) {
        u(p);
      }
    }
    function a(l) {
      try {
        s(n.throw(l));
      } catch (p) {
        u(p);
      }
    }
    function s(l) {
      l.done ? o(l.value) : i(l.value).then(c, a);
    }
    s((n = n.apply(e, r || [])).next());
  });
}
function J(e, r) {
  var t = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, u;
  return u = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function c(s) {
    return function(l) {
      return a([s, l]);
    };
  }
  function a(s) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; u && (u = 0, s[0] && (t = 0)), t; )
      try {
        if (n = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done)
          return o;
        switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
          case 0:
          case 1:
            o = s;
            break;
          case 4:
            return t.label++, { value: s[1], done: !1 };
          case 5:
            t.label++, i = s[1], s = [0];
            continue;
          case 7:
            s = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (o = t.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
              t = 0;
              continue;
            }
            if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
              t.label = s[1];
              break;
            }
            if (s[0] === 6 && t.label < o[1]) {
              t.label = o[1], o = s;
              break;
            }
            if (o && t.label < o[2]) {
              t.label = o[2], t.ops.push(s);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        s = r.call(e, t);
      } catch (l) {
        s = [6, l], i = 0;
      } finally {
        n = o = 0;
      }
    if (s[0] & 5)
      throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function S(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function g(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), i, o = [], u;
  try {
    for (; (r === void 0 || r-- > 0) && !(i = n.next()).done; )
      o.push(i.value);
  } catch (c) {
    u = { error: c };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return o;
}
function x(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, i = r.length, o; n < i; n++)
      (o || !(n in r)) && (o || (o = Array.prototype.slice.call(r, 0, n)), o[n] = r[n]);
  return e.concat(o || Array.prototype.slice.call(r));
}
function w(e) {
  return this instanceof w ? (this.v = e, this) : new w(e);
}
function it(e, r, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(e, r || []), i, o = [];
  return i = {}, u("next"), u("throw"), u("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function u(f) {
    n[f] && (i[f] = function(v) {
      return new Promise(function(m, h) {
        o.push([f, v, m, h]) > 1 || c(f, v);
      });
    });
  }
  function c(f, v) {
    try {
      a(n[f](v));
    } catch (m) {
      p(o[0][3], m);
    }
  }
  function a(f) {
    f.value instanceof w ? Promise.resolve(f.value.v).then(s, l) : p(o[0][2], f);
  }
  function s(f) {
    c("next", f);
  }
  function l(f) {
    c("throw", f);
  }
  function p(f, v) {
    f(v), o.shift(), o.length && c(o[0][0], o[0][1]);
  }
}
function ot(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e[Symbol.asyncIterator], t;
  return r ? r.call(e) : (e = typeof S == "function" ? S(e) : e[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function n(o) {
    t[o] = e[o] && function(u) {
      return new Promise(function(c, a) {
        u = e[o](u), i(c, a, u.done, u.value);
      });
    };
  }
  function i(o, u, c, a) {
    Promise.resolve(a).then(function(s) {
      o({ value: s, done: c });
    }, u);
  }
}
function d(e) {
  return typeof e == "function";
}
function K(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var U = K(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function T(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
var I = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, i, o;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var c = S(u), a = c.next(); !a.done; a = c.next()) {
              var s = a.value;
              s.remove(this);
            }
          } catch (h) {
            r = { error: h };
          } finally {
            try {
              a && !a.done && (t = c.return) && t.call(c);
            } finally {
              if (r)
                throw r.error;
            }
          }
        else
          u.remove(this);
      var l = this.initialTeardown;
      if (d(l))
        try {
          l();
        } catch (h) {
          o = h instanceof U ? h.errors : [h];
        }
      var p = this._finalizers;
      if (p) {
        this._finalizers = null;
        try {
          for (var f = S(p), v = f.next(); !v.done; v = f.next()) {
            var m = v.value;
            try {
              G(m);
            } catch (h) {
              o = o != null ? o : [], h instanceof U ? o = x(x([], g(o)), g(h.errors)) : o.push(h);
            }
          }
        } catch (h) {
          n = { error: h };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (o)
        throw new U(o);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        G(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, e.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, e.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, e.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && T(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && T(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}(), W = I.EMPTY;
function X(e) {
  return e instanceof I || e && "closed" in e && d(e.remove) && d(e.add) && d(e.unsubscribe);
}
function G(e) {
  d(e) ? e() : e.unsubscribe();
}
var Z = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, L = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    var i = L.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, x([e, r], g(t))) : setTimeout.apply(void 0, x([e, r], g(t)));
  },
  clearTimeout: function(e) {
    var r = L.delegate;
    return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function z(e) {
  L.setTimeout(function() {
    throw e;
  });
}
function Q() {
}
function O(e) {
  e();
}
var q = function(e) {
  b(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, X(t) && t.add(n)) : n.destination = at, n;
  }
  return r.create = function(t, n, i) {
    return new F(t, n, i);
  }, r.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(t) {
    this.destination.next(t);
  }, r.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
}(I), ut = Function.prototype.bind;
function C(e, r) {
  return ut.call(e, r);
}
var ct = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        E(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        E(n);
      }
    else
      E(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        E(t);
      }
  }, e;
}(), F = function(e) {
  b(r, e);
  function r(t, n, i) {
    var o = e.call(this) || this, u;
    if (d(t) || !t)
      u = {
        next: t != null ? t : void 0,
        error: n != null ? n : void 0,
        complete: i != null ? i : void 0
      };
    else {
      var c;
      o && Z.useDeprecatedNextContext ? (c = Object.create(t), c.unsubscribe = function() {
        return o.unsubscribe();
      }, u = {
        next: t.next && C(t.next, c),
        error: t.error && C(t.error, c),
        complete: t.complete && C(t.complete, c)
      }) : u = t;
    }
    return o.destination = new ct(u), o;
  }
  return r;
}(q);
function E(e) {
  z(e);
}
function st(e) {
  throw e;
}
var at = {
  closed: !0,
  next: Q,
  error: st,
  complete: Q
}, Y = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function lt(e) {
  return e;
}
function ft(e) {
  return e.length === 0 ? lt : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
var y = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var i = this, o = dt(r) ? r : new F(r, t, n);
    return O(function() {
      var u = i, c = u.operator, a = u.source;
      o.add(c ? c.call(o, a) : a ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = H(t), new t(function(i, o) {
      var u = new F({
        next: function(c) {
          try {
            r(c);
          } catch (a) {
            o(a), u.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      n.subscribe(u);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[Y] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return ft(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = H(r), new r(function(n, i) {
      var o;
      t.subscribe(function(u) {
        return o = u;
      }, function(u) {
        return i(u);
      }, function() {
        return n(o);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
function H(e) {
  var r;
  return (r = e != null ? e : Z.Promise) !== null && r !== void 0 ? r : Promise;
}
function ht(e) {
  return e && d(e.next) && d(e.error) && d(e.complete);
}
function dt(e) {
  return e && e instanceof q || ht(e) && X(e);
}
function vt(e) {
  return d(e == null ? void 0 : e.lift);
}
function $(e) {
  return function(r) {
    if (vt(r))
      return r.lift(function(t) {
        try {
          return e(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function k(e, r, t, n, i) {
  return new pt(e, r, t, n, i);
}
var pt = function(e) {
  b(r, e);
  function r(t, n, i, o, u, c) {
    var a = e.call(this, t) || this;
    return a.onFinalize = u, a.shouldUnsubscribe = c, a._next = n ? function(s) {
      try {
        n(s);
      } catch (l) {
        t.error(l);
      }
    } : e.prototype._next, a._error = o ? function(s) {
      try {
        o(s);
      } catch (l) {
        t.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, a._complete = i ? function() {
      try {
        i();
      } catch (s) {
        t.error(s);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, a;
  }
  return r.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, r;
}(q), yt = K(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), N = function(e) {
  b(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new V(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new yt();
  }, r.prototype.next = function(t) {
    var n = this;
    O(function() {
      var i, o;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var u = S(n.currentObservers), c = u.next(); !c.done; c = u.next()) {
            var a = c.value;
            a.next(t);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            c && !c.done && (o = u.return) && o.call(u);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, r.prototype.error = function(t) {
    var n = this;
    O(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    O(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var n = this, i = this, o = i.hasError, u = i.isStopped, c = i.observers;
    return o || u ? W : (this.currentObservers = null, c.push(t), new I(function() {
      n.currentObservers = null, T(c, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, o = n.thrownError, u = n.isStopped;
    i ? t.error(o) : u && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new y();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new V(t, n);
  }, r;
}(y), V = function(e) {
  b(r, e);
  function r(t, n) {
    var i = e.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return r.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, r.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : W;
  }, r;
}(N), tt = {
  now: function() {
    return (tt.delegate || Date).now();
  },
  delegate: void 0
}, bt = function(e) {
  b(r, e);
  function r(t, n) {
    return e.call(this) || this;
  }
  return r.prototype.schedule = function(t, n) {
    return this;
  }, r;
}(I), j = {
  setInterval: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    var i = j.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, x([e, r], g(t))) : setInterval.apply(void 0, x([e, r], g(t)));
  },
  clearInterval: function(e) {
    var r = j.delegate;
    return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e);
  },
  delegate: void 0
}, mt = function(e) {
  b(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i.pending = !1, i;
  }
  return r.prototype.schedule = function(t, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = t;
    var o = this.id, u = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(u, o, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(u, this.id, n), this;
  }, r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), j.setInterval(t.flush.bind(t, this), i);
  }, r.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && j.clearInterval(n);
  }, r.prototype.execute = function(t, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, r.prototype._execute = function(t, n) {
    var i = !1, o;
    try {
      this.work(t);
    } catch (u) {
      i = !0, o = u || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, r.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, n = t.id, i = t.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, T(o, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, r;
}(bt), B = function() {
  function e(r, t) {
    t === void 0 && (t = e.now), this.schedulerActionCtor = r, this.now = t;
  }
  return e.prototype.schedule = function(r, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t);
  }, e.now = tt.now, e;
}(), wt = function(e) {
  b(r, e);
  function r(t, n) {
    n === void 0 && (n = B.now);
    var i = e.call(this, t, n) || this;
    return i.actions = [], i._active = !1, i;
  }
  return r.prototype.flush = function(t) {
    var n = this.actions;
    if (this._active) {
      n.push(t);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (t = n.shift());
    if (this._active = !1, i) {
      for (; t = n.shift(); )
        t.unsubscribe();
      throw i;
    }
  }, r;
}(B), St = function(e) {
  b(r, e);
  function r(t, n) {
    var i = e.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i;
  }
  return r.prototype.schedule = function(t, n) {
    return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this);
  }, r.prototype.execute = function(t, n) {
    return n > 0 || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n);
  }, r.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), i != null && i > 0 || i == null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, t, n, i) : (t.flush(this), 0);
  }, r;
}(mt), gt = function(e) {
  b(r, e);
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return r;
}(wt), xt = new gt(St), It = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function At(e) {
  return d(e == null ? void 0 : e.then);
}
function _t(e) {
  return d(e[Y]);
}
function Et(e) {
  return Symbol.asyncIterator && d(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Ot(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Pt() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Tt = Pt();
function kt(e) {
  return d(e == null ? void 0 : e[Tt]);
}
function jt(e) {
  return it(this, arguments, function() {
    var t, n, i, o;
    return J(this, function(u) {
      switch (u.label) {
        case 0:
          t = e.getReader(), u.label = 1;
        case 1:
          u.trys.push([1, , 9, 10]), u.label = 2;
        case 2:
          return [4, w(t.read())];
        case 3:
          return n = u.sent(), i = n.value, o = n.done, o ? [4, w(void 0)] : [3, 5];
        case 4:
          return [2, u.sent()];
        case 5:
          return [4, w(i)];
        case 6:
          return [4, u.sent()];
        case 7:
          return u.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Ut(e) {
  return d(e == null ? void 0 : e.getReader);
}
function et(e) {
  if (e instanceof y)
    return e;
  if (e != null) {
    if (_t(e))
      return Ct(e);
    if (It(e))
      return Rt(e);
    if (At(e))
      return Lt(e);
    if (Et(e))
      return rt(e);
    if (kt(e))
      return Ft(e);
    if (Ut(e))
      return Mt(e);
  }
  throw Ot(e);
}
function Ct(e) {
  return new y(function(r) {
    var t = e[Y]();
    if (d(t.subscribe))
      return t.subscribe(r);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Rt(e) {
  return new y(function(r) {
    for (var t = 0; t < e.length && !r.closed; t++)
      r.next(e[t]);
    r.complete();
  });
}
function Lt(e) {
  return new y(function(r) {
    e.then(function(t) {
      r.closed || (r.next(t), r.complete());
    }, function(t) {
      return r.error(t);
    }).then(null, z);
  });
}
function Ft(e) {
  return new y(function(r) {
    var t, n;
    try {
      for (var i = S(e), o = i.next(); !o.done; o = i.next()) {
        var u = o.value;
        if (r.next(u), r.closed)
          return;
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        o && !o.done && (n = i.return) && n.call(i);
      } finally {
        if (t)
          throw t.error;
      }
    }
    r.complete();
  });
}
function rt(e) {
  return new y(function(r) {
    qt(e, r).catch(function(t) {
      return r.error(t);
    });
  });
}
function Mt(e) {
  return rt(jt(e));
}
function qt(e, r) {
  var t, n, i, o;
  return nt(this, void 0, void 0, function() {
    var u, c;
    return J(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), t = ot(e), a.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (n = a.sent(), !!n.done)
            return [3, 4];
          if (u = n.value, r.next(u), r.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = a.sent(), i = { error: c }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), n && !n.done && (o = t.return) ? [4, o.call(t)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i)
            throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return r.complete(), [2];
      }
    });
  });
}
function P(e, r, t, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var o = r.schedule(function() {
    t(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(o), !i)
    return o;
}
function Yt(e, r) {
  return r === void 0 && (r = 0), $(function(t, n) {
    t.subscribe(k(n, function(i) {
      return P(n, e, function() {
        return n.next(i);
      }, r);
    }, function() {
      return P(n, e, function() {
        return n.complete();
      }, r);
    }, function(i) {
      return P(n, e, function() {
        return n.error(i);
      }, r);
    }));
  });
}
function $t(e, r) {
  return $(function(t, n) {
    var i = 0;
    t.subscribe(k(n, function(o) {
      n.next(e.call(r, o, i++));
    }));
  });
}
function Dt(e, r, t, n, i, o, u, c) {
  var a = [], s = 0, l = 0, p = !1, f = function() {
    p && !a.length && !s && r.complete();
  }, v = function(h) {
    return s < n ? m(h) : a.push(h);
  }, m = function(h) {
    o && r.next(h), s++;
    var D = !1;
    et(t(h, l++)).subscribe(k(r, function(A) {
      i == null || i(A), o ? v(A) : r.next(A);
    }, function() {
      D = !0;
    }, void 0, function() {
      if (D)
        try {
          s--;
          for (var A = function() {
            var _ = a.shift();
            u ? P(r, u, function() {
              return m(_);
            }) : m(_);
          }; a.length && s < n; )
            A();
          f();
        } catch (_) {
          r.error(_);
        }
    }));
  };
  return e.subscribe(k(r, v, function() {
    p = !0, f();
  })), function() {
    c == null || c();
  };
}
function M(e, r, t) {
  return t === void 0 && (t = 1 / 0), d(r) ? M(function(n, i) {
    return $t(function(o, u) {
      return r(n, o, i, u);
    })(et(e(n, i)));
  }, t) : (typeof r == "number" && (t = r), $(function(n, i) {
    return Dt(n, i, e, t);
  }));
}
function Gt(e, r) {
  return d(r) ? M(e, r, 1) : M(e, 1);
}
function Ht() {
  const e = new N(), r = e.asObservable().pipe(Yt(xt));
  let t, n;
  const i = (o) => (t = o.getState, (u) => (c) => {
    u(c), e.next(c);
  });
  return i.run = (o, u) => {
    if (n)
      return;
    const c = {
      getState: t,
      dispatch: u
    }, s = new y((l) => {
      l.next(c), l.complete();
    }).pipe(
      Gt(
        (l) => new y((p) => {
          r.subscribe((f) => {
            p.next({
              store: l,
              action: f
            });
          });
        })
      )
    );
    n = o(s, c);
  }, i.close = () => {
    !n || !(n != null && n.unsubscribe) || n.unsubscribe();
  }, i;
}
function Qt(...e) {
  const r = (t, n) => {
    const i = new I();
    for (let o = 0; o < e.length; o++)
      i.add(e[o](t, n));
    return i;
  };
  try {
    Object.defineProperty(Qt, "name", {
      value: `combineStreamers(${e.map((t) => t.name || "<anonymous>").join(", ")})`
    });
  } catch (t) {
  }
  return r;
}
function Vt(e) {
  const r = Array.isArray(e) ? e : [e];
  return (t) => new y(
    (n) => t.subscribe({
      next: (i) => r.includes(i.action.type) && n.next(i),
      error: n.error,
      complete: n.complete
    })
  );
}
function Bt(e) {
  return (r) => new y((t) => {
    r.subscribe({
      next: (n) => {
        n.store.dispatch(e), t.next(n);
      },
      error: t.error,
      complete: t.complete
    });
  });
}
function Jt(e) {
  return (r) => new y((t) => {
    r.subscribe({
      next: (n) => {
        e(n), t.next(n);
      },
      error: t.error,
      complete: t.complete
    });
  });
}
export {
  Qt as combineStreamers,
  Ht as createStreamMiddleware,
  Bt as dispatchAction,
  Jt as effect,
  Vt as filterAction
};
