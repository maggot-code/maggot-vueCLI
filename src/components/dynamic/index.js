import MaskLoading from './mask_loading.js';

let maskLoadingInstance;

function getMaskLoadingInstance (render = undefined) {
    maskLoadingInstance = maskLoadingInstance || MaskLoading.newInstance({
        render: render
    });

    return maskLoadingInstance;
}

function loading (options) {
    const render = ('render' in options) ? options.render : undefined;

    let instance = getMaskLoadingInstance(render);

    instance.show(options);
}

MaskLoading.show = function (props = {}) {
    return loading(props);
};

MaskLoading.hide = function () {
    if (!maskLoadingInstance) return false;

    const instance = getMaskLoadingInstance();

    instance.remove(()=>{
        maskLoadingInstance = null;
    })
};

export default MaskLoading;