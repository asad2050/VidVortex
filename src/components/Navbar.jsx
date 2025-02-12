import {Stack } from '@mui/material'
import {Link } from 'react-router-dom'
// import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
const logo = './logo.png';
// with sx you can provide any styles to material ui components
// you can hover over a @mui components  and check its demo to know more. To understand props accepted by a component hover and click on api.
const Navbar = () => (
   <Stack direction="row" alignItems="center" p={2} sx={{position:"sticky", background:"#000", top:"0", justifyContent:"space-between",zIndex:"1000"}}>
    <Link to='/' style={{display:'flex',alignItems:"center"}}>
    <img src={logo} alt="logo" height={45}/>
    </Link>
    <SearchBar/>
     
    
   </Stack>
  )


export default Navbar