import React, { Fragment } from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import bottomCurve from '../../assets/images/wine-detail-bottom.svg';
import winelocation from '../../assets/images/location.png';
import Nav from '../../components/nav/nav';
import {
  BottomCurve,
  WineDetailInfo,
  WineDetailName,
  WineFeatures,
  WineGraph,
  WineGraphLabel,
  WineGrape,
  WineGraphInfoBtn,
  WineGraphName,
  WineLocation,
  WineDesc,
  WineGraphGroup,
  WineBottle,
  CheeseSuggestion,
  WineGraphinfo,
  BackButton,
  WineLocationInfo,
  WineCheeseInfo,
  CheeseInfoImage,
  SuggestedCheese
} from './wine-detail.styles';
import wineBottle from '../../assets/images/wine-bottle.png';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import cheeseSuggestion from '../../assets/images/brave.jpg';
import regionMap from '../../assets/images/region-map.svg';
import suggestedCheese from '../../assets/images/cheese3.png';
import cheeseSuggestionIcon from '../../assets/images/icon-wine-cheese.svg';
import video from '../../assets/videos/main.mp4';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { wrapperTransitions, textTransitions } from './wine-detail.transitions';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

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
        size={'10.3rem'}
        thickness={6}
        value={100}
      />
      <CircularProgress
        variant="static"
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={'10.3rem'}
        thickness={6}
        {...props}
      />
    </div>
  );
}

const liAnimations = {
  hidden:{
    opacity: 0,
    y: -100,
  },
  show:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  },
  exit:{
    y:-100,
    opacity: 0,
    transition: {
      duration: 1,
    }
  },
}

