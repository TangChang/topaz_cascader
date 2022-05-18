<template>
    <div class="main">
        <input class="city-sel" type="text" name="">
        <div class="m-select-area">
            <div>
                <ul>
                    <li v-for="li of list" :key="id" @click="parmsClick(li)"><input type="checkbox"
                            @change="parmsChange($event, li)" value="{{li.id}}">{{ li.name }}</li>
                </ul>
            </div>
            <div>
                <ul v-if="this.nodes.length > 0">
                    <li v-for="li of this.nodes" :key="id" @click="nodesClick(li)"><input type="checkbox"
                            @change="nodesChange(li)" value="{{li.id}}">{{ li.name }}</li>
                </ul>
            </div>
            <div>
                <ul v-if="this.threeNode.length > 0">
                    <li v-for="li of this.threeNode" :key="id" @click="threeClick(li)"><input type="checkbox"
                            @change="threeChange($event, li)" value="{{li.id}}">{{ li.name }}</li>
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
        // combinationFn(node, tempArr = []) {
        //     if(node.nodes){
        //         const tempArray = [ ...tempArr, node.name];
        //         // this.nav = tempArray
        //         node.nodes.map((n)=>{
        //             this.combinationFn(n, tempArray)
        //         })
        //     }else if (!node.nodes && tempArr){
        //         this.nav.push([ ...tempArr, node.name,])
        //     }
        // },
        combinationFn(node, method) {
            switch (method) {
                case "root":

                    break;
                case "tow":

                    break;
                case "three":
                    const pramsID = node.prams;
                    const pramsNode = this.list.filter(item => item.id === pramsID)
                    for (const item in pramsNode) {
                        console.log(item)
                    }
                    break;

                default:
                    break;
            }
        }, findParent(val) {
            let curNode = this.head;    //从头节点开始遍历  
            /**有指向的子节点,当子节点的元素等于输入的元素时，此节点就为需要的父节点 */
            while (curNode && curNode.next) {
                if (curNode.next.val == val) {
                    return curNode;
                }
                curNode = curNode.next;   //不相等则判断下一个节点    
            }
            return null;
        },
        parmsClick(node) {
            if (node && !node.nodes) return []
            const nodes = node.nodes
            this.nodes = nodes;
        },
        nodesClick(node) {
            if (node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        },
        threeClick(node) {
            if (node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        },
        parmsChange(ele, node) {
            // if(node && !node.nodes) return []
            // const nodes = node.nodes
            // this.nodes = nodes;
            if (ele.target.checked) {
                this.combinationFn(node)
                console.log(this.nav);
            }
        },
        nodesChange(node) {
            if (node && !node.nodes) return []
            const nodes = node.nodes
            this.threeNode = nodes;
        },
        threeChange(ele, node) {
            this.combinationFn(node, "three")
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
