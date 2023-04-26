<template>
    <div class="colorBlock" style="background-color: brown;">{{ msg }}</div>
    <button @click="handleHello">测试 hello 事件</button>
</template>

<script>
export default {
    name: 'ColorBlock',
    props:["msg","name"],
    emits:["hello"],
    setup(props,context){
        console.log("@@@props",props);
        console.log("@@@context",context);
        console.log("@@@context.emit",context.emit);
        console.log("@@@context.slots",context.slots);

        function handleHello(){
            context.emit("hello",props.name);
        }

        return {
            handleHello
        }
    }
}
</script>

<style lang="scss">
    .colorBlock{
        width: 100px;
        height: 100px;
    }
</style>