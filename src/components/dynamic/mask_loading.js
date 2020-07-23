import Vue from 'vue'
import MaskLoading from './mask_loading.vue'

import { transferIndex, transferIncrease } from '@/utils/transfer-queue';

function handleGetIndex() {
    transferIncrease();
    return transferIndex;
}

let tIndex = handleGetIndex();

MaskLoading.newInstance = properites => {
    const _props = properites || {};

    const Instance = new Vue({
        data: Object.assign({}, _props,{

        }),
        render (h) {
            let vnode = '';
            if (this.render) {
                vnode = h(MaskLoading,{
                    props: {}
                }, [this.render(h)]);
            } else {
                vnode = h(MaskLoading, {
                    props: {}
                });
            }
            console.log(vnode);
            return h('div', {
                'class': 'mask-loading-spin-zy',
                'style': {
                    'z-index': 2020 + tIndex
                }
            }, [vnode]);
        }
    })

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const maskLoad = Instance.$children[0];

    return {
        show () {
            maskLoad.visible = true;
            tIndex = handleGetIndex();
        },
        remove (cb) {
            maskLoad.visible = false;
            setTimeout(() => {
                maskLoad.$parent.$destroy();
                if (document.getElementsByClassName('mask-loading-spin-zy')[0] != undefined) {
                    document.body.removeChild(document.getElementsByClassName('mask-loading-spin-zy')[0]);
                }
                cb();
            }, 500);
        },
        component: maskLoad
    }
}

export default MaskLoading;