import './App.css'
import Badge from './components/badge/Badge'
import Banner from './components/banners/Banner'
function App() {

  return (
    <main>
      <h1>APP</h1>
      <div className='badges'>
        <Badge color="yellow" border="pill"> Prueba </Badge>
        <Badge color="blue" border="square"> Otra Prueba </Badge>
      </div>
      <div className='banners'>
        <Banner status="success" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." title="Congratulations!"></Banner>
        <Banner status="warning" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.." title="Attention"></Banner>
        <Banner status="error" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.." title="There is a problem with your application"></Banner>
        <Banner status="neutral" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." title="Update available!"></Banner>
      </div>
    </main>
  )
}

export default App
