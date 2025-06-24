import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className='container'>
      <h1>Products</h1>
      <div className="ota">
        <Card bg="#cbcbcb" btn_bg="#asasas"></Card>
        <Card bg="#5CA7FF" btn_bg="#FFC700"></Card>
        <Card bg="#D083FF" btn_bg="#00FFB2"></Card>
        <Card bg="#FF99E2" btn_bg="#FFC700"></Card>
        <Card bg="#cbcbcb" btn_bg="#00FFB2"></Card>
        <Card bg="#5CFF62" btn_bg="#FFC700"></Card>
      </div>
    </div>
  )
}

export default App