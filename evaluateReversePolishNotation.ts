function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const numReg: RegExp = /^-?\d+\.?\d*$/;
    for( const token of tokens ) {
        if( token.match(numReg) ) {
            stack.push(Number(token));
        }
        else{
            let operand2 = stack.pop()!;
            let operand1 = stack.pop()!;
            let result = 0;
            switch( token ) {
                case( "+" ): {
                    result = operand1 + operand2;
                    break;
                }
                case( "-" ): {
                    result = operand1 - operand2;
                    break;
                }
                case( "*" ): {
                    result = operand1 * operand2;
                    break; 
                }
                case( "/" ): {
                    result = ~~(operand1 / operand2);
                    break;
                }
                default: {
                    break;
                }
            }
            stack.push(result);
        }

    }
    return stack[0];
};
