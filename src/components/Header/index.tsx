import { ChainId } from '@bscswap/sdk'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'

import styled from 'styled-components'

import Logo from '../../assets/images/bscLogo-black.png'
import LogoDark from '../../assets/images/bscLogo.png'

import DdIcon01 from '../../assets/images/ddIcon-01.png'
import DdIcon02 from '../../assets/images/ddIcon-02.png'
import DdIcon03 from '../../assets/images/ddIcon-03.png'
import DdIcon04 from '../../assets/images/ddIcon-04.png'
import DdIcon05 from '../../assets/images/ddIcon-05.png'
import DdIcon06 from '../../assets/images/ddIcon-06.png'

import DdIconDark01 from '../../assets/images/ddIcon-01-dark.png'
import DdIconDark02 from '../../assets/images/ddIcon-02-dark.png'
import DdIconDark03 from '../../assets/images/ddIcon-03-dark.png'
import DdIconDark04 from '../../assets/images/ddIcon-04-dark.png'
import DdIconDark05 from '../../assets/images/ddIcon-05-dark.png'
import DdIconDark06 from '../../assets/images/ddIcon-06-dark.png'

import Bscicon from '../../assets/images/bsc-icon.png'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'
import { useETHBalances } from '../../state/wallet/hooks'

import { YellowCard } from '../Card'
import Settings from '../Settings'
import Menu from '../Menu'

import { RowBetween } from '../Row'
import Web3Status from '../Web3Status'

// import "./header.css"

import "./css/boilerplate.css?v=1.5"
import "./css/odometer-theme-train-station.css"
import "./css/protip.min02.css?v=1.5"
import "./css/jquery.mCustomScrollbar.css"
import "./css/jointer-binanceSwap-style.css?v=1.5"
import "./css/jointer-binanceSwap-Responsive-style.css?v=1.5"




const Nav: React.FC = () => {
  return (
    <StyledNav>
     
    </StyledNav>
  )
}

//todo delete
const Nav1: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="#/swap" className="active">Exchange</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://bscswap.info" target="_blank">Analysis</StyledAbsoluteLink>
      {/* <StyledAbsoluteLink href="https://bscswap.pro" target="_blank">BSCswap Pro</StyledAbsoluteLink> */}
      {/* <StyledAbsoluteLink href="https://stable.bscswap.com" target="_blank">BSCswap Stable</StyledAbsoluteLink> */}
      <StyledAbsoluteLink href="https://degenswap.io" target="_blank">DegenSwap</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pool.bscswap.com" target="_blank">LaunchField</StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #000000;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #FFBB00;
  }
  &.active {
    color: #FFBB00;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`


const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;

  :hover {
    cursor: pointer;
  }
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const UniIcon = styled.div`
  // transition: transform 0.3s ease;
  // :hover {
  //   transform: rotate(-5deg);
  // }
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    align-items: flex-end;
  `};
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: 'Wrong Network',
  [ChainId.RINKEBY]: 'Wrong Network',
  [ChainId.ROPSTEN]: 'Wrong Network',
  [ChainId.GÖRLI]: 'Wrong Network',
  [ChainId.KOVAN]: 'Wrong Network',
  [ChainId.BSC_MAINNET]: null,
  [ChainId.BSC_TESTNET]: 'Testnet'
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Main = styled.main `
  background-color:#2c2f36;
`


const HeaderFrame = styled.header`
  position:absolute; 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px 20px;
  z-index: 10;
  background-color: #303239;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
const LogoContainer = styled.a`
  margin-right: auto;
  position: relative;
  &:after{
    content:'BSCswap New Management';
    position: absolute;top: -9px;right:calc(-100% - 8px);
    border: none;
    background-color: #000;
    font:normal 7.5px/15px 'Press Start 2P', arial;padding: 2px 5px 1px 5px;border-radius: 3px;
    color: #fff;
  }
`

const LogoImage = styled.img`
  max-width: 100%; 
  height: auto;
  &:after{

  }
