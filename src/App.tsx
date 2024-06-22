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
    <div className='home'>
      <div>
        <img src='https://bigdreamerblog.oss-cn-beijing.aliyuncs.com/nextBlog/clHVKl.png' className='demo-img'/>
      </div>
      <div className='container'>
      <div className='wrapper'>
        {couponData.map(item => (
          <div className='coupon'>{item.name}</div>
        ))}
      </div>
    </div>
    <div>
        <img src='https://bigdreamerblog.oss-cn-beijing.aliyuncs.com/nextBlog/clHVKl.png' className='demo-img'/>
      </div>
      <div>
        <img src='https://bigdreamerblog.oss-cn-beijing.aliyuncs.com/nextBlog/clHVKl.png' className='demo-img'/>
      </div>
      <div>
        <img src='https://bigdreamerblog.oss-cn-beijing.aliyuncs.com/nextBlog/clHVKl.png' className='demo-img'/>
      </div>

      <div>
        <img src='https://bigdreamerblog.oss-cn-beijing.aliyuncs.com/nextBlog/clHVKl.png' className='demo-img'/>
      </div>
      <div>
        <img src='https://bigdreamerblog.oss-cn-beijing.aliyuncs.com/nextBlog/clHVKl.png' className='demo-img'/>
      </div>
    </div>
  )
}

export default App
