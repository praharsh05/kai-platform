import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';

import styles from './ProfileSetupStyles';

export default function ProfileSetupForm() {
  return (
    <Box {...styles.mainContainerProps}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Full Name</Typography>
            <TextField
              fullWidth
              placeholder="Enter Name"
              name="fullName"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px', // Custom border radius
                  height: '52px', // Custom height
                  width: '294px',
                },
              }}
              {...styles.formTextField}
            />
          </Grid>
          <Grid item size={6}>
            <Typography {...styles.formLabel}>Occupation</Typography>
            <TextField
              fullWidth
              placeholder="Enter Occupation"
              name="occupation"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px', // Custom border radius
                  height: '52px', // Custom height
                  width: '294px',
                },
              }}
              {...styles.formTextField}
            />
          </Grid>
        </Grid>
        <Box
          {...styles.socialSection}
          sx={{ flexDirection: 'row', flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item size={12}>
              <Typography {...styles.formLabel}>Social Links</Typography>
              <Grid
                item
                size={12}
                sx={{
                  width: '613px', // Custom width
                  paddingBottom: '12px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '30px', // Custom border radius
                    height: '52px', // Custom height
                  },
                }}
              >
                <Box {...styles.uploadBox}>
                  <FacebookRoundedIcon
                    {...styles.socialIcons}
                    sx={{
                      color: 'primary.main',
                      mr: 1,
                      my: 0.5,
                      width: '24px',
                      height: '24px',
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="| Paste Link"
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': {
                        borderBottom: 'none', // Remove the default bottom border (underline)
                      },
                      '& .MuiInput-underline:after': {
                        borderBottom: 'none', // Remove the focused bottom border (underline)
                      },
                      '& .MuiInputBase-root': {
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottom: 'none', // Remove the bottom border on hover
                        },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item size={12} sx={{ paddingBottom: '12px' }}>
                <Box {...styles.uploadBox}>
                  <LinkedInIcon
                    {...styles.socialIcons}
                    sx={{
                      color: 'primary.main',
                      mr: 1,
                      my: 0.5,
                      width: '24px',
                      height: '24px',
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="| Paste Link"
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': {
                        borderBottom: 'none', // Remove the default bottom border (underline)
                      },
                      '& .MuiInput-underline:after': {
                        borderBottom: 'none', // Remove the focused bottom border (underline)
                      },
                      '& .MuiInputBase-root': {
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottom: 'none', // Remove the bottom border on hover
                        },
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item size={12}>
                <Box {...styles.uploadBox}>
                  <TwitterIcon
                    {...styles.socialIcons}
                    sx={{
                      color: 'primary.main',
                      mr: 1,
                      my: 0.5,
                      width: '24px',
                      height: '24px',
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="| Paste Link"
                    variant="standard"
                    sx={{
                      '& .MuiInput-underline:before': {
                        borderBottom: 'none', // Remove the default bottom border (underline)
                      },
                      '& .MuiInput-underline:after': {
                        borderBottom: 'none', // Remove the focused bottom border (underline)
                      },
                      '& .MuiInputBase-root': {
                        '&:hover:not(.Mui-disabled):before': {
                          borderBottom: 'none', // Remove the bottom border on hover
                        },
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Profile</Typography>
            <Box {...styles.uploadBox} sx={{ width: '613px' }}>
              <Grid container>
                <Grid item size={12}>
                  <Typography {...styles.formLabel}>Drag & Drop OR </Typography>
                  <Button>Upload an Image</Button>
                </Grid>
                <Typography {...styles.formProfileCaption}>
                  Formats: JPG, PNG, PDF | Upto 1 MB
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item size={12}>
            <Typography {...styles.formLabel}>Bio</Typography>
            <Grid item size={12}>
              <TextField
                fullWidth
                placeholder="Introduce yourself in a few words"
                sx={{
                  width: '525px', // Custom width
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px', // Custom border radius
                  },
                }}
              />
            </Grid>
            <Typography {...styles.formProfileCaption}>
              Word Limit: 200 words
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
