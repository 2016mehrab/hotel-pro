import { useDarkMode } from '../context/DarkModeContext'
import ButtonIcon from './ButtonIcon'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

//{lightMode ? <HiOutlineSun /> : <HiOutlineMoon />}
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (

    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ?
        <HiOutlineSun /> :
        <HiOutlineMoon />
      }
    </ButtonIcon >
  )
}

export default DarkModeToggle
