interface Window {
  ethereum?: {
    isMetaMask?: true
    isTrust?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  }
  web3?: {}
}
