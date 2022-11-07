import Nav  from '../NavBar/Nav'

const Header = ({className}) => {
  return (
    <header className={className}><Nav className={`nav${className}`}/></header>
  )
}

export default Header