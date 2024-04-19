(() => {
  var e = {
      663: () => {
        const e = document.querySelector(".drag-area"),
          t = e.querySelector("button"),
          s = e.querySelector("input"),
          o = document.querySelector(".drag-area__files"),
          n = document.querySelector(".drag-area__form");
        function i(t) {
          ((e) => "application/pdf" === e.type && e.size <= 10485760)(t)
            ? ((function (t) {
                const n = new FileReader();
                (n.onload = function () {
                  const n = document.createElement("div");
                  n.setAttribute("class", "drag-area__file");
                  const i = document.createElement("div");
                  i.setAttribute("class", "drag-area__filename"),
                    (i.textContent = t.name);
                  const a = document.createElement("button");
                  a.setAttribute("class", "drag-area__fileclose"),
                    (a.innerHTML =
                      '\n      <svg>\n        <use xlink:href="assets/img/sprite.svg#close-file"></use>\n      </svg>\n    '),
                    a.addEventListener("click", () => {
                      o.removeChild(n),
                        e.classList.remove("--error"),
                        e.classList.remove("--files"),
                        (s.value = "");
                    }),
                    n.appendChild(i),
                    n.appendChild(a),
                    o.appendChild(n);
                }),
                  n.readAsDataURL(t);
              })(t),
              e.classList.add("--files"))
            : n.classList.add("--error");
        }
        document.addEventListener("DOMContentLoaded", () => {
          t.addEventListener("click", () => s.click()),
            e.addEventListener("dragover", function (e) {
              e.preventDefault(), this.classList.add("--active");
            }),
            e.addEventListener("dragleave", function () {
              this.classList.remove("--active");
            }),
            e.addEventListener("drop", (e) => {
              e.preventDefault(),
                n.classList.remove("--active"),
                i(e.dataTransfer.files[0]);
            }),
            s.addEventListener("change", (e) => {
              i(e.target.files[0]);
            });
        });
      },
      922: () => {
        document.addEventListener("DOMContentLoaded", () => {
          const e = document.querySelectorAll(".js-dropdown");
          e &&
            e.forEach((e) => {
              const t = e.querySelector(".js-dropdown-inner"),
                s = e.querySelector(".js-dropdown-value"),
                o = e.querySelectorAll(".js-dropdown-item label");
              t.addEventListener("click", () => {
                e.classList.contains("--active")
                  ? e.classList.remove("--active")
                  : e.classList.add("--active");
              });
              for (let t = 0; t < o.length; t += 1)
                o[t].addEventListener("click", (t) => {
                  s &&
                    ((s.textContent = t.target.textContent),
                    e.classList.add("--filled"));
                });
              document.addEventListener("click", (t) => {
                t.target.closest(".js-dropdown-inner") ||
                  e.classList.remove("--active");
              });
            });
        });
      },
      658: () => {
        document.addEventListener("DOMContentLoaded", () => {
          (() => {
            const e = document.querySelector(".js-menu"),
              t = document.querySelector(".js-menu-btn"),
              s = document.querySelector(".js-menus");
            e &&
              t &&
              (t.addEventListener("mouseover", () => {
                e.classList.add("--active"), t.classList.add("--active");
              }),
              s.addEventListener("mouseleave", () => {
                e.classList.remove("--active"), t.classList.remove("--active");
              }));
          })();
        });
      },
      882: () => {
        const e = () => {
          const e = document.querySelectorAll(".input.--error");
          e &&
            e.forEach((e) => {
              e.addEventListener("input", function () {
                this.classList.remove("--error");
              });
            });
        };
        document.addEventListener("DOMContentLoaded", () => {
          (() => {
            const e = document.querySelectorAll(".input--pass");
            e &&
              e.forEach((e) => {
                const t = e.querySelector("input"),
                  s = e.querySelector(".input__btn");
                s.addEventListener("mousedown", (e) => {
                  e.preventDefault(),
                    s.classList.toggle("--open"),
                    "text" === t.getAttribute("type")
                      ? t.setAttribute("type", "password")
                      : t.setAttribute("type", "text"),
                    t.focus();
                });
              });
          })(),
            e(),
            (() => {
              const e = document.querySelector(".search");
              if (e) {
                const t = e.querySelector(".search__btn-reset"),
                  s = e.querySelector("input");
                s.addEventListener("input", () => {
                  s.value
                    ? t.classList.add("--active")
                    : t.classList.remove("--active");
                }),
                  t.addEventListener("click", () => {
                    t.classList.remove("--active"), s.focus();
                  });
              }
            })();
        });
      },
      253: () => {
        document.addEventListener("DOMContentLoaded", () => {
          !(function () {
            const e = document.querySelector(".modal-doc"),
              t = e.querySelector(".js-modal-doc-name"),
              s = e.querySelector(".js-modal-doc-orig"),
              o = e.querySelector(".js-modal-doc-file"),
              n = document.querySelectorAll('[data-graph-path="modal-doc"]'),
              i = document.querySelector(".js-result-success"),
              a = document.querySelector(".js-result-no-success");
            let c = null;
            i.addEventListener("click", () => {
              c &&
                (c.classList.remove("--no-success"),
                c.classList.add("--success"));
            }),
              a.addEventListener("click", () => {
                c &&
                  (c.classList.remove("--success"),
                  c.classList.add("--no-success"));
              }),
              n.forEach((e) => {
                e.addEventListener("click", () => {
                  c = e.parentElement.parentElement.parentElement;
                  const n = c.querySelector(".js-modal-doc-name").textContent,
                    i = c.querySelector(".js-modal-doc-orig").textContent,
                    a = c.querySelector(".js-modal-doc-file").textContent;
                  (t.textContent = n || "—"),
                    (s.textContent = i || "—"),
                    (o.textContent = a || "—");
                });
              });
          })(),
            (function () {
              const e = document.querySelector(".modal-protection"),
                t = e.querySelector(".js-modal-doc-orig"),
                s = e.querySelector(".js-modal-doc-file"),
                o = document.querySelectorAll(
                  '[data-graph-path="modal-protection"]'
                );
              let n = null;
              o.forEach((e) => {
                e.addEventListener("click", () => {
                  n = e.parentElement.parentElement.parentElement;
                  const o = n.querySelector(".js-modal-doc-orig").textContent,
                    i = n.querySelector(".js-modal-doc-file").textContent;
                  (t.textContent = o || "—"), (s.textContent = i || "—");
                });
              });
            })();
        });
      },
      326: () => {
        const e = document.querySelectorAll(".more-btns");
        document.addEventListener("click", (t) => {
          e &&
            e.forEach((e) => {
              const s = e.querySelector(".more-btns__content");
              e.contains(t.target) || s.classList.remove("--active");
            });
        }),
          document.addEventListener("DOMContentLoaded", () => {
            e &&
              e.forEach((e) => {
                const t = e.querySelector(".more-btns__btn"),
                  s = e.querySelector(".more-btns__content");
                t.addEventListener("click", () => {
                  s.classList.toggle("--active");
                });
              });
          });
      },
      924: () => {
        tippy(".js-notify", {
          content: (e) => e.getAttribute("data-notify"),
          placement: "bottom",
          animation: "fade",
        });
      },
    },
    t = {};
  function s(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, s), i.exports;
  }
  (() => {
    "use strict";
    s(924),
      s(882),
      s(658),
      s(326),
      s(922),
      s(663),
      s(253),
      new (class {
        constructor(e) {
          (this.options = Object.assign(
            { isOpen: () => {}, isClose: () => {} },
            e
          )),
            (this.modal = document.querySelector(".graph-modal")),
            (this.speed = 300),
            (this.animation = "fade"),
            (this._reOpen = !1),
            (this._nextContainer = !1),
            (this.modalContainer = !1),
            (this.isOpen = !1),
            (this.previousActiveElement = !1),
            (this._focusElements = [
              "a[href]",
              "input",
              "select",
              "textarea",
              "button",
              "iframe",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this._fixBlocks = document.querySelectorAll(".fix-block")),
            this.events();
        }
        events() {
          this.modal &&
            (document.addEventListener(
              "click",
              function (e) {
                const t = e.target.closest("[data-graph-path]");
                if (t) {
                  let e = t.dataset.graphPath,
                    s = t.dataset.graphAnimation,
                    o = t.dataset.graphSpeed;
                  return (
                    (this.animation = s || "fade"),
                    (this.speed = o ? parseInt(o) : 300),
                    (this._nextContainer = document.querySelector(
                      `[data-graph-target="${e}"]`
                    )),
                    void this.open()
                  );
                }
                e.target.closest(".js-modal-close") && this.close();
              }.bind(this)
            ),
            window.addEventListener(
              "keydown",
              function (e) {
                27 == e.keyCode && this.isOpen && this.close(),
                  9 == e.which && this.isOpen && this.focusCatch(e);
              }.bind(this)
            ),
            document.addEventListener(
              "click",
              function (e) {
                e.target.classList.contains("graph-modal") &&
                  e.target.classList.contains("is-open") &&
                  this.close();
              }.bind(this)
            ));
        }
        open(e) {
          if (
            ((this.previousActiveElement = document.activeElement), this.isOpen)
          )
            return (this.reOpen = !0), void this.close();
          (this.modalContainer = this._nextContainer),
            e &&
              (this.modalContainer = document.querySelector(
                `[data-graph-target="${e}"]`
              )),
            this.modalContainer.scrollTo(0, 0),
            this.modal.style.setProperty(
              "--transition-time",
              this.speed / 1e3 + "s"
            ),
            this.modal.classList.add("is-open"),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.disableScroll(),
            this.modalContainer.classList.add("graph-modal-open"),
            this.modalContainer.classList.add(this.animation),
            setTimeout(() => {
              this.options.isOpen(this),
                this.modalContainer.classList.add("animate-open"),
                (this.isOpen = !0),
                this.focusTrap();
            }, this.speed);
        }
        close() {
          this.modalContainer &&
            (this.modalContainer.classList.remove("animate-open"),
            this.modalContainer.classList.remove(this.animation),
            this.modal.classList.remove("is-open"),
            this.modalContainer.classList.remove("graph-modal-open"),
            this.enableScroll(),
            (document.body.style.scrollBehavior = "auto"),
            (document.documentElement.style.scrollBehavior = "auto"),
            this.options.isClose(this),
            (this.isOpen = !1),
            this.focusTrap(),
            this.reOpen && ((this.reOpen = !1), this.open()));
        }
        focusCatch(e) {
          const t = this.modalContainer.querySelectorAll(this._focusElements),
            s = Array.prototype.slice.call(t),
            o = s.indexOf(document.activeElement);
          e.shiftKey &&
            0 === o &&
            (s[s.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              o !== s.length - 1 ||
              (s[0].focus(), e.preventDefault());
        }
        focusTrap() {
          const e = this.modalContainer.querySelectorAll(this._focusElements);
          this.isOpen
            ? e.length && e[0].focus()
            : this.previousActiveElement.focus();
        }
        disableScroll() {
          let e = window.scrollY;
          this.lockPadding(),
            document.body.classList.add("disable-scroll"),
            (document.body.dataset.position = e),
            (document.body.style.top = -e + "px");
        }
        enableScroll() {
          let e = parseInt(document.body.dataset.position, 10);
          this.unlockPadding(),
            (document.body.style.top = "auto"),
            document.body.classList.remove("disable-scroll"),
            window.scrollTo({ top: e, left: 0 }),
            document.body.removeAttribute("data-position");
        }
        lockPadding() {
          let e = window.innerWidth - document.body.offsetWidth + "px";
          this._fixBlocks.forEach((t) => {
            t.style.paddingRight = e;
          }),
            (document.body.style.paddingRight = e);
        }
        unlockPadding() {
          this._fixBlocks.forEach((e) => {
            e.style.paddingRight = "0px";
          }),
            (document.body.style.paddingRight = "0px");
        }
      })();
  })();
})();
