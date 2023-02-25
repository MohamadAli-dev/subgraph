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
        Address.fromString('0xfA9343C3897324496A05fC75abeD6bAC29f8A40f'),
        'USDC',
        'USDCoin',
        BigInt.fromI32(6)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b'),
        'WKAVA',
        'Wrapped Kava',
        BigInt.fromI32(6)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0x332730a4F6E03D9C55829435f10360E13cfA41Ff'),
        'BUSD',
        'BUSD',
        BigInt.fromI32(18)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xE1da44C0dA55B075aE8E2e4b6986AdC76Ac77d73'),
        'VARA',
        'Vara',
        BigInt.fromI32(18)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xB44a9B6905aF7c801311e8F4E76932ee959c663C'),
        'USDT',
        'USDT',
        BigInt.fromI32(6)
      )
    )

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0xc13791DA84f43525189456CfE2026C60D3B7F706'),
        'WETH',
        'Wrapped ETH',
        BigInt.fromI32(18) // done 
      )
    )
    

    staticDefinitions.push(
      new TokenDefinition(
        Address.fromString('0x765277EebeCA2e31912C9946eAe1021199B39C61'),
        'DAI',
        'DAI',
        BigInt.fromI32(18) // almost 
      )
    )

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