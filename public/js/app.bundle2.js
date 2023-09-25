    function a() {
        if (!T) {
            var t = void 0,
                e = void 0,
                i = void 0,
                o = p.scrollTop() + u;
            for (t = w.length - 1; t >= 0; t--)
                if (i = w[t], i.top <= o) {
                    e = !0, m != i.id && (x.history ? r(i.hash, !0) : c(i.id));
                    break
                }
            e || (m ? r("#", !0) : c())
        }
    }