<template>
    <div class="main">
        <input class="city-sel" type="text" name="">
        <div class="m-select-area">
            <div>
                <ul>
                    <li v-for="li of list" :key="id" @click="parmsClick(li)"><input type="checkbox" @change="parmsChange($event, li)"
                            value="{{li.id}}">{{ li.name }}</li>
                </ul>
            </div>
            <div>
                <ul v-if="this.nodes.length > 0">
                    <li v-for="li of this.nodes" :key="id" @click="nodesClick(li)"><input type="checkbox" @change="nodesChange(li)"
                            value="{{li.id}}">{{ li.name }}</li>
                </ul>
            </div>
            <div>
                <ul v-if="this.threeNode.length > 0">
                    <li v-for="li of this.threeNode" :key="id" @click="threeClick(li)"><input type="checkbox" @change="threeChange(li)"
                            value="{{li.id}}">{{ li.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CitySelect',
    data: function () {
        return {
            nodes: Array,
            threeNode: Array,
            nav: []
            
        }
    },
    props: {
        list: Object
    },
    methods: {
        combinationFn(node, tempArr = []) {
            if(node.nodes){
                const tempArray = [ ...tempArr, node.name];
                // this.nav = tempArray
                node.nodes.map((n)=>{
                    this.combinationFn(n, tempArray)
                })
            }else if (!node.nodes && tempArr){
                this.nav.push([ ...tempArr, node.name,])
            }
        },
        parmsClick(node) {
            if(node && !node.nodes) return []
        },
        nodesClick(node) {
            if(node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        },
        threeClick(node) {
            if(node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        },
        parmsChange(ele, node) {
            // if(node && !node.nodes) return []
            // const nodes = node.nodes
            // this.nodes = nodes;
            if(ele.target.checked){
                this.combinationFn(node)
                console.log(this.nav);
            }
        },
        nodesChange(node) {
            if(node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        },
        threeChange(node) {
            if(node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mian {}

.main .city-sel {
    width: 300px;
    height: 40px;
}

.main .m-select-area {
    width: 800px;
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;
    margin: 20px 0 50px 0;
    border: 1px solid #c1c1c1;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 2px 2px 5px #c1c1c1;
}

.main .m-select-area div {
    width: 100%;
    height: 120px;
    overflow-y: scroll;
}

.main .m-select-area div ul {
    border: none;
}

.main .m-select-area div ul li {
    list-style: none;
}
</style>
