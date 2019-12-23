<template>
    <div id="programGraph" class="container-fluid">
        <div class="row justify-content-between align-items-center">
            <div class="col col-md-6">
                <h4>Graph</h4>
            </div>
            <div class="col-auto">
                <b-button variant="primary" class="align-middle" type="button" @click="updateLayout"
                        >Update layout</b-button>
            </div>
        </div>
        <cytoscape ref="cy" :config="config" :preConfig="preConfig" :afterCreated="afterCreated">
            <cy-element
            v-for="def in elements"
            :key="`${def.data.id}`"
            :definition="def"
            />
        </cytoscape>
    </div>
</template>

<script>
    import {eventBus} from "../state";
    //import klay from 'cytoscape-klay';
    import dagre from 'cytoscape-dagre'
    import popper from 'cytoscape-popper'
    import nodeHtmlLabel from 'cytoscape-node-html-label'

    export default {
        name: "ProgramGraph",
        props: {
            program: Array,
            currentStepId: Number,
        },
        methods: {
            preConfig(cytoscape) {
                //cytoscape.use(klay)
                if (!cytoscape('core', 'dagre')) {
                    cytoscape.use(dagre)
                }
                if (!cytoscape('core', 'popper')) {
                    cytoscape.use(popper)
                }
                if (!cytoscape('core', 'nodeHtmlLabel')) {
                    cytoscape.use(nodeHtmlLabel)
                }
            },
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
                cy.nodeHtmlLabel(
                    [
                        {query: 'node',
                         tpl: function(data) {
                            return `<div class="container">
                                        <div class="row"><div class="col programNodeStep">${data.id}</div></div>
                                        <div class="row"><div class="col programNodeLabel">${data.label}</div></div>
                                    </div>`
                         }
                        },
                        /*{query: 'edge',
                         tpl: function(data) {
                            return `<span>${data.label}</span>`
                         }},*/
                    ])
                cy.layout(this.config.layout).run()
                console.log("layout complete")
            },
            programToGraph: function() {
                console.log("running programToGraph()")
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
                        let edge = {data: {id: `${elem.id}-${elem.goTo}g`, source: elem.id, target: elem.goTo, type: "goTo", label: ""}}
                        edges.push(edge)
                    }
                    if (elem.instruction === "deb") {
                        // branch to edge
                        let edge = {data: {id: `${elem.id}-${elem.branchTo}b`, source: elem.id, target: elem.branchTo, type: "branchTo", label: 0}}
                        edges.push(edge)
                    }
                }

                this.elements = [...nodes, ...edges]

            },
            nodeLabel: function(nodeData) {
                if (nodeData.instruction === "inc") {
                    return `+${nodeData.register}`
                } else if (nodeData.instruction === "deb") {
                    return `-${nodeData.register}`
                } else if (nodeData.instruction === "end") {
                    return "end"
                }
            },
            updateLayout: function() {
                if (this.$refs.cy) {
                    this.$refs.cy.afterCreated()
                }
            }
        },
        created() {
            this.programToGraph()
        },
        mounted() {
            //this.programToGraph()
            //eventBus.$on('program-updated', () => { this.programToGraph() })
            eventBus.$on('update-graph', () => { this.programToGraph() })
            this.updateLayout()
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
                          //'label': 'data(label)',
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
                              'label': 'data(label)',
                              //"source-label": 'data(source)',
                          }
                      }
                  ],
                  layout: {
                    //name: 'grid',
                      //name: 'klay',
                      name: 'dagre',
                    //rows: 2
                  }
                }
            }
        },
        components: {
        },
        watch: {
            program: {
                handler:function() {
                    this.programToGraph()
                },
                immediate: false
            },
            elements: function() {
                this.updateLayout()
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