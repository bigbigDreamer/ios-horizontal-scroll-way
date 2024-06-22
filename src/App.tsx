import './App.css'


const couponData = [
  { name: '立减券' },
  { name: '折扣券' },
  { name: '免房券' },
  { name: '升房券1' },
  { name: '升房券2' },
  { name: '升房券3' },
]

function App() {

  return (
    <div className='container'>
      <div className='wrapper'>
        {couponData.map(item => (
          <div className='coupon'>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
