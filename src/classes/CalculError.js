export class CalculError {
    constructor(args) {
      throw new Error(`${args.type}: ${args.message}`);
    };

    
}; 