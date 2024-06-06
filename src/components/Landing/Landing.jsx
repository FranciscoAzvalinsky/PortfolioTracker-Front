import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Element } from 'react-scroll';

import  CarouselFunction from "../CarouselFunction/CarouselFunction";


export default function Landing() {

  return (
      <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
          
          <Box sx={{ flex: 1 }}>
              <Box sx={{ width: '100%', pt: { xs: 6, md: 12, lg: 16 }, borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
                  <Box sx={{ px: { xs: 2, md: 3, xl: 5 }, maxWidth: 1300, mx: 'auto', gap: { xs: 2, md: 8 }, display: 'grid', gridTemplateColumns: { md: 'repeat(2, 1fr)' } }}>
                      <Box>
                          <Typography color= 'black' variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.125rem', xl: '3.4rem', '2xl': '3.75rem' }, fontWeight: 700, lineHeight: 'tighter', letterSpacing: 'tighter' }}>
                              Unlock the Power of Crypto Investing
                          </Typography>
                          <Typography  variant="body1" sx={{ mt: 2, maxWidth: 700, mx: 'auto', color: 'text.secondary' }}>
                              Our cryptocurrency portfolio tracker helps you stay on top of your investments with real-time price updates, advanced analytics, and easy transaction loading.
                          </Typography>
                          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                              <Link to="/signUp">
                                  <Button variant="contained" color="primary" sx={{ height: 36, px: 2, py: 1, fontSize: 14, fontWeight: 500 }}>
                                      Sign Up
                                  </Button>
                              </Link>
                          </Box>
                      </Box>
                      <CarouselFunction/>
                  </Box>
              </Box>
              <Box sx={{ width: '100%', py: { xs: 6, md: 12, lg: 16 }, bgcolor: '#f5f5f5' }}>
                  <Box sx={{ container: true, px: { xs: 2, md: 3 }, gap: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
                          <Element name="features">
                          </Element>
                          <Typography color= 'black' variant="h2" sx={{ fontSize: { xs: '1.875rem', sm: '3.125rem' }, fontWeight: 700, lineHeight: 'tighter', letterSpacing: 'tighter' }}>
                              Streamline Your Crypto Investments
                          </Typography>
                          <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', color: 'text.secondary' }}>
                              Our cryptocurrency portfolio tracker provides you with the tools you need to stay on top of your investments, from real-time price updates to advanced analytics and customizable watchlists.
                          </Typography>
                      </Box>
                      <Grid container spacing={4} sx={{ maxWidth: { sm: '100%', md: 1024, lg: 1280 }, mx: 'auto', gridTemplateColumns: { sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' } }}>
                          <Grid item xs={12} sm={6} lg={4}>
                              <Card>
                                  <CardContent>
                                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Real-Time Price Updates</Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Stay informed with real-time price updates on your favorite cryptocurrencies.</Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={4}>
                              <Card>
                                  <CardContent>
                                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Portfolio Analytics</Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Track the performance of your portfolio with advanced analytics and insights.</Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={4}>
                              <Card>
                                  <CardContent>
                                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Customizable Watchlists</Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Create and manage your own personalized watchlists to stay on top of the market.</Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={4}>
                              <Card>
                                  <CardContent>
                                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Secure and Reliable</Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Your data is safe with our secure platform and reliable infrastructure.</Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={4}>
                              <Card>
                                  <CardContent>
                                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Mobile-Friendly</Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Access your portfolio from anywhere with our mobile-optimized app.</Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={4}>
                              <Card>
                                  <CardContent>
                                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Intuitive Interface</Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Our user-friendly interface makes it easy to manage your investments.</Typography>
                                  </CardContent>
                              </Card>
                          </Grid>
                      </Grid>
                  </Box>
              </Box>
              <Box sx={{ width: '100%', py: { xs: 6, md: 12, lg: 4 }, bgcolor: '#f5f5f5' }}>
                  <Box sx={{ container: true, px: { xs: 2, md: 3 }, gap: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <Box sx={{ gap: .5, display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', md: '2.5rem' }, fontWeight: 700, lineHeight: 'tight', letterSpacing: 'tighter' }}>
                              What Our Customers Say
                          </Typography>
                          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary' }}>
                              Hear from our satisfied customers about how our cryptocurrency portfolio tracker has helped them manage their investments.
                          </Typography>
                      </Box>

                      <Card sx={{ width: '68%', borderRadius: 2, borderColor: 'divider' }}>
                          <Grid container spacing={0} sx={{ maxWidth: {  sm: '100%', md: 1024, lg: 1280 }, mx: 'auto', gridTemplateColumns: { sm: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' } }}>
                              <Grid item xs={12} sm={6} lg={4} >
                                  <Card>
                                      <CardContent>
                                          <Typography variant="h6" sx={{ fontWeight: 700 }}>John Doe</Typography>
                                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>"I've been using this portfolio tracker for months and it's been a game-changer for my crypto investments."</Typography>
                                      </CardContent>
                                  </Card>
                              </Grid>
                              <Grid item xs={12} sm={6} lg={4}>
                                  <Card>
                                      <CardContent>
                                          <Typography variant="h6" sx={{ fontWeight: 700 }}>Jane Smith</Typography>
                                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>"The real-time price updates and analytics have helped me make more informed investment decisions."</Typography>
                                      </CardContent>
                                  </Card>
                              </Grid>
                              <Grid item xs={12} sm={6} lg={4}>
                                  <Card>
                                      <CardContent>
                                          <Typography variant="h6" sx={{ fontWeight: 700 }}>Michael Johnson</Typography>
                                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>"I love the swap-transaction functionality. No other crypto-portfolio-tracker has it and it has been truly helpful for me."</Typography>
                                      </CardContent>
                                  </Card>
                              </Grid>
                          </Grid>
                      </Card>

                  </Box>
              </Box>
          </Box>
          <Box sx={{ py: 3, width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 1, borderTop: 1, borderColor: 'divider' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>© 2024 Crypto Tracker. All rights reserved.</Typography>
              <Box sx={{ ml: { sm: 'auto' }, display: 'flex', gap: { xs: 2, sm: 3 } }}>
                  <Link to="#" style={{ fontSize: 12, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      Privacy Policy
                  </Link>
                  <Link to="#" style={{ fontSize: 12, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      Terms of Service
                  </Link>
                  <Link to="#" style={{ fontSize: 12, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      Twitter
                  </Link>
                  <Link to="#" style={{ fontSize: 12, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      Discord
                  </Link>
              </Box>
          </Box>
      </Box>
  );
}

