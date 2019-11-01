


function runRegisterMachine(program, registers) {
    /* This function takes a program object comprised of instructions, as well as the states of different registers,
    and runs the register machine. */
    var ind = 0;
    var running = true;
    while (running) {
        let currStep = program.steps[ind];
        if (currStep.instruction === "inc") {
            registers[currStep.register]++;
            ind = currStep.goTo;
        } else if (currStep.instruction === "deb") {
            let reg = registers[currStep.register];
            if (reg === 0) {
                ind = currStep.branchTo;
            } else {
                reg--;
                ind = currStep.goTo;
            }
        } else if (currStep.instruction === "end") {
            running = false;
        }
    }
}
