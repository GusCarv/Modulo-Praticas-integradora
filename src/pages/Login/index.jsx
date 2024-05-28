import React, { useState } from 'react';
import { FormControl, Input, FormHelperText, Grid, Container, Typography, Box, InputLabel, Button } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container maxWidth="sm">
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                minHeight="100vh"
            >
                <Box
                    sx={{
                        width: '100%',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: '#f5f5f5'
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Login
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="login_nome">Nome de Login</InputLabel>
                                <Input 
                                    id="login_nome" 
                                    aria-describedby="login_nome_helper_text" 
                                    value={login} 
                                    onChange={e => setLogin(e.target.value)} 
                                />
                                <FormHelperText id="login_nome_helper_text">
                                    Insira seu nome de login.
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="login_senha">Senha</InputLabel>
                                <Input 
                                    id="login_senha" 
                                    type="password"
                                    aria-describedby="login_senha_helper_text" 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                />
                                <FormHelperText id="login_senha_helper_text">
                                    Insira sua senha.
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth
                                onClick={() => console.log('Login:', login, 'Senha:', password)}
                            >
                                Entrar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
