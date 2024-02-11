import PropTypes from 'prop-types'
import Button from './Button'

// eslint-disable-next-line react/prop-types
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
      color={showAdd ? "red" : "green"}
      text={showAdd ? "Close" : "Add"} 
      onClick={onAdd} />
    </header>
  )
}
// Default props
Header.defaultProps = {
  title: "Task Tracker",
}
// PropTypes required
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
