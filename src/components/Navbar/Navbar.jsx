import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as Link2} from 'react-scroll'

import { useLocation } from "react-router-dom";

export default function Navbar(){

    let location = useLocation();
    console.log(location.pathname)
    return (
        <Box sx={{ px: { xs: 2, lg: 3 }, height: 56, display: 'flex', alignItems: 'center' }}>
              <Link to="#" style={{ display: 'flex', alignItems: 'center' }}>
                  <BitcoinIcon style={{ height: 24, width: 24 }} />
                  
              </Link>
              <Link to='/landing' style={{ display: '', alignItems: 'center', marginLeft: '46%', fontSize: 18, fontWeight: 700, fontFamily: 'sans-serif', textDecoration: 'none' }}>
                <span >Crypto Tracker</span>
              </Link>
              <Box sx={{ ml: 'auto', display: 'flex', gap: { xs: 2, sm: 3 } }}>
                { location.pathname !=='/signUp' && location.pathname !== '/login' &&
                    <Link2 to="features" smooth={true} duration={500} style={{ fontSize: 14, fontWeight: 500, color: 'blue', cursor: 'pointer' }}>
                      Features
                  </Link2>
                }
                  
                  <Link to="/about" style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      About
                  </Link>
                  <Link to="/contact" style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      Contact
                  </Link>
              </Box>
          </Box>
    )

    function BitcoinIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
            </svg>
        );
    }
}