import { resolveComponent, useSSRContext, ref, withCtx, createVNode, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$4 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: String,
    description: String,
    link: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-card" }, _attrs))} data-v-9f15f197><div class="flex items-end" data-v-9f15f197>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`<h3 data-v-9f15f197>${ssrInterpolate(__props.title)}</h3></div><p data-v-9f15f197>${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-9f15f197"]]);
const _sfc_main$3 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceCards = ref([
      {
        icon: "https://cdn-icons-png.flaticon.com/512/180/180872.png",
        description: "Lorem ipsum dolor sit amet 1",
        title: "One",
        link: "#"
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/180/180874.png",
        description: "Lorem ipsum dolor sit amet 2",
        title: "Two",
        link: "#"
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/180/180889.png",
        description: "Lorem ipsum dolor sit amet 3",
        title: "Three",
        link: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_serviceCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="container mx-auto py-10 space-y-10"><div><h2>Teake the load in smartly social media</h2><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat optio ea, natus explicabo animi dolorem. Repudiandae cum similique tempora, voluptatibus necessitatibus, fugiat tempore vel voluptate placeat ea repellendus molestiae! Veniam! </p></div><div class="flex justify-center"><div class="flex sm:justify-between width_500"><!--[-->`);
      ssrRenderList(serviceCards.value, (card, index) => {
        _push(ssrRenderComponent(_component_serviceCard, {
          key: index,
          description: card.description,
          link: card.link,
          title: card.title
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", card.icon)} alt="card-icon" width="45" height="25"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: card.icon,
                  alt: "card-icon",
                  width: "45",
                  height: "25"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div><div class="grid grid-cols-12 gap-12"><div class="col-span-6 overflow-hidden"><img class="object-cover rounded-xl" src="https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" alt=""></div><div class="col-span-6 flex justify-center flex-col gap-4"><h3 class="text-3xl max-w-sm">Lorem, ipsum dolor.</h3><p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, exercitationem!</p></div></div><div class="grid grid-cols-12 gap-12"><div class="col-span-6 flex justify-center flex-col gap-4"><h3 class="text-3xl max-w-sm">Lorem, ipsum dolor.</h3><p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, exercitationem!</p></div><div class="col-span-6 overflow-hidden"><img class="object-cover rounded-xl" src="https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" alt=""></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AppMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const links = ref([
      { text: "Demo", route: "#" },
      { text: "About", route: "#" },
      { text: "Blog", route: "#" },
      { text: "Pages", route: "#" },
      { text: "Contact", route: "#" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "container mx-auto bg-white/60 px-2 py-2 rounded-md sticky z-10 top-2 flex justify-between items-center" }, _attrs))}><div class="flex justify-center items-center gap-7"><div><a href="#" class="w-10 h-10 bg-orange-600 rounded-xl flex justify-center items-center"><svg style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" viewBox="0 0 24 24"><path fill="currentColor" d="M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z"></path></svg></a></div><div class="flex-center gap-2 uppercase"><!--[-->`);
      ssrRenderList(unref(links), ({ text, to }, index) => {
        _push(`<a class="pointer text-xs px-3 py-1 rounded-2xl text-neutral-600 hover:text-neutral-800"${ssrRenderAttr("href", to)}>${ssrInterpolate(text)}</a>`);
      });
      _push(`<!--]--></div></div><div class="flex-center gap-1"><a href="#" class="text-xs px-3 py-1 rounded-2xl text-neutral-600 hover:text-neutral-800">Sign In</a><a href="#" class="text-xs px-3 py-2 rounded-lg text-neutral-200 bg-indigo-900">Get Started Free</a></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_app_menu = _sfc_main$2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "min-h-[60vh] bg-orange-300" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_app_menu, null, null, _parent));
  _push(`<div class="max-w-xl mx-auto mt-20 relative space-y-6 py-10"><h1 class="text-5xl text-center text-neutral-800"> The best use of social marketing </h1><p class="text-center text-xs max-w-sm mx-auto"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maiores! Placeat nostrum fugiat maxime consequatur inventore molestiae modi, cupiditate sit. </p><div class="text-xs flex-center gap-4"><a href="#" class="bg-indigo-900 text-white px-3 py-2 border-2 border-transparent rounded"> Start 14 Days Trial </a><a href="#" class="bg-transparent text-neutral-700 px-3 py-2 border-2 border-indigo-900 flex-center gap-2 rounded"><svg style="${ssrRenderStyle({ "width": "12px", "height": "12px" })}" viewBox="0 0 24 24"><path fill="currentColor" d="M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z"></path></svg><span>Watch A Demo</span></a></div></div><div class="flex-center gap-4"><p class="flex-center"><svg class="text-current text-green-700" style="${ssrRenderStyle({ "width": "24px", "height": "24px" })}" viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg> Trustpilot </p><div class="flex-center gap-2"><div class="flex-center"><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<svg class="w-2 h-2 text-current text-orange-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>`);
  });
  _push(`<!--]--></div><p class="text-[8px]"> 484+ (5 Stars) </p></div></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IndexHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IndexHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_statistics = resolveComponent("statistics");
      const _component_key_future = resolveComponent("key-future");
      const _component_pricing = resolveComponent("pricing");
      const _component_faq = resolveComponent("faq");
      const _component_testimonials = resolveComponent("testimonials");
      const _component_contact_us = resolveComponent("contact-us");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(IndexHeader, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_component_statistics, null, null, _parent));
      _push(ssrRenderComponent(_component_key_future, null, null, _parent));
      _push(ssrRenderComponent(_component_pricing, null, null, _parent));
      _push(ssrRenderComponent(_component_faq, null, null, _parent));
      _push(ssrRenderComponent(_component_testimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_contact_us, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.c7c1a8df.mjs.map
