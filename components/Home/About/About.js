import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactWOW from 'react-wow';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import TitleDeco from '../../Title/WithDecoration';
import useStyles from './about-style';
import Counter from '../Counter';

function About(props) {
  // Theme breakpoints
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation function
  const { t } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={5} xs={12}>
            <Box ml={{ lg: 15 }}>
              <TitleDeco text={t('common:agency-landing.about_title')} />
              {isDesktop && (
                <ReactWOW
                  animation="zoomInShort"
                  offset={-100}
                  delay="0.1s"
                  duration="0.3s"
                >
                  <div className={classes.puzzle}>
                    <div className={classes.pieceSmallTop}>
                      <span />
                    </div>
                    <div className={classes.pieceSmallBottom}>
                      <span />
                    </div>
                  </div>
                </ReactWOW>
              )}
              <ReactWOW
                animation="zoomInShort"
                offset={-180}
                delay="0.3s"
                duration="0.5s"
              >
                <div className={classes.deco}>
                  <div className={classes.big} />
                  <div className={classes.medium} />
                  <div className={classes.small} />
                </div>
              </ReactWOW>
            </Box>
          </Grid>
          <Grid item md={7} xs={12}>
            <h4 className={text.subtitle}>
              {t('common:agency-landing.about_subtitle')}
            </h4>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['agency-landing'])(About);