`


export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  const userEthBalance = useETHBalances([account])[account]
  const [isDark] = useDarkModeManager()

  return (
    <header className="bsc-Header ani-1">
    <div className="bscHeadContainer">
      <a href="https://bscswap.com/" target="_blank" className="headLogo"><img src={isDark ? LogoDark : Logo} /></a>
      <div className="headBar01">
        <nav className="rgdev green-btn clearfix">
          <ul className="mobile-sub rgdev-list">
            <li className="rgdev-item"><a href="#" title="Exchange" className="ani-1">/Welcome bonus
              </a>
            </li>
            <li className="rgdev-item"><a className="ani-1">/Trade </a></li>
            <li className="rgdev-item"><a className="ani-1">/Aggregator<div className="rgdevComingL">Coming Soon
                </div></a></li>
            <li className="rgdev-item"><a className="ani-1">/Farm<div className="rgdevComingL">Coming Soon</div></a>
            </li>
            <li className="rgdev-item"><a className="ani-1">/Burning Pools<div className="rgdevComingL">Coming Soon
                </div></a></li>
            <li className="rgdev-item"><a className="ani-1">/Stake<div className="rgdevComingL">Coming Soon</div>
              </a></li>
            <li className="rgdev-item"><a className="ani-1">/Lottery<div className="rgdevComingL">Coming Soon</div>
              </a></li>
            <li className="rgdev-item"><a className="ani-1">/NFT<div className="rgdevComingL">Coming Soon</div>
              </a></li>
            <li className="rgdev-item"><a className="ani-1">/IFO<div className="rgdevComingL">Coming Soon</div></a>
            </li>
          </ul>
          <div className="rgdev-mobile"><span className="icon-bar" /> <span className="icon-bar" /><span className="icon-bar" /></div>
          <div className="rgdev-text">Navigation</div>
        </nav>
      </div>
      <div className="headBar02">
        {/* <a href="javascript:void(0);" class="headBTN01"><i class="fab fa-ethereum"></i></a> */}
        <HeaderControls>
           <HeaderElement>
             <TestnetWrapper>
               {!isMobile && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
             </TestnetWrapper>
             <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
               {account && userEthBalance ? (
                 <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                   {userEthBalance?.toSignificant(4)} BNB
                 </BalanceText>
               ) : null}
               <Web3Status />
             </AccountElement>
           </HeaderElement>
           <HeaderElementWrap>
             <Settings />
             <Menu />
           </HeaderElementWrap>
         </HeaderControls>
        <a href="javascript:void(0);" className="headBTN04 ani-1" data-toggle="n-collapse" data-target="#MoDDContainer" aria-expanded="false" aria-controls="MoDDContainer">
          <span />
          <span />
          <span />
        </a>
      </div>
    </div>
    
    <div id="MoDDContainer" className="n-collapse">
      <div className="modd-Container">
        <div className="ddflex">
          <a><img src={DdIcon01} />  Analytics</a>
          <a><img src={DdIcon02} />  Twitter</a>
          <a><img src={DdIcon02} />  Telegram</a>
          <a><img src={DdIcon03} />  Discord</a>
          <a><img src={DdIcon03} />  WeChat</a>
          <a><img src={DdIcon04} />  Code</a>
          <a><img src={DdIcon05} />  Medium</a>
          <a><img src={DdIcon06} />  DappRadar</a>
          <a><img src={DdIcon06} />  CoinGecko</a>
          <a><img src={DdIcon06} />  CoinMarketCap</a>
          <a><img src={DdIcon05} />  BSCscan
            Contract</a>
          <div className="ddFlexiconLink">
            <a  className="active"><i className="fas fa-sun" /></a> / <a ><i className="fas fa-moon" /></a>
          </div>
        </div>
        <div className="ddsc02-Title01">Transaction Settings</div>
        <div className="ddsc02-Title02">Slippage tolerance<i className="help-circle"><i className="fas fa-question-circle protip" data-pt-title="Help" data-pt-position="top" aria-hidden="true" /></i></div>
        <div className="ddsc02-btnbar">
          <button className="ddsc02-BTN01">0.1%</button>
          <button className="ddsc02-BTN01 active">0.5%</button>
          <button className="ddsc02-BTN01">1%</button>
          <input type="text" defaultValue="0.50%" className="ddsc02-inPut01" />
        </div>
        <div className="ddsc02-Title02">Transaction deadline<i className="help-circle"><i className="fas fa-question-circle protip" data-pt-title="Help" data-pt-position="top" aria-hidden="true" /></i></div>
        <div className="ddsc02-btnbar">
          <input style={{textAlign: 'left'}} type="text" defaultValue="0.50%" className="ddsc02-inPut01" /> minutes
        </div>
        <div className="ddsc02-Title01">Interface Settings</div>
        <div className="ddsc02-Title02">Toogle expert mode<i className="help-circle"><i className="fas fa-question-circle protip" data-pt-title="Help" data-pt-position="top" aria-hidden="true" /></i>
          <button className="ddsc02-BTN02">
            <span>On</span><span>Off</span>
          </button>
        </div>
        <div className="ddsc02-Title02">Toogle dark mode
          <button className="ddsc02-BTN02 active">
            <span>On</span><span>Off</span>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
  // return (
  //   <Main>
  //     <HeaderFrame className="ani-1">
  //       <Container>
  //         <LogoContainer>
  //             <LogoImage src={isDark ? LogoDark : Logo} alt="logo"></LogoImage>
  //         </LogoContainer>
  //       </Container>
  //     </HeaderFrame>
  //   </Main>
  // )
  // return (
  //   <HeaderFrame>
  //     <RowBetween style={{ alignItems: 'flex-start'}} padding="1rem 1rem 0 1rem" >
  //       <HeaderElement>
  //         <Title href=".">
  //           <UniIcon>
  //             <img style={{ height: 100, width:400, marginTop:-35 }} src={isDark ? LogoDark : Logo} alt="logo" />
  //           </UniIcon>
  //         </Title>
  //       </HeaderElement>
  //       <Nav />
  //       <HeaderControls>
  //         <HeaderElement>
  //           <TestnetWrapper>
  //             {!isMobile && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
  //           </TestnetWrapper>
  //           <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
  //             {account && userEthBalance ? (
  //               <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
  //                 {userEthBalance?.toSignificant(4)} BNB
  //               </BalanceText>
  //             ) : null}
  //             <Web3Status />
  //           </AccountElement>
  //         </HeaderElement>
  //         <HeaderElementWrap>
  //           <Settings />
  //           <Menu />
  //         </HeaderElementWrap>
  //       </HeaderControls>
  //     </RowBetween>
  //   </HeaderFrame>
  // )
}
