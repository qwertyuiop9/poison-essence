import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

import assetCover from './images/toxic_snake.png';
import { Grid } from '@mui/material';



function AssetCard(props) {

    // props.name = "Nome asset";


    // class = "{not_owned_filter: $ownedCopies==0}"

    return (
        <Card sx={{ minWidth: "25%", maxWidth: "50%", borderRadius: 3, boxShadow: 8 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5, fontWeight: 'bold', textAlign: 'left', fontSize: 26 }} color="text.primary">
                    TOXIC SNAKE
                </Typography>

                <Image sx={{ borderRadius: 3, boxShadow: 3 }} src={assetCover} alt="Asset cover" borderRadius='50%' />





                <Typography sx={{ fontSize: 20, mt: 1.5 }} color="text.primary">
                    Asset type:
                </Typography>
                <Typography sx={{ fontSize: 20 }} color="text.primary">
                    Price:
                </Typography>

            </CardContent>
            <CardActions>
                <Grid sx={{pb: 2, pl: 2, pr: 2}} container spacing={3}>
                    <Grid item bt>
                        <Button variant="contained" size="medium">
                            Buy
                        </Button>
                    </Grid>
                    <Grid item vd>

                    </Grid>
                    <Grid item tx>
                        <Typography sx={{ mt: 5 }} variant='overline' color="text.secondary" align='right'>
                            Number owned:
                        </Typography>
                    </Grid>
                </Grid>

            </CardActions>
        </Card>
    );

} export default AssetCard;