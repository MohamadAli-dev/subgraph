import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>()

    // Add USDC
    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0x43D8814FdFB9B8854422Df13F1c66e34E4fa91fD'),
        'USDC',
        'USD Coin',
        BigInt.fromI32(6)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xFa95D53e0B6e82b2137Faa70FD7E4a4DC70Da449'),
        'WKAVA',
        'Wrapped Kava',
        BigInt.fromI32(6)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0x66Cd011aDfF20f2B4bA60cDd30099B5E09CcACd1'),
        'BUSD',
        'BUSD',
        BigInt.fromI32(18)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xE2D3B480C319C9cc525f14fe0DaF7cDcA7bF0c48'),
        'VARA',
        'Vara',
        BigInt.fromI32(18)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xB1771bF4090b2D1641795353A12D2F164556AECd'),
        'USDT',
        'USDT',
        BigInt.fromI32(6)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0x6c2a54580666d69cf904a82d8180f198c03ece67'),
        'WETH',
        'Wrapped ETH',
        BigInt.fromI32(18) // done 
      )
    )
    

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0x9403d62811FAF985fD4e23dcfb16a643A9239BFf'),
        'DAI',
        'DAI',
        BigInt.fromI32(18) // almost 
      )
    )


    // Keeping those to check on how get the decimals
    // // Add DGD
    // let tokenDGD = new TokenDefinition(
    //   Address.fromString('0xe0b7927c4af23765cb51314a0e0521a9645f0e2a'),
    //   'DGD',
    //   'DGD',
    //   BigInt.fromI32(9)
    // )
    // staticDefinitions.push(tokenDGD)

    // // Add AAVE
    // let tokenAAVE = new TokenDefinition(
    //   Address.fromString('0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'),
    //   'AAVE',
    //   'Aave Token',
    //   BigInt.fromI32(18)
    // )
    // staticDefinitions.push(tokenAAVE)

    // // Add LIF
    // let tokenLIF = new TokenDefinition(
    //   Address.fromString('0xeb9951021698b42e4399f9cbb6267aa35f82d59d'),
    //   'LIF',
    //   'Lif',
    //   BigInt.fromI32(18)
    // )
    // staticDefinitions.push(tokenLIF)

    // // Add SVD
    // let tokenSVD = new TokenDefinition(
    //   Address.fromString('0xbdeb4b83251fb146687fa19d1c660f99411eefe3'),
    //   'SVD',
    //   'savedroid',
    //   BigInt.fromI32(18)
    // )
    // staticDefinitions.push(tokenSVD)

    // // Add TheDAO
    // let tokenTheDAO = new TokenDefinition(
    //   Address.fromString('0xbb9bc244d798123fde783fcc1c72d3bb8c189413'),
    //   'TheDAO',
    //   'TheDAO',
    //   BigInt.fromI32(16)
    // )
    // staticDefinitions.push(tokenTheDAO)

    // // Add HPB
    // let tokenHPB = new TokenDefinition(
    //   Address.fromString('0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2'),
    //   'HPB',
    //   'HPBCoin',
    //   BigInt.fromI32(18)
    // )
    // staticDefinitions.push(tokenHPB)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}