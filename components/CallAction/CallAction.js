import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import link from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './action-style';

function CallAction(props) {
  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <ReactWOW animation="fadeInUpShort" offset={40} delay="0.3s" duration="0.5s">
            <Paper className={classes.paper}>
              <Grid container alignItems="center">
                <Grid item md={9} xs={12}>
                  <Typography variant="h4" gutterBottom display="block">
                    {t('common:about_ready')}
                  </Typography>
                  <Typography display="block" component="p">
                    Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                  </Typography>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Grid container alignItems="center">
                    <Button size="large" fullWidth href={link.agency.contact} className={classes.button}>
                      {t('common:btn_contact')}
                      <SendIcon className={classes.rightIcon} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </ReactWOW>
        </div>
      </Container>
    </Fragment>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(CallAction);