export default function WineDetail() {
  const [progressOne, setProgressOne] = React.useState(0);
  const [progressTwo, setProgressTwo] = React.useState(0);
  const [isWineInfovisible, setIsWineInfovisible] = React.useState(false);
  const [isLocationInfoVisible, setIsLocationInfovisible] = React.useState(false);
  const [isCheeseInfoVisible, setisCheeseInfoVisible] = React.useState(false);
  const [wineInfo, setWineInfo] = React.useState({
    title: '',
    text: ''
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressOne((prevProgress) => (prevProgress >= 25 ? 25 : prevProgress + 5));
      setProgressTwo((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 5));
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const WineGraphinfoVariant = {
    hidden:{
      opacity: 0,
    },
    show:{
      opacity: 1,
      transition: {
        duration: .5,
      }
    },
    exit:{
      opacity: 0,
      transition: {
        duration: .5,
      }
    },
  }

  const WineLocationInfoVariant = {
    hidden:{
      opacity: 0,
      y: '-200vh',

    },
    show:{
      opacity: 1,
      y: '0',
      transition: {
        duration: 1,
        delay: 1,
      }
    },
    exit:{
      y: '-200vh',
      opacity: 0,
      transition: {
        duration: 1,
      }
    },
  }

  const WineDetailInfoVariant = {
    hidden:{
      y: '-200vh',
      opacity: 0,
    },
    show:{
      y: '0',
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      }
    },
    exit:{
      opacity: 0,
      y: '-200vh',
      transition: {
        duration: 1,
      }
    },
  }

  const SuggestedCheeseVariant = {
    hidden:{
      opacity: 0,
    },
    show:{
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      }
    },
    exit:{
      opacity: 0,
      transition: {
        duration: 1,
      }
    },
  } 

  return (
    <motion.div
      variants={wrapperTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wrapper key={'wrapper'} video={video} overlay overlayGradient={'bottom'} overlayColor={'rgba(0,0,0,.7)'}>
        <AnimatePresence initial={false}>
          { 
            !isLocationInfoVisible && !isCheeseInfoVisible &&
            <WineDetailInfo
              layout
              key={'detalle'}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={WineDetailInfoVariant}
            >
              <WineDetailName>
                <span>Our Selection</span>
                <h1>Beyerskloof</h1>
                <span>Pinotage, Stellenbosch</span>
              </WineDetailName>
              <WineFeatures>
                <li>Deep red wine</li>
                <li>100% Pinotage</li>
              </WineFeatures>
              <WineGrape>
                <strong>{'Pinotage'}</strong>
                {'Red fruit and chocolate nose with hints of mocha and cedar.'}
              </WineGrape>
              <WineDesc>
              The Beyerskloof Pinotage boast with being South Africa's most popular Pinotage and it's no wonder. This wine has shown a fruity and enjoyable consistency year after year. Classic Pinotage. A wine made to enjoy and drink on any occasion. 
              </WineDesc>
              <WineGraphGroup>            
                <WineGraph>
                  <WineGraphLabel>{'Medium'}</WineGraphLabel>
                  <FacebookCircularProgress value={progressOne} />
                  <WineGraphName>{'TANNIN'}</WineGraphName>
                  <WineGraphInfoBtn 
                    onClick={() => {
                      setIsWineInfovisible(true);
                      setWineInfo({
                        title: 'TANNIN',
                        text: 'Tannins are substances found mainly in plants, bark, and leaves that create a drying, rubbing sensation on your tongue.'
                      })
                  }} />
                </WineGraph>
                <WineGraph>
                  <WineGraphLabel>{'Medium Low'}</WineGraphLabel>
                  <FacebookCircularProgress value={progressTwo} />
                  <WineGraphName>{'BODY'}</WineGraphName>
                  <WineGraphInfoBtn onClick={() => {
                    setIsWineInfovisible(true);
                    setWineInfo({
                      title: 'BODY',
                      text: 'Body describes the texture or weight of a wine in the mouth. This comes from a combination of elements, including alcohol, extract, glycerol, and acid.'
                    })
                  }} />
                </WineGraph>
                <WineGraph>
                  <WineGraphLabel>{'Easy'}</WineGraphLabel>
                  <FacebookCircularProgress value={progressOne} />
                  <WineGraphName>{'DRINKING'}</WineGraphName>
                  <WineGraphInfoBtn onClick={() => {
                    setIsWineInfovisible(true);
                    setWineInfo({
                      title: 'DRINKING',
                      text: 'A wine is easy to drink if it\'s balanced and the elements have evolved into harmony. It can be a wine with complexity or not. On the other hand Heavy wines are  those with too much sense of body.'
                    })
                  }} />
                </WineGraph>
                <AnimatePresence>
                  { isWineInfovisible &&
                    <WineGraphinfo
                      layout
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      variants={WineGraphinfoVariant}
                      key={'grafico'}
                    >
                      <strong>{wineInfo.title}</strong>
                      <p>{wineInfo.text}</p>
                      <WineGraphInfoBtn onClick={() => {
                        setIsWineInfovisible(false);
                      }}/>
                    </WineGraphinfo>
                  }
                </AnimatePresence>
              </WineGraphGroup>
            </WineDetailInfo>
          }
          {
            isLocationInfoVisible && !isCheeseInfoVisible &&
            <WineLocationInfo
              layout
              key={'ubicacion'}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={WineLocationInfoVariant}
            >
              <img src={regionMap} alt={'region'} />
              <WineDetailName>
                <h1>{'Stellenbosch'}</h1>
              </WineDetailName>
              <WineDesc>
                The region has a Mediterranean climate with hot dry summers and cool wet winters. Stellenbosch lies at the foot of the Cape Fold Mountain range, which provides favourable soils for viticulture - ranging from light, sandy soils to decomposed granite, creating several different sub-regions.
              </WineDesc>
              <BackButton onClick={() => {
                setIsLocationInfovisible(false);
              }}>
                <ArrowBack />
                <span>Back</span>
              </BackButton>
            </WineLocationInfo>
          }
          {
            !isLocationInfoVisible && isCheeseInfoVisible &&
            <WineCheeseInfo
              layout
              key={'detalle'}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={WineDetailInfoVariant}
            >
              <CheeseInfoImage>
                <img src={cheeseSuggestion} alt={'Cheese Suggestion'} />
              </CheeseInfoImage>
              <span>{'Cheese Suggestion'}</span>
              <WineDetailName>
                <h1>{'Stellenbosch'}</h1>
                <span>Pinotage, Stellenbosch</span>
              </WineDetailName>
              <WineDetailName>
                <h1>{'&'}</h1>
                <h1>{'Hard cheese'}</h1>
                <span>Wijngaard Affine</span>
              </WineDetailName>
              <BackButton onClick={() => {
                setisCheeseInfoVisible(false);
              }}>
                <ArrowBack />
                <span>Back</span>
              </BackButton>
            </WineCheeseInfo>
          }
          {
            !isCheeseInfoVisible && 
              <WineLocation 
                src={winelocation} alt={'Wine location'}
                layout
                key={'wine-locaiton'}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={SuggestedCheeseVariant}
                onClick={() => {
                  setIsLocationInfovisible(true);
                  setisCheeseInfoVisible(false);
              }}/>
          }
        </AnimatePresence>
      </Wrapper>
      <AnimatePresence>
        {
          !isCheeseInfoVisible && 
          <motion.div
          >
            <CheeseSuggestion
              layout
              key={'chees'}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={SuggestedCheeseVariant}
              onClick={() => {
                setIsLocationInfovisible(false);
                setisCheeseInfoVisible(true);
            }}>
              <img src={cheeseSuggestion} alt={'Cheese Suggestion'} />
              <span>{'Cheese Suggestion'}</span>
              <img src={cheeseSuggestionIcon} alt={'Cheese Suggestion Icon'} />
            </CheeseSuggestion>
            <BottomCurve
              layout
              key={'bottom-curve'}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={SuggestedCheeseVariant}
              src={bottomCurve} />
          </motion.div>
        }
        <WineBottle 
          layout
          key={'wine-bottle'}
          src={wineBottle}
        />
        {
          isCheeseInfoVisible &&
          <SuggestedCheese 
            layout
            key={'chees'}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={SuggestedCheeseVariant}
            src={suggestedCheese}
          />
        }      
        <Nav key={'nav'}/>
      </AnimatePresence>
    </motion.div>
  )
}