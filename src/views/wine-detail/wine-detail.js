import React, { Fragment } from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import bottomCurve from '../../assets/images/wine-detail-bottom.svg';
import winelocation from '../../assets/images/location.svg';
import Nav from '../../components/nav/nav';
import {
  BottomCurve,
  WineDetailInfo,
  WineDetailName,
  WineFeatures,
  WineGraph,
  WineGraphLabel,
  WineGraphCircle,
  WineGraphName,
  WineLocation,
  WineDesc,
  WineGraphGroup,
  WineBottle
} from './wine-detail.styles';
import wineBottle from '../../assets/images/wine-bottle.png';

export default function WineDetail() {
  return (
    <Fragment>
      <Wrapper image={pairingBg}>
        <WineDetailInfo>
          <WineDetailName>
            <span>Our Selection</span>
            <h1>Beyerskloof</h1>
            <span>Pinotage, Stellenbosch</span>
          </WineDetailName>
          <WineFeatures>
            <li>Deep red wine</li>
            <li>100% Pinotage</li>
          </WineFeatures>
          <WineDesc>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, consequat. Azzril delenit augue duis dolore te feugait nulla facilisi.
          </WineDesc>
          <WineGraphGroup>            
            <WineGraph>
              <WineGraphLabel>{'Medium'}</WineGraphLabel>
              <WineGraphCircle />
              <WineGraphName>{'TANNIN'}</WineGraphName>
            </WineGraph>
            <WineGraph>
              <WineGraphLabel>{'Medium'}</WineGraphLabel>
              <WineGraphCircle />
              <WineGraphName>{'BODY'}</WineGraphName>
            </WineGraph>
            <WineGraph>
              <WineGraphLabel>{'Medium'}</WineGraphLabel>
              <WineGraphCircle />
              <WineGraphName>{'DRINKING'}</WineGraphName>
            </WineGraph>
          </WineGraphGroup>
          <WineLocation src={winelocation} alt={'Wine location'} />
        </WineDetailInfo>
      </Wrapper>
      <BottomCurve src={bottomCurve} />
      <WineBottle src={wineBottle} />
      <Nav />
    </Fragment>
  )
}