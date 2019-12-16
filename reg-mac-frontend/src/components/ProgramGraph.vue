<template>
    <div id="programGraph">
        <h4>Graph</h4>

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
            async afterCreated(cy) {
                await cy
                cy.layout(this.config.layout).run()
            },
            programToGraph: function() {
                // establish nodes
                for (let step in this.program) {
                    let ind = this.elements.nodes.findIndex(x => x.id == this.program[step].id)
                    if (ind === -1) {
                        // create new node

                    }
                    // update node
                    let node = this.elements.nodes[ind].data
                    node.data = this.program[step].data
                    node.label = this.nodeLabel(node)
                }
                // establish edges

            },
            nodeLabel: function(node) {
                if (node.instruction === "inc") {
                    return `+{node.register}`
                } else if (node.instruction === "deb") {
                    return `-{node.register}`
                } else if (node.instruction === "end") {
                    return "end"
                }
            }
        },
        mounted() {
            /*cytoscape({
                container: this.$refs['cy'], // container to render in
                elements: {
                    nodes: [ // list of graph elements to start with
                        {data: {id: '0', label: 'start', instruction: 'start'}},
                        {data: {id: '1', label: '-1', instruction: 'deb', register: 1, goTo: '2', branchTo: '3'}},
                        {data: {id: '2', label: '+2', instruction: 'inc', register: 2, goTo: '1'}},
                        {data: {id: '3', label: 'end', instruction: 'end'}},
                    ],
                    edges: [
                        {data: {id: '01', source: '0', target: '1', type: 'goTo'}},
                        {data: {id: '12', source: '1', target: '2', type: 'goTo'}},
                        {data: {id: '21', source: '2', target: '1', type: 'goTo'}},
                        {data: {id: '13', source: '1', target: '3', type: 'branchTo'}}
                    ]
                },

                style: [ // the stylesheet for the graph
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
                        "padding": '50%',
                    }
                },
                {
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
                    rows: 2,
                }
            })*/
        },
        data: function() {
            return {
                elements:
                    [ // list of graph elements to start with
                        {data: {id: '0', label: 'start', instruction: 'start'}},
                        {data: {id: '1', label: '-1', instruction: 'deb', register: 1, goTo: '2', branchTo: '3'}},
                        {data: {id: '2', label: '+2', instruction: 'inc', register: 2, goTo: '1'}},
                        {data: {id: '3', label: 'end', instruction: 'end'}},

                        {data: {id: '01', source: '0', target: '1', type: 'goTo'}},
                        {data: {id: '12', source: '1', target: '2', type: 'goTo'}},
                        {data: {id: '21', source: '2', target: '1', type: 'goTo'}},
                        {data: {id: '13', source: '1', target: '3', type: 'branchTo'}}
                    ]
                ,
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
    }
</script>

<style scoped>
    #cy {
        height: 200px;
        width: 100%;
    }
</style>