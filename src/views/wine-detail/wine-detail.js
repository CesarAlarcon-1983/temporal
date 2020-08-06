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
  WineGraphInfo,
  WineGraphName,
  WineLocation,
  WineDesc,
  WineGraphGroup,
  WineBottle
} from './wine-detail.styles';
import wineBottle from '../../assets/images/wine-bottle.png';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: '2vw'
  },
  bottom: {
    color: 'rgba(255,255,255,.5)',
  },
  top: {
    color: 'rgba(165,2,56,.6)',
    animationDuration: '550ms',
    position: 'absolute',
    top:0,
    left: 0,
  },
  circle: {
  },
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={'100%'}
        thickness={6}
        value={100}
      />
      <CircularProgress
        variant="static"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={'100%'}
        thickness={6}
        {...props}
      />
    </div>
  );
}

export default function WineDetail() {
  const [progressOne, setProgressOne] = React.useState(0);
  const [progressTwo, setProgressTwo] = React.useState(0);
  const classes = useStylesFacebook();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressOne((prevProgress) => (prevProgress >= 25 ? 25 : prevProgress + 5));
      setProgressTwo((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 5));
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
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
              <FacebookCircularProgress value={progressOne} />
              <WineGraphName>{'TANNIN'}</WineGraphName>
              <WineGraphInfo />
            </WineGraph>
            <WineGraph>
              <WineGraphLabel>{'Medium'}</WineGraphLabel>
              <FacebookCircularProgress value={progressTwo} />
              <WineGraphName>{'BODY'}</WineGraphName>
              <WineGraphInfo />
            </WineGraph>
            <WineGraph>
              <WineGraphLabel>{'Medium'}</WineGraphLabel>
              <FacebookCircularProgress value={progressOne} />
              <WineGraphName>{'DRINKING'}</WineGraphName>
              <WineGraphInfo />
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