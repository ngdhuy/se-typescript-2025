/**
 * * Implement Error handle for class using  Error class
 */

class MsgErr extends Error {
    public constructor(msg : string) {
      super(msg)
  
      // set prototype explicitly
      Object.setPrototypeOf(this, MsgErr.prototype)
    }
  
    // define method with arrow function style
    public print = () : string =>  `=> Error: ${this.message}`
  }
  
  const msgErr : MsgErr = new MsgErr('Cannot create Instant')
  console.error(msgErr.print())