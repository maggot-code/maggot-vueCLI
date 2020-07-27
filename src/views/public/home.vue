<!--  -->
<template>
    <div class="home-zy">
        <Alert banner closable type="warning">通知：通知内容。。。</Alert>
        首页
        <Button type="success" @click="success">Success</Button>
        <Button type="error" @click="error">Error</Button>
        <div ref="box" style="width:200px;height:200px;background:#333;"></div>
        <!-- <mask-loading></mask-loading> -->
    </div>
</template>

<script>
    export default {
        name:'home-zy',
        components: {},
        data() {
            //这里存放数据
            return {
                arr:[],
            };
        },
        //监听属性 类似于data概念
        computed: {},
        //监控data中的数据变化
        watch: {},
        //方法集合
        methods: {
            success(){
                // this.$Message.loading({
                //     ...this.$op.msg,
                //     content:'hahahha',
                // })

                this.$ml.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
            },
            error(){
                // this.$Message.destroy();

                this.$ml.hide();
            }
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            // this.$api.ping().then(res=>{
            //     console.log(res);
            // })
        },
        //生命周期 - 挂载完成（可以访问DOM元素）
        mounted() {

        },
        beforeCreate() {}, //生命周期 - 创建之前
        beforeMount() {}, //生命周期 - 挂载之前
        beforeUpdate() {}, //生命周期 - 更新之前
        updated() {}, //生命周期 - 更新之后
        beforeDestroy() {}, //生命周期 - 销毁之前
        destroyed() {}, //生命周期 - 销毁完成
        activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>
<style lang='scss'></style>