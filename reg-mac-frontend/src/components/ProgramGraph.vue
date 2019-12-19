<template>
    <div id="programGraph">
        <h4>Graph</h4>
        <!--<cytoscape ref="cy" :config="config" :afterCreated="afterCreated"></cytoscape>-->
        <cytoscape ref="cy" :config="config" :afterCreated="afterCreated">
            <cy-element
            v-for="def in elements"
            :key="`${def.data.id}`"
            :definition="def"
            />
        </cytoscape>
        <h4>Graph2</h4>
    </div>
</template>

<script>
    export default {
        name: "ProgramGraph",
        props: {
            program: Array,
            currentStepId: Number,
        },
        methods: {
            async afterCreated(cy=null) {
                if (cy !== null) {
                    this.cy = cy
                    console.log("storing cytoscape instance")
                } else {
                    cy = this.cy
                    console.log("loading cytoscape instance")
                }
                await cy
                console.log("running layout")
                cy.layout(this.config.layout).run()
                console.log("layout complete")
            },
            programToGraph: function() {
                // establish nodes
                var nodes = []
                for (let i in this.program) {
                    let node = {}
                    node.data = { ...this.program[i]}
                    node.data.label = this.nodeLabel(node.data)
                    nodes.push(node)
                }
                // establish edges
                var edges = []
                for (let i in nodes) {
                    let elem = nodes[i].data
                    if (elem.instruction === "inc" || elem.instruction === "deb") {
                        // go to edge
                        let edge = {data: {id: `${elem.id}-${elem.goTo}`, source: elem.id, target: elem.goTo, type: "goTo"}}
                        edges.push(edge)
                    }
                    if (elem.instruction === "deb") {
                        // branch to edge
                        let edge = {data: {id: `${elem.id}-${elem.branchTo}`, source: elem.id, target: elem.branchTo, type: "branchTo"}}
                        edges.push(edge)
                    }
                }

                this.elements = [...nodes, ...edges]
                this.config.elements = [...this.elements]
            },
            nodeLabel: function(nodeData) {
                if (nodeData.instruction === "inc") {
                    return `+${nodeData.register}`
                } else if (nodeData.instruction === "deb") {
                    return `-${nodeData.register}`
                } else if (nodeData.instruction === "end") {
                    return "end"
                }
            }
        },
        created() {
            this.programToGraph()
        },
        mounted() {

        },
        data: function() {
            return {
                elements: [],
                config: {
                  style: [
                    {
                      selector: 'node',
                      style: {
                          'background-color': 'blue', //'#666',
                          'label': 'data(label)',
                          'text-wrap': 'wrap',
                          "text-valign": "center",
                          "text-halign": "center",
                          'color': 'white',
                          "width": '50px',
                          "height": '50px',
                          //"shape": 'round',
                          "padding": '50%',
                      }
                    }, {
                          selector: 'edge',
                          style: {
                              'curve-style': 'bezier',
                              'width': 3,
                              'line-color': '#ccc',
                              'target-arrow-color': '#ccc',
                              'target-arrow-shape': 'triangle',
                              "source-label": 'data(source)',
                          }
                      }
                  ],
                  layout: {
                    name: 'grid',
                    rows: 2
                  }
                }
            }
        },
        components: {
        },
        watch: {
            program: function() {
                this.programToGraph()
                this.$refs.cy.afterCreated()
            },
        }
    }
</script>

<style scoped>
    #cy {
        height: 200px;
        width: 100%;
    }
</style>