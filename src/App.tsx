import { useEffect } from 'react'
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

  useEffect(() => {

    const scrollContainer = document.querySelector('.wrapper')
    scrollContainer.addEventListener('touchstart', (event) => {
      const startX = event.touches[0].pageX;
      const startY = event.touches[0].pageY;
    
      scrollContainer.addEventListener('touchmove', (event) => {
        const moveX = event.touches[0].pageX;
        const moveY = event.touches[0].pageY;
    
        const diffX = moveX - startX;
        const diffY = moveY - startY;
    
        if (Math.abs(diffX) > Math.abs(diffY)) {
          console.log(event.cancelable)
          if (event.cancelable) {
            event.preventDefault(); // 阻止默认的纵向滚动行为
          }
    
          scrollContainer.scrollLeft -= diffX; // 强制横向滚动
        }
      }, { passive: false });
    });
    
  }, [])

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
