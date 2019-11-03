# Register Machine

A web app based on Django intended as an educational tool to introduce concepts
of computer programming, based on Wang's register machine [1], as discussed in
Ch. 24 of Dennett [2].  Text and the register machine problems draw on 
Dennett's work.    

## Representation 

### Representation of register machine programs

JSON objects
```
rm_program = {steps: [{inst: <inc|dec|end>, register: <int>, goTo: <int>, branchTo: <int>},
         {inst: <inc|dec|end>, register: <int>, goTo: <int>, branchTo: <int>},
         ...]}
```

         
### Representation of register machine program tests

JSON objects
```
tests = { { name: <string>,
  register_start_values: { <id>: <value>, ... }
  register_end_values: { <id>: <value>, ... }
}, { } }
```

## References

1. Wang, H., 1957: "A variation to Turing's Theroy of Computing Machines." *Journal
of the Association for Computing Machinery*, pp. 63-92. 
2. Dennett, D., 2013, *Intuition pumps and other tools for thinking.*
